import React, { useState, useRef } from "react";

const ConvolutionPage = () => {
  // 상태 변수와 참조 변수를 정의합니다.
  const [imageData, setImageData] = useState(null); // 이미지 데이터를 저장하는 상태변수
  const uploadRef = useRef(null); // 파일 업로드 input 요소를 참조하는 ref
  const kernelRef = useRef(null); // 커널 입력 textarea 요소를 참조하는 ref
  const originalCanvasRef = useRef(null); /// 원본 이미지를 그릴 캔버스 요소를 참조하는 ref

  // 파일 업로드 이벤트 핸들러 함수입니다. CSV 파일을 읽고, 이미지 데이터로 변환합니다.
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const csvData = e.target.result;
        const parsedData = parseCsvToImageData(csvData);
        setImageData(parsedData);
        drawImage(originalCanvasRef.current, parsedData);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  // CSV 데이터를 이미지 데이터로 변환하는 함수입니다. 각 픽셀값은 CSV의 각 숫자에 대응합니다.
  const parseCsvToImageData = (csvData) => {
    const rows = csvData.trim().split("\n");
    return rows.map((row) => row.split(",").map(Number));
  };

  // 캔버스에 이미지를 그리는 함수입니다. 각 픽셀값에 대응하는 그레이스케일 색상을 사용합니다.
  const drawImage = (canvas, data) => {
    const ctx = canvas.getContext("2d");
    const height = data.length;
    const width = data[0].length;
    canvas.width = width;
    canvas.height = height;

    data.forEach((row, y) => {
      row.forEach((pixelValue, x) => {
        ctx.fillStyle = `rgb(${pixelValue}, ${pixelValue}, ${pixelValue})`;
        ctx.fillRect(x, y, 1, 1);
      });
    });
  };

  // 커널을 적용하기 위한 컨볼루션 연산 함수입니다. 컨볼루션은 이미지 처리에서 사용하는 기법 중 하나입니다.
  const applyKernelConvolution = (imageData, kernel, row, col) => {
    let sum = 0;
    const kernelSize = kernel.length;
    const kernelRadius = Math.floor(kernelSize / 2);

    for (let i = -kernelRadius; i <= kernelRadius; i++) {
      for (let j = -kernelRadius; j <= kernelRadius; j++) {
        // 이미지 경계 내에서만 연산 수행
        if (
          row + i >= 0 &&
          row + i < imageData.length &&
          col + j >= 0 &&
          col + j < imageData[0].length
        ) {
          const pixelValue = imageData[row + i][col + j];
          const kernelValue = kernel[i + kernelRadius][j + kernelRadius];
          sum += pixelValue * kernelValue;
        }
      }
    }
    // 결과값 정규화 (선택적)
    return Math.min(Math.max(sum, 0), 255);
  };

  // 컨볼루션 연산을 수행하는 함수입니다. 입력된 커널을 사용하여 이미지에 컨볼루션을 적용합니다.
  const performConvolution = () => {
    if (!imageData) return;
    let outputData = JSON.parse(JSON.stringify(imageData)); // 이미지데이터 복사
    const kernelData = kernelRef.current.value
      .split("\n")
      .map((row) => row.split(",").map(Number));

    let currentRow = 0;
    const processRow = () => {
      if (currentRow < imageData.length) {
        for (let j = 0; j < imageData[currentRow].length; j++) {
          outputData[currentRow][j] = applyKernelConvolution(
            imageData,
            kernelData,
            currentRow,
            j
          );
        }
        drawImage(originalCanvasRef.current, outputData);
        currentRow++;
        setTimeout(processRow, 5); // 다음 행 처리를 위한 지연
      }
    };

    processRow(); // 첫 번째 행 처리 시작
  };

  // 컴포넌트 렌더링 부분입니다. 파일 업로드, 커널 입력, 컨볼루션 적용 버튼, 그리고 이미지 출력 캔버스가 포함되어 있습니다.
  return (
    <div>
      <h3>Upload Grayscale Image CSV:</h3>
      <input
        type="file"
        id="upload"
        accept=".csv"
        ref={uploadRef}
        onChange={handleFileUpload}
      />
      <br />
      <h3>Enter 3x3 Kernel (comma-separated):</h3>
      <textarea id="kernel" rows="3" cols="20" ref={kernelRef}>
        -1, 0, 1 -1, 0, 1 -1, 0, 1
      </textarea>
      <br />
      <button onClick={performConvolution}>Apply Convolution</button>
      <h3>Image:</h3>
      <canvas id="originalCanvas" ref={originalCanvasRef}></canvas>
    </div>
  );
};

export default ConvolutionPage;

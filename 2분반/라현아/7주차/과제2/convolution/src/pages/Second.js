import React, { useState, useRef } from 'react';

function Second() {

  // useState Hook
  const [imageData, setImageData] = useState([]); // 이미지 픽셀 값 저장, 상태 업데이트
  const [kernel, setKernel] = useState([ // 커널 값 저장, 상태 업데이트
    // 초기값
    [-1, 0, 1],
    [-1, 0, 1],
    [-1, 0, 1]
  ]);
  
  // useRef Hook
  const canvasRef = useRef(null); // 캔버스 참조

  // add: 커널 입력
  // textarea에 커널 값을 입력하면, 이미지 처리를 하기 위해 
  // 코드가 이해할 수 있는 형태로 그 값을 적절하게 변환해야 함
  const handleKernelChange = (event) => {
    const kernelData = event.target.value.trim().split("\n") // 입력된 커널 -> 줄 단위로 분리
                           .map(row => row.split(",").map(Number)); // 각 줄 -> 숫자로 변환
    setKernel(kernelData); // 상태 변수 <- 커널 데이터 저장
  };
  
  // conv_prob 코드: 2차원 형태의 숫자 csv 파일 업로드 함수
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvData = e.target.result;
        const parsedData = parseCsvToImageData(csvData); // 'CSV 데이터 -> 2차원 배열' 변환
        setImageData(parsedData);
        drawImage(parsedData);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid CSV file.");
    }
  };

  // conv_prob 코드: 'CSV 데이터 -> 2차원 배열' 변환 함수
  const parseCsvToImageData = (csvData) => {
    const rows = csvData.trim().split("\n"); 
    return rows.map(row => row.split(",").map(Number)); 
  };

  // conv_prob 코드: 캔버스 이미지 그리기 함수
  const drawImage = (data) => {
    const canvas = canvasRef.current;
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

  // TODO: Implement this function
  // add: '컨볼루션 연산 수행 + 결과 시각화'
  // 이미지에 커널 값을 적용하는 것이 목적
  // 이미지 데이터를 복사해서 사용하고
  // 각 이미지 픽셀에 커널 값을 적용/계산
  // 해당 과정을 5ms 간격으로 업데이트
  const performConvolution = () => {
    const canvas = canvasRef.current; // useRef Hook -> 캔버스 참조
    const ctx = canvas.getContext("2d"); // 2D 컨텍스트

    const height = imageData.length;
    const width = imageData[0].length;

    // (이미지 데이터를 복사해서 사용하고)
    // 1. imageData 객체를 JSON 문자열로 변환: JSON.stringify(imageData)
    // 2. 다시 객체로 변환하여 imageData 카피본인 outputData 만들기: JSON.parse(...)
    const updatedData = JSON.parse(JSON.stringify(imageData));
    const delay = 0.001; // ! output 출력과정 재생간격: 5 (확인 위해 0.1로 수정함)

    let x = 1;
    let y = 1;

    // let step = 0;
    // const maxSteps = imageData.length - 2; 
    // // 3x3 커널 -> 가장자리 픽셀 제외

    const applyStep = () => {
      if (y >= height - 1) return;

      let newValue = 0;
      kernel.forEach((kernelRow, ky) => {
        kernelRow.forEach((kernelValue, kx) => {
          // ! Convolution 연산
          // (각 이미지 픽셀에 커널 값을 적용/계산)
          newValue += imageData[y + ky - 1][x + kx - 1] * kernelValue;
        });
      });
      updatedData[y][x] = newValue;
  
      // 현재 픽셀에 대한 업데이트를 반영하여 캔버스에 그리기
      ctx.fillStyle = `rgb(${newValue}, ${newValue}, ${newValue})`;
      ctx.fillRect(x, y, 1, 1);
  
      // 다음 픽셀로 이동
      x++;
      if (x >= width - 1) {
        x = 1;
        y++;
      }
  
      // 다음 픽셀로 이동 후 딜레이 적용
      setTimeout(applyStep, delay);
    };

    applyStep();
  };

  

  return (
    <div>
      <h3>Upload Grayscale Image CSV:</h3>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <br />
      <h3>Enter 3x3 Kernel (comma-separated):</h3>
      <textarea
        rows="3"
        cols="20"
        value={kernel.map(row => row.join(", ")).join("\n")} // 커널 값을 문자열로 변환하여 표시
        onChange={handleKernelChange} // 커널 변경 시 호출되는 함수
      />
      <br />
      <button onClick={performConvolution}>Apply Convolution</button>
      <h3>Image:</h3>
      <canvas ref={canvasRef}></canvas> {/* 캔버스 참조 */}
    </div>
  );
}

export default Second;
  
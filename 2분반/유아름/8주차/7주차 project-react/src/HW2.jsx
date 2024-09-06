import React, { useState, useRef, useCallback, useEffect } from 'react';

function HW2() {
  const [imageData, setImageData] = useState([]);
  const [kernel, setKernel] = useState([
    [1, 0, -1],
    [1, 0, -1],
    [1, 0, -1]
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const canvasRef = useRef(null);

  // 파일 업로드 처리 함수
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const csvData = e.target.result;
        const data = parseCsvToImageData(csvData);
        setImageData(data);
        drawImage(data); // 기본 이미지를 먼저 그리기
      };
      reader.readAsText(file);
    } else {
      alert("유효한 CSV 파일을 업로드해 주세요.");
    }
  }

  // CSV 데이터를 이미지 데이터 배열로 변환하는 함수
  function parseCsvToImageData(csvData) {
    const rows = csvData.trim().split("\n");
    return rows.map(row => row.split(",").map(Number));
  }

  // 커널 변경 처리 함수
  function handleKernelChange(event, rowIndex, colIndex) {
    const value = Number(event.target.value);
    setKernel(prevKernel => {
      const newKernel = prevKernel.map((row, rIdx) =>
        row.map((item, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? value : item
        )
      );
      return newKernel;
    });
  }

  // 컨볼루션 적용 함수
  function applyConvolution() {
    if (imageData.length === 0 || kernel.length === 0) {
      alert("이미지와 커널을 입력해 주세요.");
      return;
    }

    const resultSteps = performConvolution(imageData, kernel);
    setSteps(resultSteps);
    setCurrentStep(0);
  }

  // 컨볼루션 연산 수행 함수
  function performConvolution(image, kernel) {
    const height = image.length;
    const width = image[0].length;
    const kernelSize = kernel.length;
    const pad = Math.floor(kernelSize / 2);
    const output = Array(height).fill(null).map(() => Array(width).fill(0));
    const steps = [];

    for (let y = pad; y < height - pad; y++) {
      for (let x = pad; x < width - pad; x++) {
        let sum = 0;
        for (let ky = 0; ky < kernelSize; ky++) {
          for (let kx = 0; kx < kernelSize; kx++) {
            const pixel = image[y - pad + ky][x - pad + kx];
            const k = kernel[ky][kx];
            sum += pixel * k;
          }
        }
        output[y][x] = Math.max(0, Math.min(255, sum));
      }
    }

    steps.push(output.map(row => [...row]));
    return steps;
  }

  // 컨볼루션 시각화 함수
  const visualizeConvolution = useCallback(() => {
    if (steps.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const height = steps[0].length;
    const width = steps[0][0].length;

    canvas.width = width;
    canvas.height = height;

    function drawStep(step) {
      // 기존 이미지를 먼저 그리기
      drawImage(imageData);

      // 새로 계산된 스텝을 덮어쓰면서 그리기
      ctx.clearRect(0, 0, width, height); // 이전 프레임 지우기
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const pixelValue = step[y][x];
          ctx.fillStyle = `rgb(${pixelValue}, ${pixelValue}, ${pixelValue})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }

    let intervalId = setInterval(() => {
      if (currentStep < steps.length) {
        drawStep(steps[currentStep]);
        setCurrentStep(prevStep => prevStep + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 30); // 30ms 간격으로 다음 스텝 그리기
  }, [steps, currentStep, imageData]);

  // 이미지 그리기 함수
  function drawImage(data) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const height = data.length;
    const width = data[0].length;

    canvas.width = width;
    canvas.height = height;

    // 기존 이미지를 유지하며 그리기
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelValue = data[y][x];
        ctx.fillStyle = `rgb(${pixelValue}, ${pixelValue}, ${pixelValue})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  useEffect(() => {
    if (steps.length > 0) {
      visualizeConvolution();
    }
  }, [steps, visualizeConvolution]);

  return (
    <div>
      <h3>Grayscale Image CSV 업로드:</h3>
      <input type="file" id="upload" accept=".csv" onChange={handleFileUpload} />
      <br />
      <h3>3x3 커널 입력:</h3>
      <table>
        <tbody>
          {kernel.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((value, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="number"
                    value={value}
                    onChange={(event) => handleKernelChange(event, rowIndex, colIndex)}
                    style={{ width: '50px' }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={applyConvolution}>컨볼루션 적용</button>
      <h3>이미지:</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default HW2;

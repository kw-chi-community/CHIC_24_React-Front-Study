import React, { useState, useRef, useCallback, useEffect } from 'react';

function HW2() {
  const [imageData, setImageData] = useState([]);
  const [kernel, setKernel] = useState([
    [-1, 0, 1],
    [-1, 0, 1],
    [-1, 0, 1]
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);
  const canvasRef = useRef(null);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = function (e) {
        const csvData = e.target.result;
        const data = parseCsvToImageData(csvData);
        setImageData(data);
        drawImage(data);
      };
      reader.readAsText(file);
    } else {
      alert("유효한 CSV 파일을 업로드해 주세요.");
    }
  }

  function parseCsvToImageData(csvData) {
    const rows = csvData.trim().split("\n");
    return rows.map(row => row.split(",").map(Number));
  }

  function handleKernelChange(event) {
    const kernelString = event.target.value.trim();
    const kernelArray = kernelString
      .split("\n")
      .map(row => row.split(",").map(Number));

    if (kernelArray.length === 3 && kernelArray.every(row => row.length === 3)) {
      setKernel(kernelArray);
    } else {
      alert("커널은 반드시 3x3 형태여야 합니다.");
    }
  }

  function applyConvolution() {
    if (imageData.length === 0 || kernel.length === 0) {
      alert("이미지와 커널을 입력해 주세요.");
      return;
    }

    const resultSteps = performConvolution(imageData, kernel);
    setSteps(resultSteps);
    setCurrentStep(0);
  }

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

  const visualizeConvolution = useCallback(() => {
    if (steps.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const height = steps[0].length;
    const width = steps[0][0].length;
    canvas.width = width;
    canvas.height = height;

    function drawStep(step) {
      ctx.clearRect(0, 0, width, height);
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
    }, 100);
  }, [steps, currentStep]);

  function drawImage(data) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const height = data.length;
    const width = data[0].length;
    canvas.width = width;
    canvas.height = height;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const pixelValue = data[y][x];
        ctx.fillStyle = `rgb(${pixelValue}, ${pixelValue}, ${pixelValue})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  // Render the convolution visualization when steps or currentStep changes
  useEffect(() => {
    visualizeConvolution();
  }, [visualizeConvolution]);

  return (
    <div>
      <h3>Grayscale Image CSV 업로드:</h3>
      <input type="file" id="upload" accept=".csv" onChange={handleFileUpload} />
      <br />
      <h3>3x3 커널 입력 (콤마로 구분):</h3>
      <textarea
        id="kernel"
        rows="3"
        cols="20"
        value={
          `-1,0,1\n` +
          `-1,0,1\n` +
          `-1,0,1`
        }
        onChange={handleKernelChange}
      />
      <br />
      <button onClick={applyConvolution}>컨볼루션 적용</button>
      <h3>이미지:</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default HW2;

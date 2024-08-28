// src/components/ConvPage.js
import React, { useState, useRef } from 'react';

function ConvPage() {
    const [imageData, setImageData] = useState([]);
    const [kernel, setKernel] = useState('');
    const canvasRef = useRef(null);

    // Handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'text/csv') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const csvData = e.target.result;
                const parsedData = parseCsvToImageData(csvData);
                setImageData(parsedData);
                drawImage(canvasRef.current, parsedData);
            };
            reader.readAsText(file);
        } else {
            alert('Please upload a valid CSV file.');
        }
    };

    // Parse CSV data into image data
    const parseCsvToImageData = (csvData) => {
        const rows = csvData.trim().split('\n');
        return rows.map((row) => row.split(',').map(Number));
    };

    // Handle kernel input change
    const handleKernelChange = (e) => {
        setKernel(e.target.value);
    };

    // Apply convolution and animate the result
    const applyConvolution = () => {
        const kernelArray = parseKernel(kernel);
        if (kernelArray.length !== 3 || kernelArray.some(row => row.length !== 3)) {
            alert('Kernel must be 3x3.');
            return;
        }

        const result = applyConvolutionToImage(imageData, kernelArray);
        animateConvolution(result);
    };

    // Parse kernel from textarea input
    const parseKernel = (kernelStr) => {
        const rows = kernelStr.trim().split('\n');
        return rows.map((row) => row.split(',').map(Number));
    };

    // Perform convolution on the image data
    const applyConvolutionToImage = (imageData, kernel) => {
        const height = imageData.length;
        const width = imageData[0].length;
        const kernelSize = kernel.length;
        const pad = Math.floor(kernelSize / 2);
        const output = Array.from({ length: height }, () => Array(width).fill(0));

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                let sum = 0;
                for (let ky = 0; ky < kernelSize; ky++) {
                    for (let kx = 0; kx < kernelSize; kx++) {
                        const ny = y + ky - pad;
                        const nx = x + kx - pad;
                        if (ny >= 0 && ny < height && nx >= 0 && nx < width) {
                            sum += imageData[ny][nx] * kernel[ky][kx];
                        }
                    }
                }
                output[y][x] = Math.max(0, Math.min(255, sum));
            }
        }

        return output;
    };

    // Draw image data on the canvas
    const drawImage = (canvas, data) => {
        const ctx = canvas.getContext('2d');
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
    };

    // Animate convolution output
    const animateConvolution = (result) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const height = result.length;
        let frame = 0;

        // Clear canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Function to draw the current frame
        const drawFrame = () => {
            if (frame >= height) return;

            // Clear the previous frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the current frame
            drawImage(canvas, result.slice(0, frame + 1));

            // Move to the next frame
            frame++;

            // Schedule the next frame
            setTimeout(drawFrame, 5);
        };

        drawFrame();
    };

    return (
        <div>
            <h3>Upload Grayscale Image CSV:</h3>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            <br />
            <h3>Enter 3x3 Kernel (comma-separated):</h3>
            <textarea
                value={kernel}
                onChange={handleKernelChange}
                rows="3"
                cols="20"
            />
            <br />
            <button onClick={applyConvolution}>Apply Convolution</button>
            <h3>Image:</h3>
            <canvas ref={canvasRef} />
        </div>
    );
}

export default ConvPage;

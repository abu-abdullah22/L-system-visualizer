import React, { useEffect, useRef } from 'react';
import { generateLSystem, drawLSystem } from '../utils/lsystem';

export default function CanvasRenderer({ config }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    const lsystem = generateLSystem(config);
    drawLSystem(ctx, lsystem, config);
  }, [config]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'l-system.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center md:w-2/3 bg-white h-auto xl:h-screen py-10 md:py-0">
      <canvas ref={canvasRef} width={400} height={300} className="mb-2" />
      <button
        onClick={downloadImage}
        className="bg-blue-600 text-white px-4 py-2 m-2 rounded"
      >
        Download PNG
      </button>
    </div>
  );
}
import { useEffect, useRef } from 'react';
import { generateLSystem, drawLSystem } from '../utils/lsystem';

export default function CanvasRenderer({ config }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const lsystem = generateLSystem(config);
    drawLSystem(ctx, lsystem, config);
  }, [config]);

  return <canvas ref={canvasRef} width={800} height={600} className="bg-white" />;
}


import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CanvasRenderer from './components/CanvasRenderer';
import HelpPanel from './components/HelpPanel';

export default function App() {
  const [config, setConfig] = useState({
    axiom: 'F',
    rules: { 'F': 'F[+F]F[-F]F' },
    angle: 25,
    iterations: 4,
    lineLength: 5,
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar config={config} setConfig={setConfig} />
      <CanvasRenderer config={config} />
      <HelpPanel />
    </div>
  );
}
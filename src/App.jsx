import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import CanvasRenderer from './components/CanvasRenderer';
import HelpPanel from './components/HelpPanel';

const PRESETS = {
  Tree: {
    axiom: 'F',
    rules: { F: 'F[+F]F[-F]F' },
    angle: 25,
    iterations: 4,
    lineLength: 5,
  },
  'Koch Curve': {
    axiom: 'F',
    rules: { F: 'F+F−F−F+F' },
    angle: 90,
    iterations: 3,
    lineLength: 5,
  },
  'Sierpinski Triangle': {
    axiom: 'F-G-G',
    rules: { F: 'F-G+F+G-F', G: 'GG' },
    angle: 120,
    iterations: 4,
    lineLength: 5,
  },
};

export default function App() {
  const [config, setConfig] = useState(PRESETS.Tree);

  const handlePreset = (example) => setConfig(PRESETS[example]);
  const handleReset = () => setConfig(PRESETS.Tree);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar config={config} setConfig={setConfig} onPreset={handlePreset} onReset={handleReset} />
      <CanvasRenderer config={config} />
      <HelpPanel />
    </div>
  );
}
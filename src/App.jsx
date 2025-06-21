import { useState } from 'react';
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
  const [selectedExample, setSelectedExample] = useState('Tree');
  const [config, setConfig] = useState(PRESETS[selectedExample]);

  const handlePreset = (example) => {
    setSelectedExample(example);
    setConfig(PRESETS[example]);
  };

  const handleReset = () => {
    setConfig(PRESETS[selectedExample]);
  };

  return (
    <div className="flex flex-col md:flex-row  h-auto overflow-x-hidden">
      <Sidebar
        config={config}
        setConfig={setConfig}
        onPreset={handlePreset}
        onReset={handleReset}
        selectedExample={selectedExample} // 👈 Pass this
      />
      <CanvasRenderer config={config} />
      <HelpPanel />
    </div>
  );
}
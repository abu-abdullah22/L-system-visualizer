export default function Sidebar({ config, setConfig, onPreset, onReset }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 w-full md:w-1/3 bg-gray-100 dark:bg-gray-800 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">L-System Config</h2>

      <div className="mb-4">
        <label>Examples:</label>
        <select className="w-full p-2 border-2 rounded border-gray-500" onChange={(e) => onPreset(e.target.value)}>
          <option className='dark:text-black'>Tree</option>
          <option className='dark:text-black'>Koch Curve</option>
          <option className='dark:text-black'>Sierpinski Triangle</option>
        </select>
      </div>

      <label>Axiom</label>
      <input
        name="axiom"
        value={config.axiom}
        onChange={handleChange}
        className="w-full p-2 mb-2 border-2 rounded border-gray-500"
      />

      <label>Rule (F →)</label>
      <input
        name="rule"
        value={config.rules.F || ''}
        onChange={(e) => setConfig((prev) => ({
          ...prev,
          rules: { ...prev.rules, F: e.target.value },
        }))}
        className="w-full p-2 mb-2 border-2 rounded border-gray-500"
      />

      {config.rules.G !== undefined && (
        <>
          <label>Rule (G →)</label>
          <input
            name="ruleG"
            value={config.rules.G}
            onChange={(e) => setConfig((prev) => ({
              ...prev,
              rules: { ...prev.rules, G: e.target.value },
            }))}
            className="w-full p-2 mb-2 border-2 rounded border-gray-500"
          />
        </>
      )}

      <label>Angle</label>
      <input
        name="angle"
        type="range"
        min="0"
        max="180"
        value={config.angle}
        onChange={handleChange}
        className="w-full mb-2 border-2 rounded border-gray-500"
      />

      <label>Iterations</label>
      <input
        name="iterations"
        type="number"
        value={config.iterations}
        onChange={handleChange}
        className="w-full p-2 mb-2 border-2 rounded border-gray-500"
      />

      <label>Line Length</label>
      <input
        name="lineLength"
        type="number"
        value={config.lineLength}
        onChange={handleChange}
        className="w-full p-2 mb-4 border-2 rounded border-gray-500 "
      />

      <button onClick={onReset} className="w-full cursor-pointer bg-red-400 text-white p-2 rounded">
        Reset
      </button>
    </div>
  );
}
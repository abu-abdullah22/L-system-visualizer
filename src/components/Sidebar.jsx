export default function Sidebar({ config, setConfig }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-4 w-full md:w-1/3 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">L-System Config</h2>
      <label>Axiom</label>
      <input
        name="axiom"
        value={config.axiom}
        onChange={handleChange}
        className="w-full p-2 mb-2"
      />

      <label>Rule (F →)</label>
      <input
        name="rule"
        value={config.rules.F}
        onChange={(e) => setConfig((prev) => ({
          ...prev,
          rules: { F: e.target.value },
        }))}
        className="w-full p-2 mb-2"
      />

      <label>Angle</label>
      <input
        name="angle"
        type="range"
        min="0"
        max="90"
        value={config.angle}
        onChange={handleChange}
        className="w-full mb-2"
      />

      <label>Iterations</label>
      <input
        name="iterations"
        type="number"
        value={config.iterations}
        onChange={handleChange}
        className="w-full p-2 mb-2"
      />

      <label>Line Length</label>
      <input
        name="lineLength"
        type="number"
        value={config.lineLength}
        onChange={handleChange}
        className="w-full p-2"
      />
    </div>
  ) 
}
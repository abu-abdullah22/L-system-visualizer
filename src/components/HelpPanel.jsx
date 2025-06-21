const HelpPanel = () => {
  return (
    <div className="p-6 w-full md:w-1/3 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-md space-y-6">
      <h1 className="text-2xl font-bold border-b pb-2">Understanding L-Systems (Lindenmayer Systems)</h1>

      <section>
        <h2 className="text-xl font-semibold mb-1">🔍 What is an L-System?</h2>
        <p>
          An <strong>L-System</strong> or <strong>Lindenmayer System</strong> is a mathematical system used to describe the growth of plants, fractals, and recursive patterns. It’s a set of rules and symbols that are repeatedly applied to transform strings and create visual patterns over multiple iterations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">🧩 Components of an L-System</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Axiom (Start)</strong>: The initial string or symbol to begin with.</li>
          <li><strong>Rules</strong>: Replacement rules that define how each character in the string transforms.</li>
          <li><strong>Angle</strong>: The turning angle used during drawing (e.g., 25°, 60°, etc.).</li>
          <li><strong>Iterations</strong>: The number of times the rules are applied recursively.</li>
          <li><strong>Alphabet</strong>: Set of characters used (e.g., F, +, -, [, ]).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-1">🌱 Example</h2>
        <p className="mb-2"><strong>F → F+F−F−F+F</strong> is a classic rule used to generate the Koch snowflake.</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto">
          {`Axiom:     F
Rule:      F → F+F−F−F+F
Angle:     90°
Iterations: 3`}
        </pre>
      </section>


    </div>
  );
};

export default HelpPanel;

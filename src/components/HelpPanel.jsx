const HelpPanel = () => {
    return (
       <div className="p-4 hidden md:block w-1/3 bg-gray-50 dark:bg-gray-900 text-sm dark:text-white">
      <h3 className="font-semibold text-lg mb-2">What is an L-System?</h3>
      <p>
        An L-system or Lindenmayer system is a recursive system of rules and symbols used to model plant growth and fractals.
        Modify axiom, rules, angle, and iterations to explore.
      </p>
    </div>
    );
};

export default HelpPanel;
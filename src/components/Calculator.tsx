import { useState } from "react";

interface CalculatorProps {
  onSave: (numbers: string, result: number) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onSave }) => {
  const [numbers, setNumbers] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (operation: "sum" | "multiply") => {
    const nums = numbers
      .split(",")
      .map((num) => parseFloat(num.trim()))
      .filter((num) => !isNaN(num));

    if (nums.length === 0) return;

    let output: number;
    if (operation === "sum") {
      output = nums.reduce((acc, curr) => acc + curr, 0);
    } else {
      output = nums.reduce((acc, curr) => acc * curr, 1);
    }

    setResult(output);
  };

  return (
    <div className="p-5 bg-gray-800 text-white rounded-md">
      <h2 className="text-lg font-bold">Enter Numbers</h2>
      <input
        type="text"
        className="w-full p-2 my-2 rounded bg-gray-700 text-white"
        placeholder="e.g. 10, 20, 30"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={() => handleCalculate("sum")}
        >
          Sum
        </button>
        <button
          className="bg-green-500 px-4 py-2 rounded"
          onClick={() => handleCalculate("multiply")}
        >
          Multiply
        </button>
        {result !== null && (
          <button
            className="bg-yellow-500 px-4 py-2 rounded"
            onClick={() => onSave(numbers, result)}
          >
            Save
          </button>
        )}
      </div>
      {result !== null && <p className="mt-3 text-lg">Result: {result}</p>}
    </div>
  );
};

export default Calculator;

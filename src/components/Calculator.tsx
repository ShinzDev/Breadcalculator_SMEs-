// import { useState } from "react";

// interface CalculatorProps {
//   onSave: (numbers: string, result: number) => void;
// }

// const Calculator: React.FC<CalculatorProps> = ({ onSave }) => {
//   const [numbers, setNumbers] = useState<string>("");
//   const [result, setResult] = useState<number | null>(null);

//   const handleCalculate = (operation: "sum" | "multiply") => {
//     const nums = numbers
//       .split(",")
//       .map((num) => parseFloat(num.trim()))
//       .filter((num) => !isNaN(num));

//     if (nums.length === 0) return;

//     let output: number;
//     if (operation === "sum") {
//       output = nums.reduce((acc, curr) => acc + curr, 0);
//     } else {
//       output = nums.reduce((acc, curr) => acc * curr, 1);
//     }

//     setResult(output);
//   };

//   return (
//     <div className="p-5 bg-gray-800 text-white  w-full justify-center rounded-md">
//       <h2 className="text-lg font-bold">Enter Numbers</h2>
//       <input
//         type="text"
//         className="w-full p-2 my-2 rounded bg-gray-700 text-white"
//         placeholder="e.g. 10, 20, 30"
//         value={numbers}
//         onChange={(e) => setNumbers(e.target.value)}
//       />
//       <div className="flex gap-2">
//         <button
//           className="duration-300 bg-blue-500 hover:bg-sky-700 ease-in-out px-4 py-2 rounded-4xl"
//           onClick={() => handleCalculate("sum")}
//         >
//           Sum
//         </button>
//         <button
//           className="duration-300 bg-green-500 hover:bg-green-700  ease-in-out text-black px-4 py-2  rounded-4xl"
//           onClick={() => handleCalculate("multiply")}
//         >
//           Multiply
//         </button>
//         {result !== null && (
//           <button
//             className="duration-300 bg-yellow-500 hover:bg-yellow-700 ease-in-out px-4 py-2 rounded-4xl"
//             onClick={() => onSave(numbers, result)}
//           >
//             Save
//           </button>
//         )}
//       </div>
//       {result !== null && (
//         <p className="duration-300 ease-in-out mt-3 text-lg">
//           Result: {result}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Calculator;







import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const CalculatorWithNotes = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  // Fake example calculation function
  const calculate = () => {
    const sum = 62 + 74 + 58; // example numbers
    setResult(sum);
  };

  const handleExportPDF = async () => {
    if (!contentRef.current) return;

    const canvas = await html2canvas(contentRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save(`bread-calculation-${date || "report"}.pdf`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6" ref={contentRef}>
        {/* Calculator Section */}
        <div className="w-full md:w-2/3 bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-yellow-800">Calculator</h2>
          <button
            onClick={calculate}
            className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Run Calculation
          </button>
          {result !== null && (
            <p className="mt-4 text-lg font-bold text-amber-900">Result: {result}</p>
          )}
        </div>

        {/* Notes Section */}
        <div className="w-full md:w-1/3 bg-yellow-50 p-4 rounded-xl shadow-md">
          <label className="block mb-2 font-semibold text-yellow-900">Date</label>
          <input
            type="date"
            className="w-full mb-4 p-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block mb-2 font-semibold text-yellow-900">Notes</label>
          <textarea
            className="w-full h-40 p-2 border rounded-md"
            placeholder="Write notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      {/* Export Button */}
      <div className="mt-6">
        <button
          onClick={handleExportPDF}
          className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default CalculatorWithNotes;

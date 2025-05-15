import { useRef, useState } from "react";
import { evaluate } from "mathjs";
import jsPDF from "jspdf";

const CalculatorWithNotes = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);

  const handleCalculate = () => {
    try {
      const output = evaluate(expression);
      setResult(output);
      setError("");
    } catch (err) {
      setResult(null);
      setError("Invalid expression");
    }
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("🧮 Bread Calculator Summary", 10, 10);
    doc.text(`📅 Date: ${date || "N/A"}`, 10, 20);
    doc.text(`🔢 Expression: ${expression}`, 10, 30);
    doc.text(`✅ Result: ${result ?? "Not calculated"}`, 10, 40);
    doc.text("📝 Notes:", 10, 50);
    doc.text(note || "No notes entered.", 10, 60, { maxWidth: 190 });
    doc.save(`BreadCalc_${date || "session"}.pdf`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-xl text-gray-800">
      {/* Calculator Section */}
      <div className="w-full md:w-2/3 p-5 bg-white rounded-md shadow" ref={contentRef}>
        <h2 className="text-xl font-bold mb-2">Enter a Math Expression</h2>
        <input
          type="text"
          className="w-full p-2 mb-3 rounded bg-gray-200"
          placeholder="e.g. 62 + 74 + 58 or (100 * 2) - 50"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        {error && <p className="mt-2 text-red-600">{error}</p>}
        {result !== null && !error && (
          <p className="mt-3 text-lg font-semibold">Result: {result}</p>
        )}
      </div>

      {/* Notes Section */}
      <div className="w-full md:w-1/3 p-5 bg-yellow-50 rounded-md shadow">
        <h3 className="text-lg font-bold mb-2">Session Notes</h3>
        <label className="block mb-2 text-sm font-medium">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-white border"
        />

        <label className="block mb-2 text-sm font-medium">Notes:</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={6}
          className="w-full p-2 rounded bg-white border"
          placeholder="What was this calculation for?"
        />

        <button
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
          onClick={handleExportPDF}
          disabled={!result}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default CalculatorWithNotes;

import { useState } from "react";
import Calculator from "./components/Calculator";
import SavedCalculations from "./components/SavedCalculations";
import ExportToPDF from "./components/ExportToPDF";

interface Calculation {
  numbers: string;
  result: number;
}

function App() {
  const [calculations, setCalculations] = useState<Calculation[]>([]);

  const handleSave = (numbers: string, result: number) => {
    setCalculations((prev) => [...prev, { numbers, result }]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-2xl font-bold text-center mb-6">Calculation App</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <Calculator onSave={handleSave} />
        <SavedCalculations calculations={calculations} />
      </div>
      {calculations.length > 0 && <ExportToPDF calculations={calculations} />}
    </div>
  );
}

export default App;

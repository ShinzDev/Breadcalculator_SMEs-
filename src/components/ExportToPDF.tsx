import jsPDF from "jspdf";

interface Calculation {
  numbers: string;
  result: number;
}

interface ExportToPDFProps {
  calculations: Calculation[];
}

const ExportToPDF: React.FC<ExportToPDFProps> = ({ calculations }) => {
  const handleExport = () => {
    const doc = new jsPDF();
    doc.text("Saved Calculations", 10, 10);

    calculations.forEach((calc, index) => {
      doc.text(`${calc.numbers} = ${calc.result}`, 10, 20 + index * 10);
    });

    doc.save("calculations.pdf");
  };

  return (
    <button
      className="bg-red-500 px-4 py-2 rounded text-white mt-4"
      onClick={handleExport}
    >
      Export to PDF
    </button>
  );
};

export default ExportToPDF;

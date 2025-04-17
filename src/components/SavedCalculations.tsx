interface Calculation {
    numbers: string;
    result: number;
  }
  
  interface SavedCalculationsProps {
    calculations: Calculation[];
  }
  
  const SavedCalculations: React.FC<SavedCalculationsProps> = ({ calculations }) => {
    return (
      <div className="p-5 bg-gray-700 text-white rounded-md">
        <h2 className="text-lg font-bold">Saved Calculations</h2>
        {calculations.length === 0 ? (
          <p>No calculations saved yet.</p>
        ) : (
          <ul className="mt-2">
            {calculations.map((calc, index) => (
              <li key={index} className="border-b py-1">
                {calc.numbers} = {calc.result}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default SavedCalculations;
  
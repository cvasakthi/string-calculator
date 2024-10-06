import { useState } from "react";

export interface IStringCalculatorProps {}

export function StringCalculator(props: IStringCalculatorProps) {
  const [enteredString, setEnteredString] = useState<string>("");
  const handleCalculate = () => {
    alert("handle calculate");
  };
  const handleReset = () => {
    setEnteredString("");
  };
  return (
    <div className="min-h-96 w-full flex flex-col max-w-md bg-white rounded shadow-lg p-5 space-y-3">
      <input
        type="text"
        className="w-full h-10 rounded border"
        value={enteredString}
        onChange={(e) => {
          setEnteredString(e.target.value);
        }}
      />
      <div className="flex w-full justify-end gap-3">
        <button
          className="h-9 w-fit bg-blue-700 rounded text-sm text-white px-1 "
          onClick={() => {
            handleCalculate();
          }}
        >
          Calculate
        </button>
        <button
          className="h-9 w-fit bg-red-700 rounded text-sm text-white px-1 "
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
      </div>
      <div className="min-h-full flex-1 bg-gray-100 rounded">
    
      </div>
    </div>
  );
}

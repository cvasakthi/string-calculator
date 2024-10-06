import { useState } from "react";
import { stringCalculator } from "../stringCalculate";

export interface IStringCalculatorProps {}

export function StringCalculator(props: IStringCalculatorProps) {
  const [enteredString, setEnteredString] = useState<string>("");
  const [result, setResult] = useState<number | null>();
  const [err, setErr] = useState<string>("");
  const handleCalculate = () => {
    try {
      const result = stringCalculator(enteredString);
      setResult(result);
    } catch (error) {
      console.log(error);
      alert(error);
      setErr(error as string);
    }
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
        {result && !err && <p>{result}</p>}
        {err && <p>{err}</p>}
      </div>
    </div>
  );
}

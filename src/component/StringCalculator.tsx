import { useState } from "react";
import { stringCalculator } from "../stringCalculator";

export interface IStringCalculatorProps {}

export function StringCalculator(props: IStringCalculatorProps) {
  const [enteredString, setEnteredString] = useState<string>("");
  const [result, setResult] = useState<number | undefined>();
  const [err, setErr] = useState<string>("");
  const handleCalculate = () => {
    setErr("");
    try {
      const result = stringCalculator(enteredString);
      setResult(result);
    } catch (error) {
      if (error instanceof Error) {
        // console.log(error.message);
        setErr(error.message);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };
  const handleReset = () => {
    setEnteredString("");
    setErr("");
    setResult(undefined);
  };
  return (
    <>
      {err && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
            <h2 className="text-red-500 text-lg font-semibold mb-2">Error</h2>
            <p className="text-red-600">{err}</p>
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                onClick={() => setErr("")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-96 w-full flex flex-col max-w-md bg-white rounded shadow-lg p-5 space-y-3">
        <input
          type="text"
          className="w-full h-10 rounded border px-2"
          value={enteredString}
          placeholder="Enter a string"
          onChange={(e) => {
            setEnteredString(e.target.value);
            setErr("");
            setResult(undefined);
          }}
        />
        <div className="flex w-full justify-end gap-3">
          <button
            className="h-9 w-fit bg-blue-700 disabled:opacity-50 rounded text-sm text-white px-4 py-2 "
            onClick={() => {
              handleCalculate();
            }}
            disabled={!enteredString}
          >
            Calculate
          </button>

          <button
            className="h-9 w-fit bg-red-700 rounded disabled:opacity-50 text-sm text-white px-4 py-2 "
            onClick={() => {
              handleReset();
            }}
          >
            Reset
          </button>
        </div>
        <div className="min-h-full flex-1 bg-gray-100 rounded p-5">
          {result && !err && <p>{result}</p>}
        </div>
      </div>
    </>
  );
}

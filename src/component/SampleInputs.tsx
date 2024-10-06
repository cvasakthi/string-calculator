import React from "react";

const sampleInputs: string[] = [
  "1,2,3",
  "4\n5\n6",
  "7,8\n9,10",
  "1,-2,3,-4",
  "a,1,2,b",
  "5",
  "",
];

export const SampleInputs: React.FC = () => {
  const handleCopy = (input: string) => {
    navigator.clipboard.writeText(input).then(() => {
      alert(`Copied to clipboard: ${input}`);
    });
  };
  return (
    <div className="max-h-96 w-full flex relative flex-col max-w-md bg-white rounded shadow-lg space-y-3 overflow-y-scroll">
      <h2 className="text-lg font-semibold sticky top-0 bg-white p-5">
        Sample Inputs
      </h2>
      <ul className="space-y-2  p-5">
        {sampleInputs.map((input, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{input}</span>
            <span
              onClick={() => handleCopy(input)}
              className="border border-gray-200 hover:bg-gray-100 cursor-pointer px-2 py-1 rounded text-sm"
            >
              <svg id="Copy_24" width="24" height="24" viewBox="0 0 24 24">
                <rect
                  width="24"
                  height="24"
                  stroke="none"
                  fill="#334155"
                  opacity="0"
                />

                <g transform="matrix(1 0 0 1 12 12)">
                  <path
                    transform=" translate(-12, -12)"
                    d="M 4 2 C 2.895 2 2 2.895 2 4 L 2 17 C 2 17.552 2.448 18 3 18 C 3.552 18 4 17.552 4 17 L 4 4 L 17 4 C 17.552 4 18 3.552 18 3 C 18 2.448 17.552 2 17 2 L 4 2 z M 8 6 C 6.895 6 6 6.895 6 8 L 6 20 C 6 21.105 6.895 22 8 22 L 20 22 C 21.105 22 22 21.105 22 20 L 22 8 C 22 6.895 21.105 6 20 6 L 8 6 z M 8 8 L 20 8 L 20 20 L 8 20 L 8 8 z"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// stringCalculator.test.js

import { stringCalculator } from "./stringCalculator";

describe("stringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the sum of comma-separated numbers", () => {
    expect(stringCalculator("1,2,3")).toBe(6);
  });

  it("should return the sum of newline-separated numbers", () => {
    expect(stringCalculator("1\n2\n3")).toBe(6);
  });

  it("should handle a mix of commas and newlines as separators", () => {
    expect(stringCalculator("1,2\n3")).toBe(6);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => stringCalculator("1,-2,3")).toThrow("No Negative");
  });

  it("should ignore non-numeric values and still return the sum", () => {
    expect(stringCalculator("1,a,2")).toBe(3);
  });

  it("should return the number itself when input contains a single valid number", () => {
    expect(stringCalculator("5")).toBe(5);
  });
});

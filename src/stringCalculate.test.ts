// stringCalculator.test.js

import { stringCalculator } from "./stringCalculate";
describe("stringCalculator", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalculator("")).toBe(0);
  });
});

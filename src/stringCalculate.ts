export function stringCalculator(numbers: string): number {
  if (numbers === "") return 0;

  const numArray = [...numbers];

  return numArray.reduce((acc: number, item: string) => {
    const num = Number(item);
    if (isNaN(num)) return acc;
    if (num < 0) {
      throw new Error("No Negative Numbers Allowed");
    }
    return acc + num;
  }, 0);
}

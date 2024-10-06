export function stringCalculator(numbers: string): number {
  // Return 0 for an empty string.
  if (!numbers) return 0;

  // Default delimiters are commas and newlines.
  let delimiter = /,|\n/;
  
  // Check if there is a custom delimiter.
  if (numbers.startsWith("//")) {
    // Find the end of the custom delimiter definition.
    const delimiterEnd = numbers.indexOf("\n");

    // Get the custom delimiter.
    const customDelimiter = numbers.slice(2, delimiterEnd);

    // If there are multiple delimiters (like //[*][%]\n), create a regex.
    const multiDelimiterPattern = /\[(.*?)\]/g;
    const matches = customDelimiter.match(multiDelimiterPattern);

    if (matches) {
      // Create a regex that matches any custom delimiter.
      delimiter = new RegExp(matches.map((d) => d.slice(1, -1)).join("|"), "g");
    } else {
      // Use the custom delimiter directly.
      delimiter = new RegExp(customDelimiter);
    }

    // Remove the custom delimiter part from the input string.
    numbers = numbers.slice(delimiterEnd + 1);
  }

  // Split the string into an array of numbers.
  const numArray = numbers.split(delimiter);
  let negatives: number[] = [];

  // Calculate the sum of the numbers.
  const sum = numArray.reduce((acc, item) => {
    const num = Number(item.trim());
    if (isNaN(num)) return acc;
    if (num < 0) {
      negatives.push(num);
    }
    return acc + num;
  }, 0);

  // Throw an error if there are negative numbers.
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }
  // Return the total sum.
  return sum;
}

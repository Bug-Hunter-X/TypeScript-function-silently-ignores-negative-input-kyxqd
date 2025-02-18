function printNumbers(n: number): void {
  if (n < 1) {
    throw new Error("Input must be a positive integer.");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Example usage

try {
  printNumbers(5);
  printNumbers(-5);
} catch (error) {
  console.error(error.message);
}
//This will print numbers from 1 to 5 and then throw an error for -5 input.
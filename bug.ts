function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will print numbers from 1 to 5
printNumbers(-5); //This will print nothing.  It should throw an error or handle negative input.
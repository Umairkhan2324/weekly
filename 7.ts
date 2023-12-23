function calculateSum(numbers: number[]): number {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum;
  }
  
  // Example usage:
  const numbersArray: number[] = [1, 2, 3, 4, 5];
  const result: number = calculateSum(numbersArray);
  
  console.log(`Sum of the numbers: ${result}`);
  
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  // Get user input for temperature in Fahrenheit
  const userInput: string | null = prompt("Enter temperature in Fahrenheit:");
  
  // Check if the input is not null and is a valid number
  if (userInput !== null) {
    const fahrenheitInput: number = parseFloat(userInput);
  
    if (!isNaN(fahrenheitInput)) {
      // Convert Fahrenheit to Celsius
      const celsiusResult: number = fahrenheitToCelsius(fahrenheitInput);
  
      // Display the result
      console.log(`${fahrenheitInput} Fahrenheit is ${celsiusResult.toFixed(2)} Celsius.`);
    } else {
      console.error("Invalid input. Please enter a valid number for temperature.");
    }
  } else {
    console.error("User canceled the input.")
  }
  
  
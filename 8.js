// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
// Get user input for temperature in Fahrenheit
var userInput = prompt("Enter temperature in Fahrenheit:");
// Check if the input is not null and is a valid number
if (userInput !== null) {
    var fahrenheitInput = parseFloat(userInput);
    if (!isNaN(fahrenheitInput)) {
        // Convert Fahrenheit to Celsius
        var celsiusResult = fahrenheitToCelsius(fahrenheitInput);
        // Display the result
        console.log("".concat(fahrenheitInput, " Fahrenheit is ").concat(celsiusResult.toFixed(2), " Celsius."));
    }
    else {
        console.error("Invalid input. Please enter a valid number for temperature.");
    }
}
else {
    console.error("User canceled the input.");
}

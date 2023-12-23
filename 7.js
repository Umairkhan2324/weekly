function calculateSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Example usage:
var numbersArray = [1, 2, 3, 4, 5];
var result = calculateSum(numbersArray);
console.log("Sum of the numbers: ".concat(result));

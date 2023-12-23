function removeNegativeNumbers(numbers) {
    var nonNegativeNumbers = numbers.filter(function (num) { return num >= 0; });
    return nonNegativeNumbers;
}
var numbersArray = [1, -2, 3, -4, 5, -6];
var resultArray = removeNegativeNumbers(numbersArray);
console.log("Original array:", numbersArray);
console.log("Array after removing negative numbers:", resultArray);

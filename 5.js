function calculateFactorial(n) {
    if (n < 0) {
        console.log("Input must be a positive integer.");
    }
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
        console.log(i);
    }
    return factorial;
}
var result = calculateFactorial(0);
console.log("Factorial: ".concat(result));

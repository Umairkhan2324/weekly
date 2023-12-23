function insertValueAtIndex(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
// Example usage:
var originalArray = [1, 2, 3, 4, 5];
var modifiedArray = insertValueAtIndex(originalArray, 2, 78);
console.log('Original Array:', originalArray);
console.log('Modified Array:', modifiedArray);

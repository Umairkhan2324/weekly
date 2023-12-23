

function insertValueAtIndex<T>(array: T[], index: number, value: T):T[]{
    array.splice(index, 0, value);
    return array;
}

// Example usage:
const originalArray: number[] = [1, 2, 3, 4, 5];
const modifiedArray=insertValueAtIndex(originalArray, 2 , 78)

console.log('Modified Array:', modifiedArray);

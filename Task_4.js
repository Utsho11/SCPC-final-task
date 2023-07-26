// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumbersWithSum = (inputArray, target) => {
    let left = 0;
    let right = inputArray.length - 1;

    while (left < right) {
        const sum = inputArray[left] + inputArray[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

const Array = [1, 3, 6, 8, 11, 15];
const target = 9;
const indices = findTwoNumbersWithSum(Array, target);
console.log(indices);
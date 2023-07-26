// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfTheArray = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i ++){
        if(arr[i]>0){
            sum = sum + arr[i];
        }
    }
    return sum;
}

let inputArray = [2, -5, 10, -3, 7];
const sum = sumOfTheArray(inputArray);
console.log(sum);
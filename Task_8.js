// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const findSecondSmallest = (arr) => {
    if (arr.length < 2) {
      return "The array must contain at least two elements.";
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
      } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
      }
    }
  
    if (secondSmallest === Infinity) {
      return "There is no second smallest element in the array.";
    }
  
    return secondSmallest;
  }
  
  const numbers = [10, 5, 3, 8, 2, 7];
  console.log("Second Smallest:", findSecondSmallest(numbers));
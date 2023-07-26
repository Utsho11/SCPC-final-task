// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const MostFrequentElement = (arr) => {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;


    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
  }

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = MostFrequentElement(array);
console.log(mostFrequent);
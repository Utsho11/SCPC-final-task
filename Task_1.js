// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseStr = (str) =>{
    let reverseString = ''
    for(let i = str.length - 1; i>=0 ; i--){
        reverseString = reverseString + str[i];        
    }
    return reverseString;
}

let input = "Hello World!"
console.log(reverseStr(input));
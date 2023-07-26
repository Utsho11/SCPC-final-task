// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (num1, operator, num2) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return('Invalid operator. Please use one of +, -, *, /');
    }
}

console.log(calculator(5, '+', 3)); 
console.log(calculator(10, '-', 4));
console.log(calculator(3, '*', 7)); 
console.log(calculator(10, '/', 2));
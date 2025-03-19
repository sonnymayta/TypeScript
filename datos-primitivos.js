"use strict";
let isWorking = false;
if (isWorking) {
    console.log("Yes, it is working.");
}
else {
    console.log("No, it isn't working.");
}
let firstNumber = 11;
let secondNumber = 5;
compareNumbers(firstNumber, secondNumber);
function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber)
        console.log("The first number is greater.");
    if (firstNumber < secondNumber)
        console.log("The second number is greater.");
    if (firstNumber == secondNumber)
        console.log("Both are the same.");
}

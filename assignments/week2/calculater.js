let arguments=process.argv;



let number1 = arguments[2];
let mathOperator = arguments[3];
let number2 = arguments[4];
//console.log(arguments);

let num1Converted=parseInt(number1);
let num2Converted=parseInt(number2);

if(isNaN(num1Converted)|| isNaN(num2Converted)){
    console.log("Error 349923: number is not actual number! Try now");
 
} else {
    if (mathOperator==="+") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Coverted+num2Converted}.`);
    } else if(mathOperator==="-"){
        console.log(`The difference of ${num1Converted} and ${num2Converted} is ${num1Coverted-num2Converted}.`);
    }else if (mathOperator==="x"|| mathOperator==="times") {
        console.log(`The product of ${num1Converted} and ${num2Converted} is ${num1Coverted*num2Converted}.`);
    }else if (mathOperator==="/"){
        console.log(`The quotient of ${num1Converted} and ${num2Converted} is ${num1Coverted*num2Converted}.`);

    }
    }



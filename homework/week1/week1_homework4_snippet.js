// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // let allows us to declare the product and  multification of option and option2
    let product = option * option2;

    //after show us product result of variable
    console.log(product);

    //show us the string of option parameter, the value of the option entered in also returning the value
    console.log("The value of the option parameter is " + option);

    //Using if statement if option equal to 0  if statement is true return the result
    if (option === 0) {
        
        // after check if statement is true return result is "Everything is good!"
        return "Everything is good!";
    //if statement is false ,javascript will continue to evalute the next step using else if statement to check and if option is not equal to 1, after if it's true return the "An error happened!"; 
    } else if (option === 1) {

      // if statement is true it will be return the "An error happened!" result.
        return "An error happened!";
    //if pervius statement was false we have to using another if statement using  parameter of option is equal to -1 if it's true it will be return "Everything is bad!"
    } else if (option === -1) {
        
        //if statement is true it myFunction will be finished and return the "Everything is bad!"
        return "Everything is bad!";
    }

}

//Declare the result which is put some number of values in our parameters
let result = myFunction(1, 11);
//Declare the result2 which is put some number of values in our parameters
let result2 = myFunction(2, 200);

// Using if statement to check result and if result is equal to "An error happened" and operator using result 2 equal to "An error happened" because if we use and operator means our one of result have to have true if it's true to check 
if ( result === "An error happened" && result2 === "An error happened") {

    //After and operator it will be show us to result of values.
    console.log("Catastrophic failure.");

}
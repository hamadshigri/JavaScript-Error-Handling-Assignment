// MAke a function for the following formula. Use error handling also.
// x^2 + 5y
// see the example for reference.
    // x^2 + 5y
    // myCalc(x,y)
    // myCalc(2,4) ---> 19
    // with Error Handling
    

function myCalc(x,y){
    try {
        console.log(x^2+5*y);
    }
    catch(err){
        console.log("Error: "+err);
    }
}

myCalc(2,3);
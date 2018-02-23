setTimeout(function(){
    console.log("This function runs in approx 2000 ms");
}, 2000);

var timerId = setTimeout(function(){
    console.log("This won't run");
}, 30000); //30 secs

setTimeout(function(){
    console.log("Canceled first setTimeout at", timerId);
    clearTimeout(timerId);
}, 2000);

//everytime you invoke setTimeout, you get an ID for that timeout

//Calling setTimeout with 0 as second argument will call the function after there is nothing
//left in the stack.
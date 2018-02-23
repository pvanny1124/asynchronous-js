//Same as setTimeout, except the code will run every x ms that you specify.
/*var num = 0;
var intervalId = setInterval(function(){
    num++;
    console.log("num: ", num);
    if(num === 5){
        clearInterval(intervalId);
    }
}, 1000);
*/
/* Your goal is to implement a function called countDown.  
The function will accept 1 parameter which is a time in seconds for the count down.  
The function should console.log the time remaining every second.  
Once the timer gets to 0, the timer should be stopped and you should console.log "Ring Ring Ring!!!".

HINT: You will need to use setInterval() to count down and clearInterval to stop the timer.

Example:

countDown(3) 

Console output

Timer: 2
Timer: 1
Ring Ring Ring!!! */

function countDown(seconds) {
    var intervalId = setInterval(function(){
        if(seconds > 0){
            console.log("Timer: ", num);
            seconds--;
         } else {
            console.log("Ring Ring Ring!!!");
            clearInterval(intervalId);
        }
    }, 1000);
}

countDown(3);
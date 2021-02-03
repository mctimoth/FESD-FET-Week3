//index.js for FESD Javascript Week4

//1.  Use template literals to combine variables
function returnFullName(firstName, lastName){
    console.log(`1.  ${firstName} ${lastName}`);
}

returnFullName("Tim","Gibney");

//2.  Now make 1. above into an "arrow function"

const theFullNameIs = (firstName,lastName) => console.log(`2.  ${firstName} ${lastName}`);

theFullNameIs("Tim","Gibney");

//3a.  An anonymous function using the setTimeout function and alert function.
// The function waits for allotted number of milliseconds (1000 millisconds = 1 second)
// then alerts the window.  Two options follow:  An immediately invoked function execution
// and a command invoked anonymous arrow function.

(function() {setTimeout(function() {alert("IIFE Time is up!")},2000)})();

const alertUser = duration => setTimeout(function(/*duration*/) {alert("3a.  Time is up!")},duration);
    
alertUser(5000);

theFullNameIs("John","Gibney");//Having this function here displays that the above setTimeout functions
                                // do indeed not pause processing.  But so will the other upcoming
                                // assignment answers.

//3b.  Write an arrow function that uses the alert functions to display an alert.

const askAreWeThereYet = () => {alert("3b.  Are we there yet?")};

//Then invoke askAreWeTherYet using setInterval to repeatedly display the alert.
//Trouble is, this IIFE will run incessantly without invoking clearInterval().

(function() {setInterval(askAreWeThereYet,2000)})();



//4.
function processSplicedValue([],anIndex,splicer){

}

let arrSpliced = [];


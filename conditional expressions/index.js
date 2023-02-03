//Conditional Statements in JavaScript

let a = prompt("What is your age?");
console.log(typeof a);

a = Number.parseInt(a); //converting the string to a number
console.log(typeof a);


//if statement

if (a>0){
    alert("This is a valid age");
}
// if else statement

if (a>0){
    alert("This is a valid age");
}
else{
    alert("This is an invalid age");
}

// if else if statement

if (a < 0) {
    alert("This is an invalid age");
}
else if (a < 9) {
    alert("Sorry u can't drive");
}
else if (a < 18 && a >= 9) {
    alert("You can drive after 18");
}
else {
    alert("You can drive as you are above 18");
}

//Switch Statement
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

//ternary operator

let age = prompt("your age?");
console.log("You can", (age<18? "not drive":"drive"));

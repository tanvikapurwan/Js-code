//Problem 1
let age1 = prompt("What is your age?");
if(age1>10 & age1<20){
    console.log("Your age lies between 10 and 20")
}
else{
    console.log("Your age doesn't lies between 10 and 20")
}


//Problem no.2
let age2 = prompt("What is your age?");
age2 = Number.parseInt(age);
switch(age2){
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
        break;
    case 16:
        console.log("Your age is 16");
        break;
    default: 
        console.log("Your age is not special");
        break;
}

//Problem 3

// let num = prompt("What is your age?");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your number is divisible by 2 and 3");
} 
else{
    console.log("Your number is not divisible by 2 and 3")
}

//Problem 4
let num = prompt("What is your age?");
num = Number.parseInt(num);
if (num % 2 == 0 || num % 3 == 0) {
    console.log("Your number is divisible by 2 or 3");
}
else {
    console.log("Your number is not divisible by 2 or 3")
}

//Probelm No 5
let age = 19;
let a = age > 18 ? "You can drive" : "You cannot drive";
console.log(a);

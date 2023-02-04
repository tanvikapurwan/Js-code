//Loops
for(let i=0; i<34; i++){
    console.log(i);
}
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
    sum += (i + 1);
    console.log((i + 1), "+");
}
console.log("sum of first " + n + " natural numbers is " + sum);
console.log(i);


// for loop using objects
let obj = {
    Tanvi: 90,
    riya: 45,
    shivika: 57,
    ritika: 89,
    shiv: 23
}

//for in loop
for(let a in obj){
    console.log("Marks of "+ a + " are "+ obj[a]);
}

// for of loop
for(let b of "Tanvi"){
    console.log(b);
}

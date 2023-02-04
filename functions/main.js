// allow function hello
const hello = () => {
    console.log("Hi how are u")
}

// function one Plus Average
function onePlusAvg(x, y){
    return Math.round(1+(x+y)/2);
}


// function sum
const sum = (p, q) =>{
    return p + q;
}

let a = 1;
let b = 2;
let c = 3;
let v = hello();

console.log(v);
hello();
console.log("Average of a and b is",onePlusAvg(a, b));
console.log("Average of b and c is",onePlusAvg(b, c));
console.log("Average of c and a is",onePlusAvg(c, a));
console.log("sum = ",sum(9, 7));

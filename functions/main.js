function onePlusAverage(x, y){         // normal function 
    return 1+(x+y)/2
}

const sum = (p, q) =>{                 //arrow function
    return p+q
}

const hello = () => {                  // no return function
    console.log("Hey how are you?")
}


const hi = () => {                      // return function
    return "hi"
}

let a = 1;
let b = 2;
let c = 3;

console.log(onePlusAverage(a, b));
console.log(onePlusAverage(b, c));
console.log(onePlusAverage(c, a));
console.log(sum(9, 7));
console.log(sum(10, 3));
hello();
const v = hi();
console.log(v);

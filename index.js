// 7 Primitive types
// NN BB SS U
// null
// Number
// Boolean
// BigInt
// Symbol
// String
// undefined

let a = null;
let b = 123;
let c = true;
let d = BigInt("456") + BigInt("3");
let e = "Tanvi";
let f = Symbol("I am a nice symbol");
let g = undefined;
let h;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);
console.log(typeof h);


// Non Primitive Data Type - Objects in JS

const item = {
    "Tanvi": true,
    "coffee": false,
    "age": 23,
    "state": undefined
}
console.log(item["Tanvi"]);



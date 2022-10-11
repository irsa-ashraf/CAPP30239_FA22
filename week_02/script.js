let num = 100; // integer 
let num1 = 200;

//integer 

/* 
this is a 
block comment 
*/ 


// function foo() {
//     console.log(num);
//     let num1 = 200;
// };

// foo();

// scoping 

console.log(num1)

let anonFun = function() {
    console.log("hello");
};


(function() {
    console.log("Hello");
})();

(() => console.log(100))();

// function foo() {
//     console.log(num);
// };

let foo = () => console.log(num);

// the three lines above and the one line after it are doing the same thing 
// the latter is just a short form of the former 

foo = () => console.log(num1);
foo();

let bar = 100;
bar = 200;


// Arrays 

let arr = ["foo", 123, ["zar", "car"]];


// set an item in an array 
arr[1] = "barbar";

// Add item to the end of an array 
arr.push("par")

// Removing an item from the arrray (index, delete)
arr.splice(1, 2); 


// console.log(arr[1]);
console.log(arr);

let newArr = ["cow", "turtle", "goat"]

// Of 
for (let item of newArr) {
    console.log(item);
}

// In: gives us back the number/iterator 
for (let i in newArr) {
    console.log(i + " " + newArr[i]);
}


newArr.forEach((item, i) => console.log(i + " " + item));


// Objects 

let obj1 = {
    name: "Jill",
    age: 85,
    job: "Cactus Hunter",
};

// To access a property

console.log(obj1.name);

// Or using bracket notation 
console.log(obj1["name"]);


obj1.job = "Barista"

// Loop through all properties 
for (let key in obj1) {
    let value = obj1[key];
    console.log(`This pair is ${key}: ${value}`);
}

// Regular for loop 

// for (let i = 0; i 
    
let val = 80;

if (val > 80 ){
    console.log("good")
}else if (val > 50) {
    console.log("okay")
}else {
    console.log("terrible")
}


let y = (val >= 80) ? console.log("good") : console.log("not good");


// Traversing the DOM  
// - walking the DOM looking for a specific id 
// - when we want to dynamically add a 

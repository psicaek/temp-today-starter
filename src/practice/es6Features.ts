// es6Features.ts

import { green } from "react-native-reanimated/lib/typescript/Colors";

// ========================================
// Part 1: Let vs. Const
// ========================================

console.log("=== Part 1: Let vs. Const ===");

// Using let
let mutableNumber = 5;
// 🚀 **To Do**: Reassign 'mutableNumber' to a new value
// Example: mutableNumber = 10;
mutableNumber = 20;
console.log(mutableNumber);

// Using const
const immutableNumber = 15;
// 🚀 **To Do**: Try reassigning 'immutableNumber' and observe what happens
// Example: immutableNumber = 20;
//immutableNumber =20;


console.log(`mutableNumber: ${mutableNumber}`); // Expected: Updated value
console.log(`immutableNumber: ${immutableNumber}`); // Expected: Original value

// ========================================
// Part 2: Arrow Functions
// ========================================

console.log("\n=== Part 2: Arrow Functions ===");

// Traditional function
function multiply(a: number, b: number): number {
  return a * b;
}
// 🚀 **To Do**: Convert the above function to an arrow function named 'multiplyArrow'
const multiplyArrow = multiply(2,6) 


console.log(`multiply(2, 3): ${multiply(2, 3)}`); // Expected: 6
// 🚀 **To Do**: Test 'multiplyArrow' here
console.log(`multiplyArrow: ${multiplyArrow}`)

// ========================================
// Part 3: Template Literals
// ========================================

console.log("\n=== Part 3: Template Literals ===");

const firstName = "Jane";
const lastName = "Doe";
// 🚀 **To Do**: Use a template literal to combine 'firstName' and 'lastName' into 'fullName'
const fullName = `${firstName} ${lastName}!`;

console.log(`Full Name: ${fullName} `); // Expected: Full name displayed here
// ========================================
// Part 4: Destructuring and Spread/Rest Operators
// ========================================

console.log("\n=== Part 4: Destructuring and Spread/Rest Operators ===");

// Object destructuring
const user = { username: "jdoe", email: "jdoe@example.com", age: 28 };
// 🚀 **To Do**: Extract 'username' and 'email' from 'user' using destructuring
const {username} = user;
const {email} = user;

console.log(`Username:${username} `); // Expected: Username value
console.log(`Email: ${email} `); // Expected: Email value

// Array destructuring
const colors = ["red", "green", "blue"];
// 🚀 **To Do**: Extract the first two colors
// Example: const [primaryColor, secondaryColor] = colors;
const [primaryColor, secondaryColor] = colors;

console.log(`Primary Color:${primaryColor}`); // Expected: First color
console.log(`Secondary Color:${secondaryColor}`); // Expected: Second color

// Spread operator to merge arrays
const moreColors = ["yellow", "purple"];
// 🚀 **To Do**: Merge 'colors' and 'moreColors' into 'allColors' using the spread operator
const allCollors =[colors ,moreColors];
console.log(`All Colors: ${allCollors}`); // Expected: Merged array of colors


//Question1: i didnt put the spread operator and if i put it it gives the same result
//Question2 : whats with the question semicolon do we need it or not because both ways i get a result

// ========================================
// Part 5: Primitives vs. Reference Types
// ========================================

console.log("\n=== Part 5: Primitives vs. Reference Types ===");

// Primitives
let string1 = "Hello";
// 🚀 **To Do**: Assign 'string1' to a new variable and change the value of the new variable
let string2 = string1;
string1 = "GoodBye"
console.log(`string1:${string1} `); // Expected: Original value
console.log(`string2:${string2} `); // Expected: Updated value

// Reference types
let array1 = [1, 2, 3];
// 🚀 **To Do**: Assign 'array1' to a new variable and modify the new variable
let array2 = array1;
array1 = [3,4,5]
console.log(`array1:${array1} `); // Expected: Updated array
console.log(`array2:${array2} `); // Expected: Same as array1

// ========================================
// Part 6: Understanding null, undefined, and NaN
// ========================================

console.log("\n=== Part 6: Understanding null, undefined, and NaN ===");

let uninitializedVariable;
// 🚀 **To Do**: Declare a variable and assign 'null' to it
// Example: let emptyVariable = null;
let emptyVariable = null;

console.log(`uninitializedVariable: ${uninitializedVariable} `); // Expected: undefined
console.log(`emptyVariable:${emptyVariable} `); // Expected: null

const result = parseFloat("abc");
console.log(`result:${result} `); // Expected: NaN
console.log(`isNaN(result):${isNaN(result)} `); // Expected: true
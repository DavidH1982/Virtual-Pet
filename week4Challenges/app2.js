//Higher Order Functions

// let whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`)
// }

// let greet = (time, fn) => {
//     if(time < 12){
//         fn("Morning")
//     } else if(time>12 && time<16){
//         fn("Afternoon")
//     } else {
//         fn("Evening")
//     }
// }

// greet(19, whichGreeting)

// let myFunction = () => {
//     return () => {
//         console.log("Hello")
//     }
// }

// console.log(myFunction())

// let multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };
// let myReturnedFunction = multiply(2);

// console.log(myReturnedFunction(4));

// // Challenge 1

// let hello = () => {
//   console.log("Hello Code Nation");
// };

// let loop = () => {
//   for (let i = 0; i < 5; i++) {
//     hello();
//   }
// };

// loop();
// // Hello Code Nation * 5

// Challenge 2

// let add = (num1, num2) => {
//   return num1 + num2;
// };
// let totals = add;

// let totalValue = () => {
//   for (let i = 0; i < 5; i++) {
//     let totalValue = () => {
//       add(2, 4) + totals(3, 5);
//       return totalValue;
//     };
//   }
//   return totalValue();
// };
// console.log(totalValue());
//
// Don't understand the question


// Challenge 3

// let numbers = [3, 4, 5, 6, 7];

// myFunction = (num) => {
//     return num * 3
// }

// let newArray = numbers.map(myFunction)

// console.log(newArray)


// Challenge 4

const multiply = (a,b) => {
    return a*b
}
const add = (a,b) => {
    return a+b
}
const divide = (a,b) => {
    return a/b
}
const subtract = (a,b) => {
    return a-b
}

// const doMath = (num1) => {
//     return (num2, fn) => {
//         return fn(num1, num2)
//     }
// }

console.log(divide(8,4))
// Basic Closure
//
// A closure in JavaScript is a stateful function
//
// Can be used for:
// - Data Privacy
// - Partial Function Application (currying)
// - Event handlers and callback functions

// In ES5

const closureES5 = function (input) {
  return function () {
    return input
  }
}

// In ES6

const closureES6 = (input) => () => input

// In practice

const initialValue = "Hello World"
const secretES5 = closureES5(initialValue)
const secretES6 = closureES6(initialValue)

console.log("Secret value (ES5):", secretES5())
console.log("Secret value (ES6):", secretES6())

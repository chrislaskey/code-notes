// Pipe function in JavaScript
//
// Pipe takes an arbitrary number of functions as the arguments. It returns
// a function that takes an initial value and when executes each function in
// order, passing the result of one function as the first argument of the
// second.
//
// Uses a basic closure pattern to store the list of functions. Uses reduce to
// walk through each value, passing the result of the last into the next.

const pipe = (...functions) => (
  (initialValue) => (
    functions.reduce((acc, fn) => (
      fn(acc)
    ), initialValue)
  )
)

const addFive = (x) => x + 5
const multiplyByEight = (x) => x * 8
const divideByTwo = (x) => x / 2

const actions = pipe(addFive, multiplyByEight, divideByTwo)
const initialValue = 5
const result = actions(initialValue)

console.log("start:", initialValue)
console.log("result:", result)

// Optimizations
//
// Can further condense pipe into a one liner

const pipeOneLine = (...fns) => (start) => fns.reduce((acc, fn) => fn(acc), start)

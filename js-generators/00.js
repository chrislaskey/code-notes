// Generator functions are marked with a `*`
function* helloCreator () {
  console.log("hello")
}

// Generators are like factories, and return factory instances
const hello = helloCreator()

// To execute the function, call next() on the instance
hello.next()

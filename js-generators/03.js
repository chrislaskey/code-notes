function* helloCreator () {
  // Yield can also be used to receive values from the instance
  const fromInstance = yield

  return fromInstance
}

const hello = helloCreator()

// Executes up to just before the first `yield`
// Returns { value: undefined, done: false }
console.log(hello.next())

//  1. Generator receives a value from the instance
//  2. Continues on from the first yield statement
//  3. Returns { value: "hello", done: true }
console.log(hello.next("hello"))

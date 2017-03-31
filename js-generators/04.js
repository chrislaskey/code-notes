function* helloCreator () {
  // Yield returns "hello" to the instance on the first next() call
  // The generator then waits at the first yield statement
  //
  // The second time the instance calls next(), the yield resolves
  // and assigns the passed in variable to fromInstance
  const fromInstance = yield "hello"

  console.log(fromInstance)
}

const hello = helloCreator()

// Returns { value: "hello", done: false }
const response = hello.next().value

hello.next(`${response} world`)

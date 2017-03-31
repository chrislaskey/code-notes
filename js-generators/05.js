function* helloCreator () {
  const fromInstance = yield

  return fromInstance
}

const hello = helloCreator()

hello.next()

// Since generators are asynchronous, can execute other code between steps
// If an error occurred, this can be communicated to the generator using
hello.throw("Custom error message")

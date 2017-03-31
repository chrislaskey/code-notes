function* helloCreator () {
  // Yield can be used to return values to the instance
  yield "hello"
  return "world"
}

const hello = helloCreator()

// The yield statement returns a hash:
// { value: 'hello', done: false }
console.log(hello.next())

// The return statement also returns a hash
// { value: 'world', done: true }
console.log(hello.next())

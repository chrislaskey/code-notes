function* helloCreator () {
  console.log("hello")
  // yield statements signify stopping points in the generator
  yield
  console.log("world")
}

const hello = helloCreator()

hello.next()
hello.next()

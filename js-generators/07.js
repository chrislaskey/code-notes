function* helloCreator () {
  yield 1
  yield 2
  yield 3
  yield 4
}

const hello = helloCreator()

// Instead of calling `hello.next()` to get out each value
// can use `for ... of` to iterate:
for (let i of hello) {
  console.log(i)
}

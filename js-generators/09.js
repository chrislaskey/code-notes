function* worldCreator () {
  return "world"
}

function* helloCreator () {
  yield "hello"

  // Communication between two generators is also possible
  // Notice the `return` instead of `yield` in worldCreator
  const world = yield* worldCreator()

  yield world
}

const hello = helloCreator()

for (let i of hello) {
  console.log(i)
}

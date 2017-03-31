function* worldCreator () {
  yield "world"
}

function* helloCreator () {
  yield "hello"
  // Generators can delegate control to other generator instances
  yield* worldCreator()
}

const hello = helloCreator()

for (let i of hello) {
  console.log(i)
}

function* helloCreator () {
  // Even though generator steps are asynchronous
  // they are written with synchronous syntax
  //
  // So to catch an error use a standard `try ... catch`
  try {
    const fromInstance = yield

    return fromInstance
  } catch (err) {
    console.log(err)
  }
}

const hello = helloCreator()

hello.next()
hello.throw("Custom error message")

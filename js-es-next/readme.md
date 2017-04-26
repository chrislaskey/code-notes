# JavaScript ES Next

## Topics

### Lexical Binding in "Fat Arrow" Functions

In practice the lexical binding means the value of `this` has to be equal to
the value of `this` just outside the arrow function.

The advantage is you no longer need to save the value of `this` into a local
variable (like `that` or `self`) and capture it in a closure.

The disadvantage is the value is no longer dynamically set depending on the
calling context.

That means `bind`, `apply`, and `call` which change the value of `this` in the
executing code only work with traditional `function` methods.

The lexically scoped value of `this` inside an arrow function means the value
will always be that of the surrounding scope when the method is defined, not
when executed. It can not be rebound.

// Arrow Functions
//
// Lexical Binding
//
// It can lexically bind the `this` reference so I don't have to save the
// `this` reference off into a local variable and capture it in a closure.
//
// In practice the lexical binding means the value of `this` has to be equal to
// the value of `this` just outside the arrow function.
//
// Bind, apply, and call change the value of `this` in the executing code.
// These only work with traditional `function` methods.
// 
// That is because the value of `this` in an arrow function will always be the
// surrounding scope when defined, not when executed. It can not be rebound

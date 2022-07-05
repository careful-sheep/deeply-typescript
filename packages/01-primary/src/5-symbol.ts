// 在ts中，用symbol定义的类型指向的是同一个类型，不具备独一无二的特性
const symbol1: symbol = Symbol('allen');
const symbol2: symbol = symbol1;

// ts中的unique symbol支持类型是独一无二的
const uniqueSymbolFoo: unique symbol = Symbol('allen');
// 类型不兼容
// const uniqueSymbolBar: unique symbol = uniqueSymbolFoo;

// 用typeof来复用已经创建的Symbol，相当于js中的Symbol.for()
const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo;

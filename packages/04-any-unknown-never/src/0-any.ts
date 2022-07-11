// 1. 接收任意类型，任意长度的入参
// log(message?: any, ...optionalParams: any[]): void

// 2. 除了显式的标记一个变量或参数为 any，在某些情况下你的变量/参数也会被隐式地推导为 any,  启用noImplicitAny会报错
// 声明一个变量但不提供初始值
let foo;
// 不为函数参数提供类型标注
// function func1(arg1, arg2) {}

// 3.无拘无束的“任意类型”，它能兼容所有类型，也能够被所有类型兼容

export {};

// 函数声明，函数表达式，箭头函数
// 函数类型标注有两种方式：1）直接在函数中进行参数和返回值的类型声明， 2） TypeScript 中的函数类型签名

function foo(name: string): number {
    return name.length;
}

const foo1 = function (name: string): number {
    return name.length;
};

const foo2: (name: string) => number = function (name) {
    return name.length;
};

const foo3 = (name: string): number => {
    return name.length;
};

const foo4: (name: string) => number = name => {
    return name.length;
};

// 为防止代码可读性差，可以用类型别名将ts函数签名抽离出来
type FuncFoo = (name: string) => number;

const foo5: FuncFoo = name => {
    return name.length;
};

interface FuncFooStruct {
    (name: string): number;
}

export {};

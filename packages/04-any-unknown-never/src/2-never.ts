// never表示不携带任何类型信息
type UnionWithNever = 'allen' | 599 | true | void | never;

// never 类型被称为 Bottom Type，是整个类型系统层级中最底层的类型。和 null、undefined 一样，它是所有类型的子类型，但只有 never 类型的变量能够赋值给另一个 never 类型变量
declare let v1: never;
declare let v2: void;

// X 类型 void 不能赋值给类型 never， 宽类型不能赋值给窄类型
v1 = v2;
v2 = v1;

// 通常我们不会显式地声明一个 never 类型，它主要被类型检查所使用。但在某些情况下使用 never 确实是符合逻辑的，比如一个只负责抛出错误的函数
function justThrow(): never {
    throw new Error();
}

// 在类型流的分析中，一旦一个返回值类型为 never 的函数被调用，那么下方的代码都会被视为无效的代码
function foo(input: number) {
    if (input > 1) {
        justThrow();
        // 等同于 return 语句后的代码，即 Dead Code
        const name = 'allen';
    }
}

export {};

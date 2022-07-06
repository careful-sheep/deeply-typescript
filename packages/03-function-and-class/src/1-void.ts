// 在 TypeScript 中，一个没有返回值（即没有调用 return 语句）的函数，其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined。

// 没有调用 return 语句
function foo(): void {}

// 进行了return操作，但是没有return具体的值，则使用undefined
function bar(): undefined {
    return;
}

export {};

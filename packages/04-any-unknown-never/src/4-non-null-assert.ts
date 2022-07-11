// 非空断言实际上就是剔除了 null 和 undefined 类型
declare const foo: {
    func?: () => {
        prop?: number | null;
    };
};

// 调用会报错，foo.func可能会为undefined
foo.func().prop.toFixed();

// 使用断言强制执行，在运行时可能会报错
foo.func!().prop!.toFixed();

// 可选链会在结果为undefined or null的时候停止执行
foo.func?.().prop?.toFixed();

// 非空断言的常见场景还有 document.querySelector、Array.find
const element = document.querySelector('#id')!;
const target = [1, 2, 3, 599].find(item => item === 599)!;

// 实际上非空断言是类型断言的简写

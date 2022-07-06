function foo(name: string, age?: number): number {
    const inputAge = age || 18;
    return name.length + inputAge;
}

//  默认参数，没有传值时使用默认值
function foo1(name: string, age: number = 18): number {
    const inputAge = age;
    return name.length + inputAge;
}

function foo3(arg1: string, ...rest: any[]) {}

// 也可以使用元祖类型来标注
function foo4(arg1: string, ...rest: [number, boolean]) {}

foo4('allen', 18, true);

export {};

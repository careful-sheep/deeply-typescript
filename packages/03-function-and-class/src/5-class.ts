// 函数的主要结构只有构造函数、属性、方法和访问符（Accessor）
class Foo {
    prop: string;

    constructor(inputProp: string) {
        this.prop = inputProp;
    }

    print(addon: string): void {
        console.log(`${this.prop} and ${addon}`);
    }

    get propA(): string {
        return `${this.prop}+A`;
    }

    // setter 方法不允许进行返回值的类型标注，它并不会被消费
    set propA(value: string) {
        this.propA = `${value}+A`;
    }
}

// 类可以通过类声明、类表达式的方式来创建
// const Foo = class {}

// 修饰符 public / private / protected / readonly
class Foo1 {
    private prop: string;

    constructor(inputProp: string) {
        this.prop = inputProp;
    }

    protected print(addon: string): void {
        console.log(`${this.prop} and ${addon}`);
    }

    public get propA(): string {
        return `${this.prop}+A`;
    }

    public set propA(value: string) {
        this.propA = `${value}+A`;
    }
}

const foo1 = new Foo1('iiiris');
console.log('foo1.prop:', foo1.propA);

class Foo2 {
    // 参数会被直接作为类的成员（即实例的属性），免去后续的手动赋值
    constructor(public arg1: string, private arg2: boolean) {}
}
const foo2 = new Foo2('allens', true);
console.log(foo2.arg1);
export {};

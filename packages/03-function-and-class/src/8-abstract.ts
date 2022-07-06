// 1.一个抽象类描述了一个类中应当有哪些成员（属性、方法等），一个抽象方法描述了这一方法在实际实现中的结构
// 2. 抽象方法其实描述的就是这个方法的入参类型与返回值类型

// 抽象类中的成员也需要使用 abstract 关键字才能被视为抽象类成员
abstract class AbsFoo {
    abstract absProp: string;
    abstract get absGetter(): string;
    abstract absMethod(name: string): string;
    eat() {
        console.log('56789');
    }
}

class Foo implements AbsFoo {
    absProp: string = 'linbudu';

    get absGetter() {
        return 'linbudu';
    }

    absMethod(name: string) {
        return name;
    }
    eat() {
        console.log('12345');
    }
}

const foo = new Foo();
foo.eat();

// interface 可以 extends interface 和class
// class 只能 extends class

// interface 不能使用 implements 关键字
// class 可以 implements interface 和 class

// interface和abstract class的主要区别在于：interface只是一个需要实现的模版，abstract class既可以通过abstract关键字定义模版（有定义但未实现的属性和方法），也可以像普通类一样有具体的属性和方法

interface IDD extends AbsFoo {
    name: string;
}

let a: IDD = {
    absProp: 'allen',
    absGetter: 'fff',
    absMethod: () => {
        return 'ddd';
    },
    eat: function () {
        console.log('12345');
    },
    name: 'aallen'
};

export {};

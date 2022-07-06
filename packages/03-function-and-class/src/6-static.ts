class Foo {
    static staticHandler() {}

    public instanceHandler() {}
}

// 不同于实例成员，在类的内部静态成员无法通过 this 来访问，需要通过 Foo.staticHandler 这种形式进行访问
// 1. 静态成员直接被挂载在函数体上，而实例成员挂载在原型上
// 2. 静态成员不会被实例继承，它始终只属于当前定义的这个类（以及其子类）。而原型对象上的实例成员则会沿着原型链进行传递，也就是能够被继承
// var Foo = /** @class */ (function () {
//     function Foo() {}
//     Foo.staticHandler = function () {};
//     Foo.prototype.instanceHandler = function () {};
//     return Foo;
// })();

class Utils {
    public static identifier = 'linbudu';

    public static makeUHappy() {
        Utils.studyWithU();
        // ...
    }

    public static studyWithU() {
        console.log('balabala');
    }
}

Utils.makeUHappy();

export {};

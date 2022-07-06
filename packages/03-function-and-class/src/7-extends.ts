class Base {
    print() {
        console.log('我是base');
    }
}

class Derived extends Base {
    print() {
        // 派生类可以覆盖基类的方法，可以使用super来访问基类中的方法
        console.log('我是drived');
        super.print();
        // ...
    }
}

const drived = new Derived();
drived.print();

class Base1 {
    printWithLove() {}
}

class Derived1 extends Base1 {
    // 如果基类中没有print，下面的语句将会报错，通过这一关键字我们就能确保这个方法在基类中是否存在
    // override print() {
    //     // ...
    // }
}

export {};

// 将常量约束在一个命名空间下
enum PageUrl {
    Home_Page_Url = 'url1',
    Setting_Page_Url = 'url2',
    Share_Page_Url = 'url3'
}

const home = PageUrl.Home_Page_Url;

// 如果你没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增
enum Items {
    Foo, // 0
    Bar, // 1
    Baz // 2
}

enum Items1 {
    Foo, // 0
    Bar = 599,
    Baz = 600 // 600
}

// 可以使用延迟求值的枚举值
const returnNum = () => 100 + 499;

enum Items2 {
    Foo = returnNum(),
    Bar = 599,
    Baz
}

// TypeScript 中也可以同时使用字符串枚举值和数字枚举值：
enum Mixed {
    Num = 599,
    Str = 'linbudu'
}

// 枚举和对象的重要差异在于，对象是单向映射的,枚举是双向映射的
enum Items3 {
    Foo,
    Bar,
    Baz
}

const fooValue = Items3.Foo; // 0
const fooKey = Items3[0]; // "Foo"

// 从编译产物可以看到enum的本质
// var Items;
// (function (Items) {
//     Items[(Items['Foo'] = 0)] = 'Foo';
//     Items[(Items['Bar'] = 1)] = 'Bar';
//     Items[(Items['Baz'] = 2)] = 'Baz';
// })(Items || (Items = {}));

// 仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射
enum Items4 {
    Foo,
    Bar = 'BarValue',
    Baz = 'BazValue'
}

// "use strict";
// var Items;
// (function (Items) {
//     Items[Items["Foo"] = 0] = "Foo";
//     Items["Bar"] = "BarValue";
//     Items["Baz"] = "BazValue";
// })(Items || (Items = {}));

// 常量枚举，和普通枚举的差异主要在访问性和编译产物，常量枚举只允许成员访问，不允许值访问
const enum Items5 {
    Foo,
    Bar,
    Baz
}

const fooValue2 = Items5.Foo; // 0
// 不能使用Items5[0]来访问

// 上面的代码会被编译成下面的形式
// var fooValue2 = 0; /* Foo */ // 0

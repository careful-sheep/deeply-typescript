// 将常量约束在一个命名空间下
var PageUrl;
(function (PageUrl) {
    PageUrl['Home_Page_Url'] = 'url1';
    PageUrl['Setting_Page_Url'] = 'url2';
    PageUrl['Share_Page_Url'] = 'url3';
})(PageUrl || (PageUrl = {}));
var home = PageUrl.Home_Page_Url;
// 如果你没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增
var Items;
(function (Items) {
    Items[(Items['Foo'] = 0)] = 'Foo';
    Items[(Items['Bar'] = 1)] = 'Bar';
    Items[(Items['Baz'] = 2)] = 'Baz'; // 2
})(Items || (Items = {}));
var Items1;
(function (Items1) {
    Items1[(Items1['Foo'] = 0)] = 'Foo';
    Items1[(Items1['Bar'] = 599)] = 'Bar';
    Items1[(Items1['Baz'] = 600)] = 'Baz'; // 600
})(Items1 || (Items1 = {}));
// 可以使用延迟求值的枚举值
var returnNum = function () {
    return 100 + 499;
};
var Items2;
(function (Items2) {
    Items2[(Items2['Foo'] = returnNum())] = 'Foo';
    Items2[(Items2['Bar'] = 599)] = 'Bar';
    Items2[(Items2['Baz'] = 600)] = 'Baz';
})(Items2 || (Items2 = {}));
// TypeScript 中也可以同时使用字符串枚举值和数字枚举值：
var Mixed;
(function (Mixed) {
    Mixed[(Mixed['Num'] = 599)] = 'Num';
    Mixed['Str'] = 'linbudu';
})(Mixed || (Mixed = {}));
// 枚举和对象的重要差异在于，对象是单向映射的,枚举是双向映射的
var Items3;
(function (Items3) {
    Items3[(Items3['Foo'] = 0)] = 'Foo';
    Items3[(Items3['Bar'] = 1)] = 'Bar';
    Items3[(Items3['Baz'] = 2)] = 'Baz';
})(Items3 || (Items3 = {}));
var fooValue = Items3.Foo; // 0
var fooKey = Items3[0]; // "Foo"
// 从编译产物可以看到enum的本质
// var Items;
// (function (Items) {
//     Items[(Items['Foo'] = 0)] = 'Foo';
//     Items[(Items['Bar'] = 1)] = 'Bar';
//     Items[(Items['Baz'] = 2)] = 'Baz';
// })(Items || (Items = {}));
// 仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射
var Items4;
(function (Items4) {
    Items4[(Items4['Foo'] = 0)] = 'Foo';
    Items4['Bar'] = 'BarValue';
    Items4['Baz'] = 'BazValue';
})(Items4 || (Items4 = {}));

var fooValue2 = 0; /* Foo */ // 0

// Object
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;
const tmp4: Object = 'linbudu';
const tmp5: Object = 599;
const tmp6: Object = { name: 'linbudu' };
const tmp7: Object = () => {};
const tmp8: Object = [];

// Boolean、Number、String、Symbol等装箱类型，有一些超出预期的类型，任何情况下都不要使用这些类型
const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = 'linbudu';
// const tmp13: String = 599; // X
// const tmp14: String = { name: 'linbudu' }; // X
// const tmp15: String = () => {}; // X
// const tmp16: String = []; // X

// object 的引入就是为了解决对 Object 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些：
const tmp17: object = undefined;
const tmp18: object = null;
const tmp19: object = void 0;
// const tmp20: object = 'linbudu'; // X
// const tmp21: object = 599; // X
const tmp22: object = { name: 'linbudu' };
const tmp23: object = () => {};
const tmp24: object = [];

// {}意味着任何非 null / undefined 的值，但是无法对其变量进行任何赋值操作，且没有任何属性
const tmp25: {} = undefined; // X
const tmp26: {} = null; // X
const tmp27: {} = void 0; // X
const tmp28: {} = 'linbudu';
const tmp29: {} = 599;
const tmp30: {} = { name: 'linbudu' };
// tmp30.age = 18;
const tmp31: {} = () => {};
const tmp32: {} = [];

export {};

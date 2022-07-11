// 一个 unknown 类型的变量可以再次赋值为任意其它类型，但只能赋值给 any 与 unknown 类型的变量
let unknownVar: unknown = 'linbudu';

unknownVar = false;
unknownVar = 'linbudu';
unknownVar = {
    site: 'juejin'
};
console.log('unknownVar:', unknownVar);

unknownVar = () => {};

const val1: string = unknownVar; // Error
const val2: number = unknownVar; // Error
const val3: () => {} = unknownVar; // Error
const val4: {} = unknownVar; // Error

const val5: any = unknownVar;
const val6: unknown = unknownVar;

// 要想使用unknown类型，就做断言处理
let unknownVar1: unknown;
(unknownVar1 as { foo: () => {} }).foo();

export {};

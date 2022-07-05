// 对于 let 声明，只需要推导至这个值从属的类型即可。而 const 声明的原始类型变量将不再可变，因此类型可以直接一步到位收窄到最精确的字面量类型，但对象类型变量仍可变（但同样会要求其属性值类型保持一致）
let identifier = 'allen';
const identifier1 = 'allen';

const obj = {
    name: 'allen',
    age: 18
};

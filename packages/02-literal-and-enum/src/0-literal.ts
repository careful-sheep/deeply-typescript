// 字面量类型主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型
// 字面量类型通常和联合类型一起使用

// 字面量类型可以让类型标注更精确，达到类型即文档的目的
interface Res {
    code: 10000 | 10001 | 50000;
    status: 'success' | 'failure';
    data: any;
}

// 下面语句用于，快速生成一个符合指定类型，但没有实际值的变量
declare let res: Res;

const str: 'allen' = 'allen';
const num: 599 = 599;
const bool: true = true;

// 报错！
// const str1: 'allen' = 'allen599';
const str2: string = 'allen';
const str3: string = 'allen599';

interface Tmp {
    bool: true | false;
    num: 1 | 2 | 3;
    str: 'lin' | 'bu' | 'du';
}

// 联合类型是一组类型的可用集合，可以将多个类型集合在一起，其中函数必须使用（）包裹起来
interface Tmp1 {
    mixed: true | string | 599 | {} | (() => {}) | (1 | 2);
}

// 联合类型的常用场景之一是通过多个对象类型的联合，来实现手动的互斥属性
interface Tmp2 {
    user:
        | {
              vip: true;
              expires: string;
          }
        | {
              vip: false;
              promotion: string;
          };
}

declare var tmp: Tmp2;

if (tmp.user.vip) {
    console.log(tmp.user.expires);
}

// 可以使用类型别名Type来复用一组联合变量
type Code = 10000 | 10001 | 50000;
type Status = 'success' | 'failure';

// 无论是原始类型还是对象类型的字面量类型，它们的本质都是类型而不是值

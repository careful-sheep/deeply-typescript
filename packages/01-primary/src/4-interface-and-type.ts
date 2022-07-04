// interface 用来描述对象、类的结构
interface IObjectStruct {
    name: string;
    age: number;
    male: boolean;
}

// 类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型

type Handler = () => Promise<void>; // 函数签名
type PossibleSource = 'juejin' | 'zhihu' | 'segmentfault'; //联合类型
// 一个工具类型等等抽离成一个完整独立的类型
type ToolTypeDemo<T> = {
    [P in keyof T]?: T[P];
};

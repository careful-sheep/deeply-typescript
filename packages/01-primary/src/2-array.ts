// 数组的两种声明方式
const arr1: string[] = [];
const arr2: Array<string> = [];

// 某些情况下也会使用元组，提升数组结构的严谨性
const arr5: [string, number, boolean] = ['linbudu', 599, true];
const arr6: [string, number?, boolean?] = ['linbudu'];
type TupleLength = typeof arr6.length; // 1 | 2 | 3
// ts4支持具名元祖
const arr7: [name: string, age: number, male?: boolean] = ['linbudu', 599];

// js中 void 操作符会执行后面跟着的表达式并返回一个 undefined
// void 操作符强制将后面的函数声明转化为了表达式
const a = void (function iife() {
    console.log('Invoked!');
})();

// ts中的void用于描述内部 1）没有return语句的函数，2）return; 3) return undefined;
function func1() {}
const sss = function func2() {
    return;
};

function func3() {
    return undefined;
}

const func4: () => void = function () {
    return undefined;
};

// js 中没有返回值的函数默认会返回一个undefined
const voidVar1: void = undefined;
// 需要关闭 strictNullChecks
// const voidVar2: void = null;

interface IStruct {
    foo: string;
    bar: {
        barPropA: string;
        barPropB: number;
        barMethod: () => void;
        baz: {
            handler: () => Promise<void>;
        };
    };
}

// 使用类型断言可以不用那么完整的实现结构，也能保留类型提示
const obj = <IStruct>{
    bar: {
        baz: {}
    }
};
obj.foo;
obj.bar.baz.handler();

type Primitive = 
    | boolean
    | number
    | string
    | symbol
    | null 
    | undefined;

let obj: object;

//won't pass
// obj = true;
// obj = 42;
// obj = "test";
// obj = null;
// obj = undefined;

//will pass
obj = {};
obj = [];
obj = Math.random;

const obj2: any = {};
obj2.foo = "bar";

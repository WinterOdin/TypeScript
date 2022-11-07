const numbers = [3, 2, 1]

const someObject = {
    id: 21,
    name: "Marcel"
}

const testBoolean = true;

type Flatten<T> = T extends any[] ? T[number] :
    T extends object ? T[keyof T]:
    T;


type NumbersArrayFlattened = Flatten<typeof numbers>;
type someObjectArrayFlattened = Flatten<typeof someObject>;
type testBooleanArrayFlattened = Flatten<typeof testBoolean>;
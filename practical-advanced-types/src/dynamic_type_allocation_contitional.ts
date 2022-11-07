interface StringContainer {
    value: string;
    format(): string;
    split(): string[];
};

interface NumberContainer {
    value: number;
    nearestPrime: number;
    round(): number;
};

type Item<T> = {
    id: T;
    container: T extends string ? StringContainer : NumberContainer;
};

let item: Item<string> = {
    id: "a23d",
    container: null
};

item.container.format()

let item2: Item<number> = {
    id: 2,
    container: null
}

item2.container.nearestPrime

type ArrayFilter<T> = T extends any[] ? T : never;

type StringOfNumbers = ArrayFilter<string | number | string[] | number[]>;

/*
1. distribute -> never | never | string[] | number[]
2. "never" is ignored -> string[] | number[]
*/
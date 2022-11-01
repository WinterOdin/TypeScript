let value: any;
value = true;
value = 42;
value = {};
value = [];
value = Math.round;
value = null;
value = undefined;
value = "Hello World";

if (typeof value === "string"){
    const uppercaseText = value.toUpperCase();
    console.log(uppercaseText);
}


//to override hinting in function and still use unknown 
function range(from: number, to: number): number[]; 
function range(from: unknown, to: unknown): number[] {
    if(typeof from !== "number" || typeof to !=="number"){
        throw Error("range() expects exactly 2 numbers");
    }
    const values: number[] = [];
    for (let i = from; i < to; i++){
        values.push(i);
    }
    return values;
}

console.log(range(0, 5));

//asserting In new way
function assertIsNumber(
    value: unknown,
    name: string
): asserts value is number{
    if (typeof value !== "number"){
        throw Error(`Expected "${name}" to be a number`)
    }
}

function new_range(from: number, to: number): number[]; 
function new_range(from: unknown, to: unknown): number[] {
    assertIsNumber(from, "from");
    assertIsNumber(to, "to");

    const values: number[] = [];
    for (let i = from; i < to; i++){
        values.push(i);
    }
    return values;
}

console.log(range("A" as any, "F" as any));
function assertIsNum(
    value: number,
): asserts value is number{
    if (typeof value !== "number"){
        throw Error(`Number is expected`)
    }
}


function add(n1: number, n2: number){
    assertIsNum(n1)
    assertIsNum(n2)
    return n1+n2
}

const number1: number = 5;
const number2: number = 2.8;

const result: number = add(number1, number2);
console.log(result)


const adder = (...numbers: number[]) => {
    
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
};

console.log(adder(4, 6, 5, 3 ))
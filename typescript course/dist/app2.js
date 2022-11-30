function assertIsNum(value) {
    if (typeof value !== "number") {
        throw Error(`Number is expected`);
    }
}
function add(n1, n2) {
    assertIsNum(n1);
    assertIsNum(n2);
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
const adder = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(adder(4, 6, 5, 3));

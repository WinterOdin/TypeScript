
type NamesType = "John" | "Jane" | "Test" ;
type AgesType = Record<NamesType, number>;

const ages: AgesType = {
    "John" : 29,
    "Jane": 25,
    "Test": 50
}

console.log(ages);
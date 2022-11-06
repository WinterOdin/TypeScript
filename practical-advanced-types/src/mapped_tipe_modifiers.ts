interface Pet {
    name: string;
    age: number;
}

//add Read only for all items in objects
type ReadonlyPet = {
    readonly [K in keyof Pet]: Pet[K];
}

//modifiable
const pet: Pet = {name: "Alex", age: 5};
//unmodifiable
const readonlyPet: ReadonlyPet = {name: "Mark", age: 7}

pet.age = 10;
//readonlyPet.age = 3


//removes option not a value
//value becomes required  

interface Human {
    name: string;
    age: number;
    favoriteDish?: string;
}

type removeOptional = {
    [K in keyof Human]-?: Human[K];
}

const rmOptional: removeOptional = { 
    name: "Marcel",
    age:22,
    favoriteDish: "soup"

}

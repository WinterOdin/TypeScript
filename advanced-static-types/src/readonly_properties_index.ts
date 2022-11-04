// interface User {
//     id: number;
//     name: string;
// }

// const user: User = {
//     id: 42,
//     name: "Marcel"
// };

// user.name += " Test"
// console.log(user)

class User {
    readonly id: number;
    name: string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
}

const user = new User(42, "Marcel");
//user.id++;
user.name += " Test"
console.log(user)

const days : ReadonlyArray<string> = [
    "Monday",
    "Tuesday",
    "Wednesday"
]

//days[0] = "Test day"
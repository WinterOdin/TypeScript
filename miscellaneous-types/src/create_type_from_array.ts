const random_array = {
    name:"John Doe",
    age: 27
};

type UserArray = typeof random_array;

const user2: UserArray = {
    age: 28,
    name: "Jane Doe"
}

console.log(random_array)
console.log(user2)
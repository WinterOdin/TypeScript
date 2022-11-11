type Person = {
    name: string;
    age?: number;
};

let user_req: Required<Person> = {
    name: "Marcel Test",
    age: 22,
}
type User = {
    name: string;
    age: number;
    gender: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "John Doe"
}
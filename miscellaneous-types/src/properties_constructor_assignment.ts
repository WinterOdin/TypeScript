class PersonTest1 {
    constructor(public name: string) {
    
    }

}

const johnDoe = new PersonTest1("John Doe")
console.log(johnDoe.name);

// or you can do this

class PersonTest2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

}

const johnDoe2 = new PersonTest1("John Doe")
console.log(johnDoe.name);
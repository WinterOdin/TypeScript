class User {
    username: string;

    constructor(username: string){
        this.username = username;
    }
}

const user_test = new User("Marcel");
const username = user_test.username.toLowerCase();
console.log(`Username: ${username}`)
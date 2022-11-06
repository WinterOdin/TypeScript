interface Admin{
    id: string;
    role: string;
}

interface User{
    email: string;
}

function redirect(user: Admin | User){
    if ("role" in user){
        console.log(user.role)
    } else {
        console.log(user.email)
    }
}
import prisma from '../../../lib/db.js'
import { hashPassword } from '../../../lib/auth.js';

async function handler(req, res){
    if (req.method === 'POST'){
        const data = req.body;
    const {email, password} = data;

    if (
        !email || !email.includes('@') ||
        !password || password.trim().length < 7
    ){
        res.status(422)
        .json({message:'Invalid Input'});
        return;
    }

    const hashPwd = await hashPassword(password);

    const userData = {
        email: email,
        password: hashPwd
    }

    const result = await prisma.user.create({ data: userData })

    res.status(201)
    .json({message:"New account added"})

    }



}

export default handler;
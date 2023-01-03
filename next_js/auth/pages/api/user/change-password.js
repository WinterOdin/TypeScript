import { getSession } from "next-auth/react";
import prisma from '../../../lib/db.js';
import { hashPassword, verifyPassword } from '../../../lib/auth.js';


async function handler(req, res){

    if( req.method !== 'PATCH' ){
        return;
    }

    const session = await getSession({req: req});

    if(!session){
        res.status(401).json({message: "Not auth"})
        return;
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    

    const user = await prisma.user.findUnique({
        where: {
          email: userEmail,
        },
    }) 

    if (!user){
        res.status(404).json({message: " Not auth "})
        throw new Error("No user found")
    }

    const currentPassword = user.password
    console.log(newPassword)
    const passwordAreEqual = await verifyPassword(newPassword, currentPassword)

    if (!passwordAreEqual){
        res.status(403).json({message: " Not auth "})
        throw new Error("Wrong password")
    }

    const updateUser = await prisma.user.update({
        where: {
            email: userEmail,
        },
        data: {
          password: await hashPassword(newPassword),
        },
      })

    res.status(200).json({message: "Password changed"})

}

export default handler;
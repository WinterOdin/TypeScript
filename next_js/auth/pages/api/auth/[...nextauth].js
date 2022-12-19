import NextAuth from "next-auth/next";
import prisma from '../../../lib/db.js';
import { hashPassword, verifyPassword } from '../../../lib/auth.js';

import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    session:{
        jwt: true
    },
    providers:[
        CredentialsProvider({
            async authorize(credentials){
                const user = await prisma.user.findUnique({
                    where: {
                      email: credentials.email,
                    },
                }) 
                if (!user){
                    throw new Error("No user found")
                }
                const isValid = await verifyPassword(credentials.password, user.password)
                
                if (!isValid){
                    throw new Error("Could not log you in")
                }

                return {
                    email: user.email
                }
            
            
            }
        })
    ]
});

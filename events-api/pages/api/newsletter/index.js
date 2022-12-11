
async function registerNewsletter(req, res){

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    
    if(req.method === 'POST'){
        
        const email = req.body.email;

        if (!email || email.trim() === '' ||
            !email.includes('@')){
            res.status(422).json({message: 'Invalid email addres.'});
            return;
        }

        await prisma.newsletter.create({
            data: {
              email: email,
            },
        })

        res.status(200).json({message: "Success"});

    }
}

export default registerNewsletter

async function specificPost(req, res) {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    const post_id = req.query.postId


    if(req.method === 'GET'){

        const post_data = await prisma.user.findUnique({
            where: {
                id: +post_id,
            },
        })

        res.status(200).json({comments: post_data})

    }else if (req.method === 'POST'){
        const email = req.body.email;
        const name = req.body.name; 
        const comment = req.body.text;

        if (
            !email ||
            email.trim() === '' ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !comment ||
            comment.trim() === ''
        ){
            res.status(422).json({message: 'Invalid email addres.'});
            return;
        }

        await prisma.Contact_Message.create({
            data: {
                email: email,
                name: name,
                message: comment,
            },
        })
        
        res.status(200).json({message: "Success"});
    
    }
    

}


export default specificPost
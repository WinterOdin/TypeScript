async function comment(req, res){

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    const eventId = req.query.eventId

    if(req.method === 'POST'){
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

        await prisma.comment.create({
            data: {
                email: email,
                name: name,
                text: comment,
                eventId: +eventId
            },
        })
        
        res.status(200).json({message: "Success"});
    
    }else {

        const commentEvents = await prisma.comment.findMany({
            where: {
                eventId: {
                    equals: eventId
                },
            },
        })
        
        res.status(200).json({comments: commentEvents})

    }
}





export default comment
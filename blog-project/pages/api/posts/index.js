async function AllPosts(req, res){

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    if(req.method === 'GET'){
        const posts = await prisma.post.findMany()

        res.status(200).json({posts: posts})
    
    }
}





export default AllPosts
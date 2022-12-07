function comment(req, res){

    if(req.method === 'POST'){
        const email = req.body.email;
        const name = req.body.name; 
        const comment = req.body.comment;

        const newComment = {
            id: new Date().toISOString(),
            email: email,
            name: name,
            text: comment
        };

        
        res.status(200).json({message: "Success"});
    }
}

export default comment
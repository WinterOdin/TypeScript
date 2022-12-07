function register(req, res){

    if(req.method === 'POST'){
        const email = req.body.email;
    
        const newsleter = {
            id: new Date().toISOString(),
            email: email,
        };

        
        res.status(200).json({message: "Success"});

    }
}

export default register
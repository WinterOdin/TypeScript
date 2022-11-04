const sing = function() {
    while (true){
        console.log("aaaaaaaaaaaaaaaaaaaa")
    }
};


//unreachable due to program non returning 
//const result = sign();

function tirmLower(text: string | null){
    if(typeof text === "string"){
        return text.trim().toLowerCase();
    }

    if(text === null){
        return null;
    }
    return text;
}
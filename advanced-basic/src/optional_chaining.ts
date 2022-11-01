type serializationOptions = {
    formatting?: {
        indent: number; 
    }
}

function serializeJSON(value: any, options?: serializationOptions){
    const indent = options?.formatting?.indent ?? 2;
    return JSON.stringify(value, null, indent)
}

const user = {
    name: "Marcel",
    git: "winterodin",
};

const json = serializeJSON(user, {
    formatting :{
        indent: 2,
    }
});

console.log(json);
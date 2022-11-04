//return error if case isn't satisfied

enum ShirtSize {
    XS,
    S,
    M,
    L,
    XL
}

function assertNever(value: never): never{
    throw Error(`Unexpected value ${value}`);
}

function prettyPrint(size: ShirtSize){
    switch (size) {
        case ShirtSize.XS: return "xsmall";
        case ShirtSize.S: return "small";
        case ShirtSize.M: return "medium";
        case ShirtSize.L: return "large";
        //case ShirtSize.XL: return "large";
        
        default: return assertNever(size);
    }
}
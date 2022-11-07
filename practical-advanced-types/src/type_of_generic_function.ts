function generateId(seed: number){
    return seed + 5;
}

type ReturnTypes<T> = T extends (...args: any[]) => infer R ? R: any;
type Id = ReturnTypes<typeof generateId>;




type Animal = {
    pose(): void;
}

interface Jungle {
    nightvision: boolean;
}
interface Test{
    test: boolean
}


type JungleAnimal = Animal | Jungle;

let bat: JungleAnimal;

interface TestJungle extends Jungle, Test {}




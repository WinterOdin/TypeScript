type Item = {
    name: string;
    description: string;
    price: number;
    image: string;
};


type ItemPreview = Pick<Item, "name" | "image">;

const item: Item = {
    name: "Macbook",
    description: "test desc",
    price: 1234,
    image: "url_to_img"
};

const ItemPreview: ItemPreview = {
    name: item.name,
    image: item.image,
};

console.log(ItemPreview)
console.log(item)

type SecondItem = {
    name: string;
    description: string;
    price: number;
    image: string;
};

type PriclessItem = Omit<SecondItem, "price" | "currency">

const pricless_second: PriclessItem = {
    name: "Laptop Bag",
    description: "bag",
    image: "url_test",
}

console.log(pricless_second)
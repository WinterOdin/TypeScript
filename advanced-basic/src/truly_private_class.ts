//ES6 2015 and up

class Counter{
    #value = 0;

    increment(){
        this.#value += 1;
    }

    get count() {
        return this.#value;   
    }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);

// below 2015
function createCounter(){
    let value = 0;
    return {
        increment_below(){
            value += 1;
        },
        get display(){
            return value;
        },
    };
}
const old_way = createCounter();
old_way.increment_below();
old_way.increment_below();
old_way.increment_below();
console.log(old_way.display);
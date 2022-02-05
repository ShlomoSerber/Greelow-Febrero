class Counter {
    constructor(counter) {
        this.counter = counter
    }

    increaseOne = () => {
        this.counter ++;
    }
    decreaseOne = () => {
        this.counter --;
    }
    getValue = () => {
        return this.counter;
    }
}

let counter = new Counter(10);
console.log(counter.getValue());

counter.decreaseOne();
console.log(counter.getValue());

counter.increaseOne();
console.log(counter.getValue());
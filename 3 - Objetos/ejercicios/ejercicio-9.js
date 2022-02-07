class Calculator {
    constructor() {
        this.memory = 0;
        this.total = 0;
    }

    writeToInput = (inputDomId, character) => {
        let input = document.querySelector(`#${inputDomId}`);

        if (input.value == 0) {
            input.value = null
        }

        input.value += character;
    }

    clear = (inputDomId, displayDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let display = document.querySelector(`#${displayDomId}`);

        input.value = 0;
        display.innerHTML = "0";
        this.total = 0;
    }

    calculate = (inputDomId, displayDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let display = document.querySelector(`#${displayDomId}`);

        this.total = eval(input.value);
        display.innerHTML = this.total;
        input.value = this.total;
    }

    memoryStore = (memoryDomId, inputDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let memorydisplay = document.querySelector(`#${memoryDomId}`);

        this.memory = input.value;
        memorydisplay.innerHTML = `Memory: ${this.memory}`;
    }

    memoryClear = (memoryDomId) => {
        let memorydisplay = document.querySelector(`#${memoryDomId}`);

        this.memory = 0;
        memorydisplay.innerHTML = `Memory: ${this.memory}`;
    }

    memoryRecall = (memoryDomId, inputDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let memorydisplay = document.querySelector(`#${memoryDomId}`);

        input.value = this.memory;
        memorydisplay.innerHTML = `Memory: ${this.memory}`;
    }

    memoryAdd = (memoryDomId, inputDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let memorydisplay = document.querySelector(`#${memoryDomId}`);

        this.memory = parseInt(this.memory) + parseInt(eval(input.value), 10);
        memorydisplay.innerHTML = `Memory: ${this.memory}`;
    }

    memorySubtract = (memoryDomId, inputDomId) => {
        let input = document.querySelector(`#${inputDomId}`);
        let memorydisplay = document.querySelector(`#${memoryDomId}`);

        this.memory = parseInt(this.memory) - parseInt(eval(input.value), 10);
        memorydisplay.innerHTML = `Memory: ${this.memory}`;
    }
}

let calculator = new Calculator();
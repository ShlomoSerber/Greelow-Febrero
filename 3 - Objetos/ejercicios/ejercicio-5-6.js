class Printer {
    constructor(model) {
        this.model = model;
    }

    printerTest = () => {
        return "Test succesfull"
    }
    getModel = () => {
        return this.model;
    }
}

let myPrinter = new Printer("TX-200");
let testResult = myPrinter.printerTest();
let printerModel = myPrinter.getModel();

console.log(testResult);
console.log(`The model of the printer is: ${printerModel}`);
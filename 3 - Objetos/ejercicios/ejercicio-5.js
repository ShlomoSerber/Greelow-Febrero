class Printer {

    printerTest = () => {
        return "Test succesfull"
    }
}

let myPrinter = new Printer();
let testResult = myPrinter.printerTest();

console.log(testResult);
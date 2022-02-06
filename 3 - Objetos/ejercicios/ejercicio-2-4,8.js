class Person {
    constructor(name, lastName, birthDate) {
        this.name = name,
        this.lastName = lastName,
        this.birthDate = birthDate // Format: "00/00/0000" (day/month/year)
    }

    getAge = birthday => {

        // Instructions:
        // The birthday parameter has to be in this format: "00/00/0000" (day/month/year)
        // Day can't be over 31 and month can't be over 12, no negative numbers or 0 are allowed

        // Validations:
        if (typeof birthday != "string" || birthday.length != 10 || birthday.charAt(2) != "/" || birthday.charAt(5) != "/" || typeof parseInt(birthday.substring(0, 2), 10) != "number" || typeof parseInt(birthday.substring(3, 5), 10) != "number" || typeof parseInt(birthday.substring(6), 10) != "number" || parseInt(birthday.substring(0, 2), 10) < 1 || parseInt(birthday.substring(0, 2), 10) > 31 || parseInt(birthday.substring(3, 5), 10) < 1 || parseInt(birthday.substring(3, 5), 10) > 12 || parseInt(birthday.substring(6), 10) < 1) {
            console.log("getAge() parameter error, please read instructions.");
            return;
        }

        const day = parseInt(birthday.substring(0, 2), 10);
        const month = parseInt(birthday.substring(3, 5), 10);
        const year = parseInt(birthday.substring(6), 10);

        const birthDate = new Date(year, (month - 1), day);
        const currentTime = new Date();

        return parseInt(currentTime.getFullYear(), 10) - parseInt(birthDate.getFullYear(), 10);
    }

    canDrinkAlcohol = birthday => {

        const age = this.getAge(birthday);

        if (age > 20) {
            return true;
        } else if (age <= 20) {
            return false;
        } else {
            console.log("canDrinkAlcohol() parameter error, please read instructions.");
        }
    }
}

let juan = new Person("Juan", "Lopez", "05/09/1996");
console.log(juan.canDrinkAlcohol(juan.birthDate));
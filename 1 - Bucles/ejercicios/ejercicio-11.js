const array = [42, true, [2, 1], "hello", 34.4, {name: "juan"}];

const getArrayDataTypes = array => {
    let arrayDataTypes = [];

    array.forEach(element => arrayDataTypes.push(typeof element));

    console.log(arrayDataTypes);
}

getArrayDataTypes(array);
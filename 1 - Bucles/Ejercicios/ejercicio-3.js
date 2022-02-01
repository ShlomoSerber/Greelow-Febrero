const getRandom = inclusiveMax => {
    return Math.ceil((Math.random() * inclusiveMax));
}

let array = [4, 5, 734, 43, 45];
array.push(getRandom(100), getRandom(100));

console.log(array);
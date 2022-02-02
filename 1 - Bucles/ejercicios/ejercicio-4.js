const getRandom = inclusiveMax => {
    return Math.ceil((Math.random() * inclusiveMax));
}

let array = [4, 5, 734, 43, 45];
for (i = 0; i < 10; i++) {
    array.push(getRandom(100));
}

console.log(array);
const array = [45, 67, 87, 23, 5, 32, 60];
let invertedArray = []

array.forEach(number => invertedArray.unshift(number));

console.log(invertedArray);
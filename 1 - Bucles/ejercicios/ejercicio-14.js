const array = [43, 23, 6, 87, 43, 1, 4, 6, 3, 67, 8, 3445, 3, 7, 5435, 63, 346, 3, 456, 734, 6, 34]

const getMax = array => {
    let max = 0;

    array.forEach(number => number > max ? max = number : null);

    console.log(max);
}

getMax(array);
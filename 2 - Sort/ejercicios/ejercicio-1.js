let array = [9, 2, 6, 1, 4, 3, 8, 7];

const sortToBiggest = array => {

    for (i = 0; i < array.length; i++) {
        array.map((number, index) => {
            if (number > array[index + 1]) {
                let first = array[index];
                array[index] = array[index + 1];
                array[index + 1] = first;
            }
        })
    }
    
    console.log(array);
}

sortToBiggest(array);
const getCharCounts = string => {

    let loweredString = string.toLowerCase();
    let charactersCount = {};

    for (i = 0; i < string.length; i++) {
        if (charactersCount[loweredString[i]] === undefined) {
            charactersCount[loweredString[i]] = 1;
        } else {
            charactersCount[loweredString[i]] ++;
        }
    }
    
    console.log(charactersCount);
}

getCharCounts("Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus")
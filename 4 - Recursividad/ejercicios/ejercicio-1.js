// I couldn't think of any way to have this array inside the function (unless it wasn't recursive)
let array = [];

const countdown = (n = 1) => {
    array.push(n)

    if (n <= 1) {
        return array;
    } else {
        return countdown(n - 1);
    }
}

console.log(countdown(5))
const countdown = (n) => {

    if (n <= 1) {
        return [1];
    } else {
        return [n, ...countdown(n - 1)];
    }
}

console.log(countdown(5));
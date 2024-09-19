// Задание 5

const action = (x, n) => {
    if (n < 0) {
        return 1 / action (x, -n);
    } else if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
}

console.log(action(3, 4))
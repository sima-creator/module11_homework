// Задание 3

function sum(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const x = sum(6);
console.log(x(4));
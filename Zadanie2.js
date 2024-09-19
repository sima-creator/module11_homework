// Задание 2

qualificationOfNumber(27);

function qualificationOfNumber(number = 1) {
    if (number > 1000) {
        console.log('Введенные данные неверны!');
        return;
    }
    if (number <= 1) {
        console.log(`${number} - это сложное число.`);
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} - это сложное число.`);
            return;
        }
    }
    console.log(`${number} - это простое число.`)
}

// Задание 4

function printNumbers (a, b) {
    const intervalId = setInterval(
        () => {
            console.log(a);
            a++;
            if (a > b) {
                clearInterval(intervalId);
            }
        }, 1000)
}

printNumbers(4, 10);
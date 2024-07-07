//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


function arithmeticAverage (array) {
    let sum = 0;
    let count = 0;
    
    array.forEach(element => {
        if (typeof element === "number") {
            sum += element; // sum = sum + element;
            count++; // count = count + 1;
        }
    });

    return count !== 0 ? (sum / count) : 0;
}

console.log(arithmeticAverage(['trec', 'vdf', 5, 2, 9, 'rtt']));
// творити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function name (x) {
    return function (y) {
        return x / y;
    }
}

const a = name(5)(2);

console.log(a);
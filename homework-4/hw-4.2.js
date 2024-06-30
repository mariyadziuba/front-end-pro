//Дано тризначне число, яке надае користувач, потрибно визначити:

//Чи правда, що всі цифри однакові?
//Чи є серед цифр цифри однакові?

//викликаємо віконце взаємодії із користувачем

let number = prompt ("enter a three-digit number");

//створюємо функцію для перевірки введеного числа

function checkNumber(number){

// тип число переводимо у тип строки
let stringNumber = number.toString();

// елементи строки розділюємо 

let splitStringNumber = stringNumber.split('');


// перевірка на те, чи всі цифри однакові методом every, який перевіряє кожен елемент окремо(де діджит - окрема цифра, еррей - масив цифр)
//кожен окремий елемент-цифра порівнюється  із першим елементом масиву (в даному випадку)

let allIdentical = splitStringNumber.every((digit, _, array) => digit === array[0]);

//  функцію повертаємо

return allIdentical;

}

// функцію викликаємо 

let result = checkNumber(number);

console.log(`Are all numbers identical? ${result}`);


//я не знаю як виконати другу частину завдання
//Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл. Приклад:

//10369

//1 0 3 6 9


let number = 10369;
let stringNumber = number.toString();
console.log(stringNumber [0], stringNumber [1], stringNumber [2], stringNumber [3], stringNumber [4]);

// для мене це супер перші кроки в програмуванні (маю на увазі не верстку), тож в книзі "джс для дітей" прочитала про спосіб видобування окремих символів із рядків
// хоча цей варіант видає не через пробіл значення, це мій варіант. Наступне рішення коректне, але прийшло не без допомоги.


let numb = 10369;
let numberString = numb.toString();
let splitStringNumb = numberString.split('');
let splitJoinNumb =  splitStringNumb.join(' ');
console.log(splitJoinNumb); 
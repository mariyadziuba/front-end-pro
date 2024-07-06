//Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....)

let str = ' ';
for (let a = 20; a <= 30; a+=0.5){
    str += a + ' ';
}
    console.log(`Here are numbers ${str}`);

//

let ing = ' ';
let b = 20;
while (b<=30) {
    ing += b + ' ';
    b+=0.5;
}
 console.log(`Here are numbers ${ing}`);

//

let string = ' ';
let c = 20;
do{
    c+=0.5;
    string += c + ' ';
}
while (c <= 30);
console.log(`Here are numbers ${string}`);
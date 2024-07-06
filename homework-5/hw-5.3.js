//Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N


let wholeNumb = prompt ( `Введіть ціле число `);
let number = Number(wholeNumb);


for (let n=1; n<=100; n++) {
    let square = n ** 2;
    if (square <= number){
        console.log(`Ось всі цілі числа квадрат яких не перевищує ваше введене число: ${square}`);
        }
    else{
       break;
       }
      }
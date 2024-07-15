// Написати функцію, яка приймає 1 параметр. Та скадає значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

// console.log(sum(4)); // 4

// console.log(sum(6)); // 10

// console.log(sum(10)); // 20

// console.log(sum(7)); // 27

function addSumm() {
    
    let currentSumm = 0;

    return function(num){
        currentSumm += num;
        return currentSumm;
    };
}

const summ = addSumm();

console.log(summ());
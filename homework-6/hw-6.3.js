//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//Наприклад:

//const array = [1, 3, 4, 6, 2, 5, 7];

// removeElement(array,4);

// console.log(array); // Результат: [1, 3, 6, 2, 5, 7]

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement (array, item) {
    item.forEach(item => { 
        const index = array.indexOf(item);

// Метод indexOf()елементів Array повертає перший індекс, за яким даний елемент можна знайти в масиві, або -1, якщо його немає.

        if (index > -1){
    	    array.splice(index, 1); // 1- видаляє один елемент
        }
    });

    return array;
}

console.log(removeElement(array, [4]));

// splice () змінює вміст масиву, видаляючи наявні елементи та/або додаючи нові. 
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start - обовязковий атрибут, індекс, за яким починає змінювати масив. 
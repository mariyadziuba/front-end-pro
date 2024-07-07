//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вхідний рядок та символи для видалення задає користувач.

let greeting = prompt(`Введіть свою фразу`);
let symbolsToDelete = prompt(`Введіть символи до видалення`);

// Розділення введеного рядка символів на масив символів

symbolsToDelete = symbolsToDelete.split('');

function stringSlice (string, symbolsToDelete) {  

    symbolsToDelete.forEach((element) => { 

        string  =  string.split(element).join('')   ;            
	});
    
    return string ;
}

console.log(stringSlice(greeting, symbolsToDelete));


// forEach - цикл для масивів, в якому кожен його елемент перебирається
// split - метод, який перетворює строку на масив і видаляє з неї згадані в аргументі символи, join - зєднує

// цикл матиме дві ітерації:

// "hello world"

// l
// "hello world" =(split) ["he", "", "o wor", "d"] =(join) "heo word";

// d
// "heo word" =(split) ["heo wor", ""] =(join) "heo wor";
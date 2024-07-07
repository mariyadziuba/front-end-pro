//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вхідний рядок та символи для видалення задає користувач.

// let greeting = prompt (`Введіть свою фразу`);
// let symbolsToDelete = prompt (`Введіть символи до видалення`);


function stringSlice (string, symbolsToDelete) {  

    symbolsToDelete.forEach((element) => {                
	});
    
    return string;
}

console.log(stringSlice("hello world", ['l', 'd']));


// forEach - цикл для масивів, в якому кожен його елемент перебирається
// split - перетворює строку на масив і видаляє з неї згадані в аргументі символи, join - зєднує

// цикл матиме дві ітерації:

// "hello world"

// l
// "hello world" = ["he", "", "o wor", "d"] = "heo word";

// d
// "heo word" = ["heo wor", ""] = "heo wor";
// Дізнатися суму всіх зарплат користувачів. Об'єкт може містити невідому кількість департаментів та співробітників


let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function getSummSalary(section) {

    let totalSumm = 0; // створення змінної для сумування усіх salary 

    if (Array.isArray(section)) { // якщо тип даних є масивом, то нехай до змінної totalSumm додаються усі значення salary
        for (let worker of section)
            totalSumm += worker.salary;
    } else {
    for (let department of Object.values(section)) { // якщо тип даних є об'єктом, то через метод Object.values отримуємо масив із значень об'єкта
        totalSumm += getSummSalary(department); // функція рекурсійно пройдеться по отриманому масиві і до totalSumm додасть усі значення salary
    }
}
    return totalSumm;   
}

let totalSummSalary = getSummSalary(company);
console.log(totalSummSalary);
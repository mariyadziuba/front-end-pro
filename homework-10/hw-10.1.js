// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
    name: 'Maria',
    age: 27,
    city: 'London',
};

// метод Object.keys() повертає масив ключів

const keys = Object.keys(user);
console.log(keys);

// метод Object.values() повертає масив значень 

const values = Object.values(user);
console.log(values);

// метод Object.entries() повертає масив пар ключ-значення

const entries = Object.entries(user);
console.log(entries);
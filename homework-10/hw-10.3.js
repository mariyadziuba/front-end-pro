// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const phoneBook = {
    contacts: [
        {name: 'Maria L', phone: '111-111-111', email: 'maria@mail.com'},
        {name: 'Julia N', phone: '000-111-000', email: 'julia@mail.com'},
        {name: 'Petro K', phone: '000-222-000', email: 'petro@mail.com'}
    ]
};
console.log(phoneBook.contacts);

// метод для пошуку контактів за ім'ям

const nameFromContacts = phoneBook.contacts.map(contact => contact.name);
console.log(nameFromContacts);

//метод для додавання нових контактів.

phoneBook.contacts.push();
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. 
// Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const phoneBook = {
    contacts: [
        {name: 'Maria L', phone: '111-111-111', email: 'maria@mail.com'},
        {name: 'Julia N', phone: '000-111-000', email: 'julia@mail.com'},
        {name: 'Petro K', phone: '000-222-000', email: 'petro@mail.com'}
    ],


// метод для пошуку контактів за ім'ям

findContactByName: function(name) {
    const contact = this.contacts.find(contact => contact.name === name);
    return contact ? contact : 'Contact not found';
},


//метод для додавання нових контактів.

addContact: function(name, phone, email) {
    const newContact = { name, phone, email };
    this.contacts.push(newContact);
}

};
let birthday = prompt ("Який рік твого народження?");
let town = prompt ("У якому місті ти живеш?");
let sport = prompt ("Який твій улюблений вид спорту?");

// обчислення перед виведенням інформації користувачу 

let townMessage;
if (town === "Київ") {
    console.log("Ти живеш у столиці України.");
}
else if (town === "Вашингтон") {
    console.log("Ти живеш у столиці США")
}
else if (town === "Лондон") {
    console.log("Ти живеш у столиці Великої Британії")
}
else {
    console.log(`Ти живеш у місті ${city}.`);
}

let sportMessage;
if (sport === "футбол") {
    console.log("Круто! Хочеш стати як Андрій Шевченко?")
}
else if (sport === "бокс") {
    console.log("Круто! Хочеш стати як Олександр Усик?")
}
else if (sport === "фехтування") {
    console.log("Круто! Хочеш стати як Ольга Харлан?")
}
else{
    console.log("Круто!");
}
//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const dollar = 26;
const maxRate = 100;
const rateStep = 10;

for (let h = 10; h <= maxRate; h+=rateStep) {
		const howMuch = dollar * h;
    console.log(`${h} uah is equilatte for ${howMuch} dollars`);
}
//Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const dollar = 26;

for (let h = 10; h <=100; h+=10) {
		const howMuch = dollar * h;
    console.log(`${h} hrywnas is equilatte for ${howMuch} dollars`);
}
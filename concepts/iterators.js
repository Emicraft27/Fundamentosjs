// High Order Funtions
//Funciones de Orden Superior
// Funciones que esiven como 
// parámetros otras funciones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
}

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];

foods.forEach(food => console.log (food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + '🥺');
console.log(foodsEmojis);

const sdoof = foods.map(food =>{
    const separate = food.split('');
    const reversed = separate.reverse();
    const joined = reversed.join('');
    return joined;
    // food => food.split('').reverse().join('')
});
console.log(sdoof);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const cuadrado = numbers.map(num => num ** 2);
const cubos = numbers.map(num => num ** 3);
const mitad = numbers.map(num => num / 2);

console.log("Cuadrados:", cuadrado);
console.log("Cubos:", cubos);
console.log("Mitades:", mitad);

function wrappedGifts(gifts){
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length + 2);
        return ${ tapa }\n*${ gift }*\n${tapa}
    })
}


const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];
const wrappeds = wrappedGifts(foods);
wrappeds.forEach(item => console.log(item));


// filter 
const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];

const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

const numbers = [1,2,3,4,5,6,7,8,9,10];

const sumatoria = numeros.reduce((a, b) => a + b);
const factorial = numeros.reduce((a, b) => a * b);

console.log(numeros);
console.log(sumatoria);
console.log(factorial);

//some(or) every(and)

const positivos = nuemros.every(n => n > 0);
console.log(positivos);
const negativos = nuemros.every(n => n < 0);
console.log(negativos);

const ages = [20, 21, 25, 17, 18];
const todos_mayores = ages.some(n => n >= 18);
console.log(todos_mayores);
const todos_menores = ages.some(n => n < 18);
console.log(todos_menores);

const fruits = ['🥵', '🍉', '🥭', '🍌', '🍋']; 

const index_durazno = fruits.findIndex(fruit => fruit === '🍉🍉🍉');
console.log(fruits[index_durazno]);

fruits.
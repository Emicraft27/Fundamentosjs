// Funciones de Orden Superior
// Funciones que reciben otras funciones como parámetros

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const calculator = (a, b, callback) => {
    const result = callback(a, b);
    console.log(result);
};

calculator(15, 9, suma);
calculator(15, 9, resta);
calculator(15, 9, (a, b) => a * b);
calculator(15, 9, (a, b) => a / b);

// Trabajando con arrays de alimentos
const foods = ['tamales', 'pizza', 'chilaquiles', 'pozole', 'tacos', 'maruchan'];

// Verifica si cada alimento incluye la letra 'a'
foods.forEach(food => console.log(food.includes('a')));

// Convierte todos los alimentos a mayúsculas
const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

// Añade un emoji a cada alimento
const foodsEmojis = foods.map(food => food + '🥺');
console.log(foodsEmojis);

// Invierte los nombres de los alimentos
const sdoof = foods.map(food => food.split('').reverse().join(''));
console.log(sdoof);

// Trabajando con números
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cuadrado = numbers.map(num => num ** 2);
const cubos = numbers.map(num => num ** 3);
const mitad = numbers.map(num => num / 2);

console.log("Cuadrados:", cuadrado);
console.log("Cubos:", cubos);
console.log("Mitades:", mitad);

// Función para envolver regalos
function wrappedGifts(gifts) {
    return gifts.map(gift => {
        const tapa = '*'.repeat(gift.length + 2);
        return `${tapa}\n*${gift}*\n${tapa}`;
    });
}

const wrappeds = wrappedGifts(foods);
wrappeds.forEach(item => console.log(item));

// Filtrar alimentos que contienen 'z'
const containsZ = foods.filter(food => food.includes('z'));
console.log(containsZ);

// Filtrar alimentos que terminan en 's'
const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

// Sumar y calcular el factorial de números
const sumatoria = numbers.reduce((a, b) => a + b, 0);
const factorial = numbers.reduce((a, b) => a * b, 1);

console.log("Numeros:", numbers);
console.log("Sumatoria:", sumatoria);
console.log("Factorial:", factorial);

// Some y every
const positivos = numbers.every(n => n > 0);
console.log("Todos positivos:", positivos);
const negativos = numbers.every(n => n < 0);
console.log("Todos negativos:", negativos);

const ages = [20, 21, 25, 17, 18];
const todos_mayores = ages.some(n => n >= 18);
console.log("Hay mayores de edad:", todos_mayores);
const todos_menores = ages.some(n => n < 18);
console.log("Hay menores de edad:", todos_menores);

// Encontrar índice de un durazno (usando un emoji como ejemplo)
const fruits = ['🥵', '🍉', '🥭', '🍌', '🍋']; 
const index_durazno = fruits.findIndex(fruit => fruit === '🍉'); // Cambia '🍉🍉🍉' por '🍉'
console.log("Índice del durazno:", index_durazno);
console.log("Fruto encontrado:", fruits[index_durazno]);

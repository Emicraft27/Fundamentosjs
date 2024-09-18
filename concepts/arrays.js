// coleccion de objetos

// [1, 2, 3, 4]

const numbers = [1, 2, 3, 4];
console.log(numbers);
console.log(numbers[2]);
console.log(numbers[3]);
numbers[4] = "four";
numbers[0] = 10;
console.log(numbers);

//Colas arrays en JS
const queue = [];
console.log(queue);
//insertar al final push
queue.push(1);
console.log(queue);
queue.push(2);
console.log(queue);
queue.push(3);
console.log(queue);
//extraer al inicio shift
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);


//Pila Arrays en JS
const stack = [];
// insertar al final push
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// extraer al final pop
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//Iterar elementos de un array
const pairs = [2, 4, 6, 8, 10];
for (let i = 0; i < pairs.length; i++) {
    console.log(pairs[i]);
}

for (num of pairs) {
    console.log(num);
}

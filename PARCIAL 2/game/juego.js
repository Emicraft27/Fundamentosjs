const lienzo = document.querySelector("#lienzo");
const ctx = lienzo.getContext("2d");
ctx.font = '24px serif';

const snake = [{ x: 1, y: 1 }];
const food = {
    x: 0,
    y: 0,
    fadeIn: function() {
        // Generar nueva posición aleatoria para la comida dentro del rango
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.floor(Math.random() * 20) + 1;
    }
};

let hearts = []; // Arreglo para corazones que aparecerán
let direccion = 1; // Dirección inicial de la serpiente (1: derecha, 2: abajo, 3: izquierda, 4: arriba)
let score = 0; // Puntaje inicial
let gameLoop; // Variable para almacenar el intervalo del bucle del juego

// Función para verificar si la serpiente ha comido la comida
function eat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        snake.push({}); // Agregar un nuevo segmento a la serpiente
        hearts.push({ x: food.x, y: food.y }); // Agregar un nuevo corazón
        score++; // Incrementar el puntaje
        food.fadeIn(); // Generar nueva posición para la comida

        // El corazón desaparece después de 2 segundos
        setTimeout(() => {
            hearts.pop(); // Eliminar el último corazón
        }, 2000);
    }
}

// Función para mover la serpiente en la dirección actual
function nextMove() {
    const head = { x: snake[0].x, y: snake[0].y };

    // Mover la cabeza de la serpiente según la dirección
    if (direccion === 1) head.x++; // Derecha
    else if (direccion === 2) head.y++; // Abajo
    else if (direccion === 3) head.x--; // Izquierda
    else if (direccion === 4) head.y--; // Arriba

    // Ajustar la serpiente para que continúe al otro lado si llega al borde
    if (head.x > 29) head.x = 0;
    else if (head.x < 0) head.x = 29;
    if (head.y > 20) head.y = 1;
    else if (head.y < 1) head.y = 20;

    // Verificar colisión de la serpiente con su cuerpo
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver(); // Terminar el juego si hay colisión
            return;
        }
    }

    // Mover los segmentos de la serpiente
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

    // Actualizar la nueva cabeza
    snake[0] = head;
}

// Función para manejar el fin del juego
function gameOver() {
    clearInterval(gameLoop); // Detener el bucle del juego
    ctx.fillStyle = "yellow"; // Cambiar el color del texto del mensaje de fin
    ctx.fillText("Perdiste! Puntaje: " + score, 100, 200);
    ctx.fillText("Dale al botón y vuelve a intentar", 50, 240);
    document.getElementById("restartButton").style.display = "block"; // Mostrar botón de reinicio
}

// Función para reiniciar el juego
function restart() {
    snake.length = 1; // Reiniciar el tamaño de la serpiente
    snake[0] = { x: 1, y: 1 }; // Colocar la serpiente en su posición inicial
    hearts = []; // Limpiar los corazones
    score = 0; // Reiniciar el puntaje
    food.fadeIn(); // Generar nueva comida
    ctx.clearRect(0, 0, 600, 400); // Limpiar el canvas
    gameLoop = setInterval(gameLoopFunc, 100); // Reiniciar el bucle del juego
    document.getElementById("restartButton").style.display = "none"; // Ocultar botón de reinicio
}

// Función principal del juego que se ejecuta en cada ciclo
function gameLoopFunc() {
    ctx.clearRect(0, 0, 600, 400); // Limpiar el lienzo en cada frame
    nextMove(); // Mover la serpiente

    // Mostrar comida (emoji de chica)
    food.show = function() {
        ctx.fillText('👩🏻', this.x * 20, this.y * 20);
    };
    food.show();

    // Dibujar la serpiente (emoji de corazón)
    snake.forEach(s => {
        ctx.fillText('❤️', s.x * 20, s.y * 20);
    });

    // Dibujar los corazones (emoji de girasol)
    hearts.forEach(h => {
        ctx.fillText('🌻', h.x * 20, h.y * 20);
    });

    // Mostrar el puntaje en la esquina superior izquierda
    ctx.fillStyle = "white"; // Color del texto del puntaje
    ctx.fillText("Puntaje: " + score, 10, 30);

    eat(); // Verificar si la serpiente come
}

// Manejar la entrada del usuario para controlar la serpiente
function handleKeyDown(e) {
    if (e.key === "ArrowRight" && direccion !== 3) direccion = 1; // No puede ir a la izquierda
    else if (e.key === "ArrowDown" && direccion !== 4) direccion = 2; // No puede ir hacia arriba
    else if (e.key === "ArrowLeft" && direccion !== 1) direccion = 3; // No puede ir a la derecha
    else if (e.key === "ArrowUp" && direccion !== 2) direccion = 4; // No puede ir hacia abajo
}

// Iniciar el juego
food.fadeIn();
gameLoop = setInterval(gameLoopFunc, 100); // Configurar el bucle del juego
document.addEventListener('keydown', handleKeyDown); // Escuchar las teclas de flechas para mover la serpiente
document.getElementById("restartButton").addEventListener("click", restart); // Manejar el reinicio del juego

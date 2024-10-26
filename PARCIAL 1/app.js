const bola = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    switch(randomNumber) {
        case 0:
            message.innerText = "Le diste click!";
            break;
        case 1:
            message.innerText = "Moriste";
            break;
        case 2:
            message.innerText = "No te cansas?";
            break;
        case 3:
            message.innerText = "Te gusto?";
            break;
        case 4:
            message.innerText = "Me gusta Magnolia de Play boi carti";
            break;
        case 5:
            message.innerText = "Funao mejor alejate";
            break;
        case 6:
            message.innerText = "beautiful morning :3";
            break;
        case 7:
            message.innerText = "Sigue intentando!";
            break;
        default:
            message.innerText = "Intenta de nuevo!";
    }
}

bola.addEventListener('click', eightBall);

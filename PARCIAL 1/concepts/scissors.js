const btnPlay = document.getElementById('btnPlay');
const vidUser = document.getElementById('vidUser');
const divMaq = document.getElementById('divMaq');
const message = document.getElementById('message');

const play = () => {
    const choiceUser = prompt('Elije: piedra, papel o tijeras');
    const aleatorio = Math.floor(Math.random() * 3);
    let choiceMaq = '';

    switch(aleatorio) {
        case 0:
            choiceMaq = 'piedra';
            break;
        case 1:
            choiceMaq = 'papel';
            break;
        case 2:
            choiceMaq = 'tijeras';
            break;
    }

    vidUser.innerText = `Usuario: ${choiceUser}`;
    divMaq.innerText = `Máquina: ${choiceMaq}`;

    if (choiceUser === choiceMaq) {
        message.innerText = 'Empate!';
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        message.innerText = '¡Ganaste!';
    } else {
        message.innerText = 'Perdiste!';
    }
}

btnPlay.addEventListener('click', play);


let numerocartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numerocartas >14 || numerocartas <4 || numerocartas%2 !=0) {
    numerocartas = Number(prompt("Com quantas cartas deseja jogar? Por favor insira um número par entre 4 e 14!"))
}

let todascartas = [];
let card = {numero: 0, estado: 0};

while (todascartas.length < numerocartas) {
    var novacarta = getRandomIntInclusive(1, numerocartas/2);
    var contador = 0
    var repetida = 0
    while (contador < todascartas.length) {
        if (novacarta == todascartas[contador].numero) {
            repetida++;
        }
        contador++;
    }
    
    card = {numero: novacarta, estado: 0};

    if (repetida < 2) {
        todascartas.push(card);
    }
}

imprimircartas();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imprimircartas() {

    /*Limpa a tela */    
    const clear1 = document.querySelector(".linha1");
    clear1.innerHTML = "";
    const clear2 = document.querySelector(".linha2");
    clear2.innerHTML = "";

    /*Reimprime a tela com o jogo atualizado*/
    for (var i = 0; i < numerocartas; i++) {
        if (i < numerocartas/2) {

            if (todascartas[i].estado == 0) {
                clear1.innerHTML += `
                <div class="card" onclick="turncard(${i})">
                    <img src="image/front.png" class="back">
                </div>
                `
            }

            if (todascartas[i].estado == 1) {
                clear1.innerHTML += `
                <div class="card">
                    <img src="image/parrot${todascartas[i].numero}.gif" class="front">
                </div>
                `
            }

            if (todascartas[i].estado == 2) {
                clear1.innerHTML += `
                <div class="card">
                    <img src="image/parrot${todascartas[i].numero}.gif" class="front">
                </div>
                `
            }

        } else {
            if (todascartas[i].estado == 0) {
                clear2.innerHTML += `
                <div class="card" onclick="turncard(${i})">
                    <img src="image/front.png" class="back">
                </div>
                `
            }

            if (todascartas[i].estado == 1) {
                clear2.innerHTML += `
                <div class="card">
                    <img src="image/parrot${todascartas[i].numero}.gif" class="front">
                </div>
                `
            }

            if (todascartas[i].estado == 2) {
                clear2.innerHTML += `
                <div class="card">
                    <img src="image/parrot${todascartas[i].numero}.gif" class="front">
                </div>
                `
            }
        }
    }
}
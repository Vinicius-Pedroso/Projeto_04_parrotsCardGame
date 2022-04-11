/*Variáveis globais que vou usar em várias funções */
let cartasviradas = 0;
let eliminatedcards = 0;
let jogadas = 0;
let time = 0;
let todascartas = [];
let card = {numero: 0, estado: 0};

/*prompt inicial*/
let numerocartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numerocartas >14 || numerocartas <4 || numerocartas%2 !=0) {
    numerocartas = Number(prompt("Com quantas cartas deseja jogar? Por favor insira um número par entre 4 e 14!"))
}
/*Timer começando imediatamente depois do prompt*/
timer();

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


function turncard(idcard) {
    todascartas[idcard].estado = 1;
    cartasviradas++;
    jogadas++;

    imprimircartas();

    if (cartasviradas =2) {
        for (var j = 0; j < numerocartas; j++){
            if (todascartas[j].estado == 1 && j != idcard) {
                if (todascartas[j].numero == todascartas[idcard].numero){
                    todascartas[j].estado = 2;
                    todascartas[idcard].estado = 2;
                    eliminatedcards = eliminatedcards+2;
                } else {
                    todascartas[j].estado = 0;
                    todascartas[idcard].estado = 0;
                }
            }
        }

        setTimeout(function(){
            imprimircartas();
        }, 1000); 
        
        if (eliminatedcards == numerocartas){
            setTimeout(function(){
                alert("Você venceu em " +jogadas +" jogadas e levou " +time +" segundos para completar o jogo. Parabens!");
                var string = prompt("Você deseja jogar novamente?");
                if (string == "sim") {
                    alert("Bom jogo")
                    jogo ();
                }
                if (string == "não") {
                    alert("Espero que tenha se divertido!")
                }                
            }, 1000);
        }
    }
}

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

function timer(){
    setInterval(function(){
        if (eliminatedcards < numerocartas) {
            document.querySelector(".timerdiv").innerHTML = `
            <h2>${time}s</h2>
            `
            time++;
        } 
    }, 1000);
}

function jogo(){
    cartasviradas = 0;
    eliminatedcards = 0;
    jogadas = 0;
    time = 0;
    
    numerocartas = Number(prompt("Com quantas cartas deseja jogar?"));
    while (numerocartas >14 || numerocartas <4 || numerocartas%2 !=0) {
        numerocartas = Number(prompt("Com quantas cartas deseja jogar? Por favor insira um número par entre 4 e 14!"))
    }
    timer();
    
    todascartas = [];
    card = {numero: 0, estado: 0};
    
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
}
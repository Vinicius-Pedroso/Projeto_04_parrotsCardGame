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

/*parte que gera array com números aleatórios. Sei que existe a função sort, mas quis praticar while
lógica e outras coisas*/
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

/*Imprime as cartas para o usuário começar a interagir*/
imprimircartas();

/*função para virar uma carta, caso o total de cartas viradas sejam 2, compara se as cartas são as mesmas
caso não sejam, da 1 segundo de tempo antes de retornar as cartas virada para baixo
caso sejam, mantem as 2 cartas viradas e atualiza as cartas já eliminadas. Se o total de cartas eliminadas
se igualar o total de cartas, o jogo termina e oferece um novo jogo
Conta o número de jogadas também*/
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
        /*O intervalo de 1 segundo necessário para o caso de 2 jogadas erradas,
        visualizar a segunda carta, mas as vezes é inconsistente*/
        setTimeout(function(){
            imprimircartas();
        }, 1000); 
        
        /*final do jogo e proposta de um novo*/
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

/*gera os números aleatórios para o array de cartas*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*apaga a tela anterior e reimprime a tela com todos os valores atualizados*/
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

/*Conta o tempo de jogo*/
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

/*recomeça o jogo caso o usuario deseje*/
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
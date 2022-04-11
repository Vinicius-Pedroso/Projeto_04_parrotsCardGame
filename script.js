
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
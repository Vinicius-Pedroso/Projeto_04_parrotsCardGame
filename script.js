
let numerocartas = Number(prompt("Com quantas cartas deseja jogar?"));
while (numerocartas >14 || numerocartas <4 || numerocartas%2 !=0) {
    numerocartas = Number(prompt("Com quantas cartas deseja jogar? Por favor insira um número par entre 4 e 14!"))
}
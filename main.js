import { zerarIguais, CalcPontosJog, CalcPontosBot, ganhaJog } from './src/DefinirDados.js';

//define as matrizes que vao guardar os valores dos dados
let bot = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let jog = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
//define as variaveis que vao guardar os valores dos dados
let botAux = 0;
let jogAux = 0;
//define as variaveis que vao guardar os pontos dos jogadores
let pontoJog = 0;
let pontoJog1 = 0;
let pontoJog2 = 0;
let pontoJog3 = 0;
let pontoBot = 0;
let pontoBot1 = 0;
let pontoBot2 = 0;
let pontoBot3 = 0;


const btnJogDado = document.getElementById('jogDado');
btnJogDado.addEventListener('click',Jog);
const btnBotDado = document.getElementById('botDado');
btnBotDado.addEventListener('click',Bot);
const botoesBot = document.querySelectorAll(".tabelabot td")
for (let i=0;i<botoesBot.length;i++)
{
        botoesBot[i].addEventListener('click',function(){valorBot(botoesBot[i].id,botAux)});
}
const botoesJog = document.querySelectorAll(".tabelajog td")
for (let j=0;j<botoesJog.length;j++)
{
        botoesJog[j].addEventListener('click',function(){valorJog(botoesJog[j].id,jogAux)});
}


function Jog() { //funcao que define o valor do dado do player 1 aleatoriamente entre 1 e 6
    jogAux = Math.floor(Math.random() * 6) + 1;
    document.getElementById('jog1').innerText = jogAux
}
function Bot() { //funcao que define o valor do dado do player 2 aleatoriamente entre 1 e 6
    botAux = Math.floor(Math.random() * 6) + 1;
    document.getElementById('bot1').innerText = botAux
}


function valorBot(id, dado) { //ciclo de jogo do p2 em que é definido o valor na tabela do p2 e sao executadas as funções do ciclo
    //primeiramente define-se na tabela se obtendo a posição pelo ID e verificando se não há itens na posição desejada
    let linha = id.charAt(3);
    let coluna = id.charAt(5);
    if (bot[linha - 1][coluna - 1] == 0) {
        bot[linha - 1][coluna - 1] = dado;
    } else {
        return 0;
    }
    document.getElementById(id).innerText = dado; //define o valor na tabela
    zerarIguais(coluna-1,bot); //verifica se ha itens para ser zerados 
    Bot(); //aleatoriza o proximo dado
    CalcPontosBot(); //calcula os pontos do player 2 e os atualiza
    ganhaJog(); //verifica se o jogo acabou e avisa quem ganhou
}
function valorJog(id, dado) { //ciclo de jogo do p1 em que é definido o valor na tabela do p1 e sao executadas as funções do ciclo
    //primeiramente define-se na tabela se obtendo a posição pelo ID e verificando se não há itens na posição desejada
    let linha = id.charAt(3);
    let coluna = id.charAt(5);
    if (jog[linha - 1][coluna - 1] == 0) {
        jog[linha - 1][coluna - 1] = dado;
    } else {
        return 0;
    }
    document.getElementById(id).innerText = dado; //define o valor na tabela
    zerarIguais(coluna-1,jog); //verifica se ha itens para ser zerados
    Jog(); //aleatoriza o proximo dado
    CalcPontosJog(); //calcula os pontos do player 2 e os atualiza
    ganhaJog(); //verifica se o jogo acabou e avisa quem ganhou
}
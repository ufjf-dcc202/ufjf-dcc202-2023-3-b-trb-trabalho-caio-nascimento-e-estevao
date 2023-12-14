import { valorBot, valorJog } from './src/DefinirDados.js';
//cria variaveis de verificação de ciclo de jogo
//fazendo com que o jogo comece com o primeiro player
let botJogou = true;
let jogJogou = false;
let dadoJog = 0;
let dadoBot = 0;

//define botoes de jogar dado e o seu clique
const btnJogDado = document.getElementById('jogDado');
btnJogDado.addEventListener('click',JogarDadoJog);
const btnBotDado = document.getElementById('botDado');
btnBotDado.addEventListener('click',JogarDadoBot);

//define os itens da tabela e seus cliques
const botoesBot = document.querySelectorAll(".tabelabot td")
const botoesJog = document.querySelectorAll(".tabelajog td")
for (let i=0;i<botoesBot.length;i++)
{
        botoesBot[i].addEventListener('click',function(){cicloBot(botoesBot[i].id,dadoBot)});
}
for (let j=0;j<botoesJog.length;j++)
{
        botoesJog[j].addEventListener('click',function(){cicloJog(botoesJog[j].id,dadoJog)});
}

//funcoes de dados
//essas funcoes randomizam os dados entre 1 e 6 e os definem na tela e na variavel
function JogarDadoJog(){
    dadoJog = Math.floor(Math.random() * 6) + 1;
    document.getElementById('jog1').innerText = dadoJog;
}
function JogarDadoBot(){
    dadoBot = Math.floor(Math.random() * 6) + 1;
    document.getElementById('bot1').innerText = dadoBot;
}

//funcoes de ciclo de jogo
//essas funcoes verificam qual jogador deve jogar
//assim o ciclo deve ser sempre seguido, impedindo que um player jogue duas vezes diretamente
function cicloBot(id,dado){
    if (!botJogou) //verifica se a ultima jogada foi do segundo player
    {
        valorBot(id,dado); //executa o ciclo de definicoes e calculos do segundo player
        JogarDadoBot(); //joga o dado do segundo player
        botJogou = true; //define que o segundo player jogou
        jogJogou = false; //define que o primeiro player nao jogou
    }
    else{
        return 0; //retorna 0 caso o segundo player tente jogar duas vezes seguidas
    }
}

function cicloJog(id,dado){
    if (!jogJogou) //verifica se a ultima jogada foi do primeiro player
    {
        valorJog(id,dado); //executa o ciclo de definicoes e calculos do primeiro player
        JogarDadoJog(); //joga o dado do primeiro player
        jogJogou = true; //define que o primeiro player jogou
        botJogou = false; //define que o segundo player nao jogou
    }
    else{
        return 0; //retorna 0 caso o primeiro player tente jogar duas vezes seguidas
    }
}
import { valorBot, valorJog } from './src/DefinirDados.js';

let botJogou = true;
let jogJogou = false;
let dadoJog = 0;
let dadoBot = 0;



const btnJogDado = document.getElementById('jogDado');
btnJogDado.addEventListener('click',JogarDadoJog);
const btnBotDado = document.getElementById('botDado');
btnBotDado.addEventListener('click',JogarDadoBot);
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

function JogarDadoJog(){
    dadoJog = Math.floor(Math.random() * 6) + 1;
    document.getElementById('jog1').innerText = dadoJog;
}
function JogarDadoBot(){
    dadoBot = Math.floor(Math.random() * 6) + 1;
    document.getElementById('bot1').innerText = dadoBot;
}

function cicloBot(id,dado){
    if (!botJogou)
    {
        valorBot(id,dado);
        JogarDadoBot();
        botJogou = true;
        jogJogou = false;
    }
    else{
        return 0;
    }
}

function cicloJog(id,dado){
    if (!jogJogou)
    {
        valorJog(id,dado);
        JogarDadoJog();
        jogJogou = true;
        botJogou = false;
    }
    else{
        return 0;
    }
}
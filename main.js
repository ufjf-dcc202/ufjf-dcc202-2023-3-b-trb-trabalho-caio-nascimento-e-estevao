//MAIN JS NAO FOI USADO POR FALTA DE TEMPO
//CODIGO SE ENCONTRA NO HTML

import { jogarDado, definirDadoTabela } from "/src/DefinirDados.js";
let jogdado = 0;
let botdado = 0;
let jogtab = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do jogador dentro da tabela
let bottab = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do bot dentro da tabela
//const btnJogar = document.querySelector("#jogadorbotao");
//btnJogar.addEventListener('click', jogarDado(jogdado));
jogdado = jogarDado(jogdado);




function defineValor(tab,id, dado) {
        let coluna = (id.charAt(5)-1);
        if (definirDadoTabela(tab, coluna, dado))
        {
                atualizaTela(tab);
                return;
        }
        else{
                alert("Coluna cheia. Por favor, escolha outra coluna.");
        };
}

function atualizaTela(tab) {
        for (let i=0;i<3;i++)
        {
                for (let j=0;j<3;j++)
                {
                        if (tab[i][j] != 0)
                        {
                                let id = "jog"+(i+1)+"x"+(j+1);
                                document.getElementById(id).innerText = tab[i][j];
                        }
                }
        }
        // colocar codigo que deleta o valor do dado jogado aqui
}

function jogadaNaTabela(botao){
        if (botao.match(/jog(.*)/))
        {
                defineValor(jogtab,botao,jogdado);
        }
        else if (botao.match(/bot(.*)/))
        {
                defineValor(bottab,botao,botdado);
        }
}


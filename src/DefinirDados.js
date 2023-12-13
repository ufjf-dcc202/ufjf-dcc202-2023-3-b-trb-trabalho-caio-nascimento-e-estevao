function CalcPontosJog()
{
    //calcula os pontos de cada coluna do jogador 1 e os atualiza
    pontoJog1=pontosJog(0); 
    pontoJog2=pontosJog(1);
    pontoJog3=pontosJog(2);
    pontoJog=pontoJog1+pontoJog2+pontoJog3; //calcula a pontuação total do jogador 1 e as atualiza
    document.getElementById('totalJog').innerText = pontoJog;
}

function pontosJog(col){
    let pontoJogCol = 0;
    //percorre a coluna e verifica se há itens repetidos
    //desse modo, a soma é feita corretamente na variavel definida no inicio da função
    for (let i = 0; i < 3; i++) {
        let valorrepetido = jog[i][col];
        let cont = 0;
        for (let j = 0; j < 3; j++) {
            if (valorrepetido === jog[j][col]) {
                cont++;
            }
        }
        pontoJogCol = pontoJogCol + jog[i][col] * cont;
    }
    if (pontoJogCol == 0){
        return 0; // retorna 0 se não há pontos somados e nao define nada na tabela de resultados na página
    }
    let idPreencher = 'jr' + (col+1);
    document.getElementById(idPreencher).innerText = pontoJogCol; // define a pontuação na coluna correta
    return pontoJogCol; //retorna a pontuação da coluna calculada
}

function CalcPontosBot()
{
    //calcula os pontos de cada coluna do jogador 2 e os atualiza
    pontoBot1=pontosBot(0);
    pontoBot2=pontosBot(1);
    pontoBot3=pontosBot(2);
    pontoBot=pontoBot1+pontoBot2+pontoBot3; //calcula a pontuação total do jogador 2 e as atualiza  
    document.getElementById('totalBot').innerText = pontoBot;
}

function pontosBot(col){
    //percorre a coluna e verifica se há itens repetidos
    //desse modo, a soma é feita corretamente na variavel definida no inicio da função
    let pontoBotCol = 0;
    for (let i = 0; i < 3; i++) {
        let valorrepetido = bot[i][col];
        let cont = 0;
        for (let j = 0; j < 3; j++) {
            if (valorrepetido === bot[j][col]) {
                cont++;
            }
        }
        pontoBotCol = pontoBotCol + bot[i][col] * cont;
    }
    if (pontoBotCol == 0){
        return 0; // retorna 0 se não há pontos somados e nao define nada na tabela de resultados na página
    }
    let idPreencher = 'br' + (col+1);
    document.getElementById(idPreencher).innerText = pontoBotCol; // define a pontuação na coluna correta
    return pontoBotCol; // retorna a pontuação da coluna calculada

function ganhaJog() {
    //faz a contagem de quantos itens estão na tabela
    let contJog = 0;
    let contBot = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (jog[i][j] !== 0) {
                contJog++;
            }
            if (bot[i][j] !== 0) {
                contBot++;
            }
        }
    }
    if ((contJog === 9) || (contBot === 9)) {
        //se uma tabela estiver cheia o jogo finaliza e é verificado quem ganhou
        setTimeout(function() { // aqui há um delay para que a página atualize as pontuações antes de verificar quem ganhou
            jogPontVerif();
        }, 500);
    }

function jogPontVerif() {
    //verifica quem ganhou e avisa na tela
    if (pontoJog > pontoBot) {
        alert("Jogador 1 Ganhou");
    } else if (pontoJog < pontoBot) {
        alert("Jogador 2 Ganhou");
    } else {
        alert("Empate");
    }
}

function zerarIguais(col,tipo){
    //percorre e busca se há valores iguais em uma coluna (valores diferentes de 0)
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (jog[i][col] !== 0 && (jog[i][col] == bot[j][col])){
                valorComp = jog[i][col];
                //se acharmos um valor igual, percorremos a coluna novamente e zeramos os valores iguais
                //para zerar, usamos uma variavel que terá o valor a se buscar nas colunas
                //quando acharmos esses valores, zeramos-o na matriz e o apagamos da tabela
                for (let k=0;k<3;k++){
                    if (jog[k][col] == valorComp){
                        //aqui ele verifica o tipo e elimina apenas a coluna do oponente;
                        if (tipo===bot)
                        {
                            jog[k][col] = 0;
                            let idJogApagar = 'jog'+(k+1)+'x'+(col+1);
                            document.getElementById(idJogApagar).innerText = '';
                        }
                    }
                    if (bot[k][col] == valorComp){
                        //aqui ele verifica o tipo e elimina apenas a coluna do oponente;
                        if (tipo===jog)
                        {
                            bot[k][col] = 0;
                            let idBotApagar = 'bot'+(k+1)+'x'+(col+1);
                            document.getElementById(idBotApagar).innerText = '';
                        }
                    }
                }
            }
        }
    }
}
export {CalcPontosJog, CalcPontosBot, ganhaJog, jogPontVerif, zerarIguais};
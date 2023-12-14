
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

//define as variaveis que vao guardar os pontos dos jogadores
let pontoJog = [0,0,0,0];
let pontoBot = [0,0,0,0];



//funcoes de ciclo de jogo
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
    CalcPontosBot(); //calcula os pontos do player 2 e os atualiza
    return ganhaJog(); //verifica se o jogo acabou e avisa quem ganhou e retorna se o jogo acabou
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
    CalcPontosJog(); //calcula os pontos do player 2 e os atualiza
    return ganhaJog(); //verifica se o jogo acabou e avisa quem ganhou e retorna se o jogo acabou
}

//funcoes para calcular a pontuacao do jogo
function CalcPontosJog() //calcula todas as pontuações do primeiro jogador
{
    pontoJog[3]=0; //zera a pontuação total do jogador para que não haja erros no calculo total
    for (let i=0;i<3;i++){
        pontoJog[i]=pontosJog(i);   //iguala cada pontuacao da coluna a um item no vetor
        pontoJog[3]+=pontoJog[i];   //soma os itens do vetor para obter a pontuação total
    }
    document.getElementById('totalJog').innerText = pontoJog[3];    //define a pontuação total na tabela
}

function pontosJog(col){ //calcula a pontuação de uma coluna do primeiro jogador e o define na tabela
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

function CalcPontosBot() //calcula todas as pontuações do segundo jogador
{
    pontoBot[3]=0;  //zera a pontuação total do jogador para que não haja erros no calculo total
    for (let i=0;i<3;i++){
        pontoBot[i]=pontosBot(i);   //iguala cada pontuacao da coluna a um item no vetor
        pontoBot[3]+=pontoBot[i];   //soma os itens do vetor para obter a pontuação total
    } 
    document.getElementById('totalBot').innerText = pontoBot[3];    //define a pontuação total na tabela
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
}

//funcao para zerar itens em colunas que sejam iguais ao do oponente
function zerarIguais(col,tipo){
    //percorre e busca se há valores iguais em uma coluna (valores diferentes de 0)
    for (let i=0;i<3;i++){
        for (let j=0;j<3;j++){
            if (jog[i][col] !== 0 && (jog[i][col] == bot[j][col])){
                let valorComp = jog[i][col];
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

//funcoes de finalizacao do jogo
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
        return true; //retorna true se o jogo acabou
    }
    else{
        return false; //retorna false se o jogo não acabou
    }
}

function jogPontVerif() {
    //verifica quem ganhou e avisa na tela
    if (pontoJog[3] > pontoBot[3]) {
        alert("Jogador 1 Ganhou");
    } else if (pontoJog[3] < pontoBot[3]) {
        alert("Jogador 2 Ganhou");
    } else {
        alert("Empate");
    }
}


export {valorBot, valorJog };

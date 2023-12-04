let jog1 = 0;
let jog2 = 0;
let tab1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do jogador 1 dentro da tabela
let tab2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do jogador 2 dentro da tabela

function aleatorio1e6() {
    return Math.floor(Math.random() * 6) + 1;
}

function jogarDado(jog) {
    jog = aleatorio1e6();
    return jog;
}

function definirDadoTabela(tab, posJtab, jog) {
    let posItab = 0;
    let definiu = false;
    while (definiu == false) {
        if (tab[posItab][posJtab] == 0) {
            tab[posItab][posJtab] = jog;
            definiu = true;
            jog = 0;
            return definiu;
        } else {
            posItab++;
            if (posItab == 3) {
                definiu = false;
                return definiu;
            }
        }
    }
    // retorna definiu verdadeiro se a coluna nao estiver cheia
}
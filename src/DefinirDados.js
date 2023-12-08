

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

function pontuacao(tab,posJtab)
{
    let pontos = 0;
    for (let i = 0; i < 3; i++) {
        let quant = tab[i][posJtab];
        for (let i = 0; i < 3; i++){
            let mult=0;
            if (quant=tab[i][posJtab])
            {
                mult++;
            }
            pontos = pontos + quant*mult;
        }
    }
    return pontos;
}

export {jogarDado,definirDadoTabela,pontuacao}
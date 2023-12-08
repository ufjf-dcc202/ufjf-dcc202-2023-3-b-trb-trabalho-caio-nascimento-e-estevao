//
//        function valor(id) {
//            let dado = Math.floor(Math.random() * 6) + 1;
//            console.log(id)
//
//           document.getElementById(id).innerText = dado
//
//        }
//
//
//export{valor}
//
//<script>
//
//let bot1x1 = 0;
//let bot1x2 = 0;
//let bot1x3 = 0;
//let bot2x1 = 0;
//let bot2x2 = 0;
//let bot2x3 = 0;
//let bot3x1 = 0;
//let bot3x2 = 0;
//let bot3x3 = 0;
//
//let jog1x1 = 0;
//let jog1x2 = 0;
//let jog1x3 = 0;
//let jog2x1 = 0;
//let jog2x2 = 0;
//let jog2x3 = 0;
//let jog3x1 = 0;
//let jog3x2 = 0;
//let jog3x3 = 0;
//
//let botAux = 0;
//let jogAux = 0;
//
//let m1 = 0;
//let m2 = 0;
//
//function valorBot(id, dado) {
//
//    
//
//    if(id == 'bot1x1'){
//        
//        if (bot1x1 == 0){
//            bot1x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot1x2'){
//
//        if (bot1x2 == 0){
//            bot1x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot1x3'){
//
//        if (bot1x3 == 0){
//            bot1x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot2x1'){
//
//        if (bot2x1 == 0){
//            bot2x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot2x2'){
//
//        if (bot2x2 == 0){
//            bot2x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot2x3'){
//
//        if (bot2x3 == 0){
//            bot2x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot3x1'){
//
//        if (bot3x1 == 0){
//            bot3x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'bot3x2'){
//
//        if (bot3x2 == 0){
//            bot3x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if (id == 'bot3x3'){
//
//        if (bot3x3 == 0){
//            bot3x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    };
//
//    
//
//
//    console.log(id)
//
//    document.getElementById(id).innerText = dado;
//}
//
//function valorJog(id, dado) {
//
//    if(id == 'jog1x1'){
//        
//        if (jog1x1 == 0){
//            jog1x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog1x2'){
//
//        if (jog1x2 == 0){
//            jog1x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog1x3'){
//
//        if (jog1x3 == 0){
//            jog1x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog2x1'){
//
//        if (jog2x1 == 0){
//            jog2x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog2x2'){
//
//        if (jog2x2 == 0){
//            jog2x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog2x3'){
//
//        if (jog2x3 == 0){
//            jog2x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog3x1'){
//
//        if (jog3x1 == 0){
//            jog3x1 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if(id == 'jog3x2'){
//
//        if (jog3x2 == 0){
//            jog3x2 = dado;
//        }
//        else{
//            return 0;
//        }
//    }
//    else if (id == 'jog3x3'){
//
//        if (jog3x3 == 0){
//            jog3x3 = dado;
//        }
//        else{
//            return 0;
//        }
//    };
//
//
//    console.log(id)
//
//    document.getElementById(id).innerText = dado
//}
//
//function Jog() {
//    jogAux = Math.floor(Math.random() * 6) + 1;
//    document.getElementById('jog').innerText = jogAux
//}
//
//function Bot() {
//    botAux = Math.floor(Math.random() * 6) + 1;
//    document.getElementById('bot').innerText = botAux
//}
//
//function botIA(){
//
//    let m1 = Math.floor(Math.random() * 3) + 1;
//    let m2 = Math.floor(Math.random() * 3) + 1;
//}
//
//function marcacaoBot(id) {
//    while(true){
//
//        if(matriz[m1][m2] == 0){
//            valorBot(id, Bot());
//        }
//        else{
//
//        }
//    }
//}
//</script>

import { jogarDado, definirDadoTabela } from "/src/DefinirDados.js";
let jog1 = 0;
let jog2 = 0;
let tab1 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do jogador 1 dentro da tabela
let tab2 = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]; // dados do jogador 2 dentro da tabela
function valor(tab,id, dado) {
        let coluna = (id.charAt(5)-1);
        definirDadoTabela(tab, coluna, dado);
}

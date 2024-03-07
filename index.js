let nomes = []
let continuar = true;
let posicaDoArray = 0;

while(continuar){
    let nomeInserido = prompt("Insira seu nome");
    nomes[posicaDoArray] = nomeInserido;

    let desejaContinuar = prompt("Insira 1 caso deseje adicionar um novo nome")
    if(desejaContinuar != '1'){
        continuar = false;
        continue;
    }
    posicaDoArray++;
}
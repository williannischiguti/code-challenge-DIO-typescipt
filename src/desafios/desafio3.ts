/**
    Nos casos de uso do document.getElemtentByID(), o elemento é possivelmente nulo e os ifs são necessários para
    garantir que o código vai funcionar da melhor forma. A exclamação no final da declaração da variável botaoLimpar
    indica que queremos dizer ao programa que aquele campo não é nulo.
 */

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement; // variável que irá receber o input do usuário
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0 // variável que irá servir como acumulador

limparSaldo() // função que garante inicialmente que o saldo começa com 0 e também limpa o saldo, ou seja, volta para 0

/**
    A função somarAoSaldo irá acumular as somas na variável saldoTotal e a variável campoSaldo será convertida para
    string e em seguida chamará a função limparCampoSoma() que faz com que, ao clicar no botão "Atualizar saldo", o
    campo "Valor a ser adicionado:" (correspondente a variável "soma") seja limpo e possa receber novo valor.
 */
function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() { // limpa o campo soma para poder receber novo valor.
    soma.value = "";
}

function limparSaldo() { // faz com que o saldo volte a ficar com valor 0.
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => { // ocorre no evento de clique.
        somarAoSaldo(Number(soma.value)); // chama a função somarAoSaldo e passa o valor (número) digitado pelo usuário.
    });
}
botaoLimpar.addEventListener('click', () => { // ocorre no evento de clique.
    limparSaldo(); // chama a função limparSaldo que retorna o valor de saldo para 0.
});

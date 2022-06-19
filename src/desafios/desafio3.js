/**
    Nos casos de uso do document.getElemtentByID(), o elemento é possivelmente nulo e os ifs são necessários para
    garantir que o código vai funcionar da melhor forma. A exclamação no final da declaração da variável botaoLimpar
    indica que queremos dizer ao programa que aquele campo não é nulo.
 */
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma'); // variável que irá receber o input do usuário
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0; // variável que irá servir como acumulador
limparSaldo(); // função que garante inicialmente que o saldo começa com 0 e também limpa o saldo, ou seja, volta para 0
/**
    A função somarAoSaldo irá acumular as somas na variável saldoTotal e a variável campoSaldo será convertida para
    string e em seguida chamará a função limparCampoSoma() que faz com que, ao clicar no botão "Atualizar saldo", o
    campo "Valor a ser adicionado:" (correspondente a variável "soma") seja limpo e possa receber novo valor.
 */
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value)); // chama a função somarAoSaldo e passa o valor (número) digitado pelo usuário.
    });
}
botaoLimpar.addEventListener('click', function () {
    limparSaldo(); // chama a função limparSaldo que retorna o valor de saldo para 0.
});

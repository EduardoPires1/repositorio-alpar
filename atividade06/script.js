class ContaBancaria {
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return true;
        }
        return false;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
}

const conta = new ContaBancaria();

document.getElementById('depositBtn').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('amount').value);
    if (!isNaN(valor)) {
        if (conta.depositar(valor)) {
            atualizarSaldo(conta.saldo);
        } else {
            alert('Por favor, insira um valor válido para depósito.');
        }
    } else {
        alert('Por favor, insira um valor numérico válido.');
    }
});

document.getElementById('saqueBtn').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('amount').value);
    if (!isNaN(valor)) {
        if (conta.sacar(valor)) {
            atualizarSaldo(conta.saldo);
        } else {
            alert('Saldo insuficiente ou valor inválido para saque.');
        }
    } else {
        alert('Por favor, insira um valor numérico válido.');
    }
});

function atualizarSaldo(saldo) {
    document.getElementById('balance').innerText = `Saldo: R$ ${saldo.toFixed(2)}`;
}

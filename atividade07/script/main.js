document.addEventListener('DOMContentLoaded', function () {
    function alternarEstado(comodo) {
        const estadoAtualElement = document.getElementById(`${comodo}-status`);
        const estadoAtual = estadoAtualElement.textContent.split(': ')[1].toLowerCase();
        const novoEstado = estadoAtual === 'ligada' ? 'desligada' : 'ligada';
        controleIluminacao.alterarEstado(comodo, novoEstado);
        mostrarMensagemEstado(comodo, novoEstado);
    }

    function mostrarMensagemEstado(comodo, estado) {
        const mensagem = `A lâmpada da ${comodo} está ${estado}.`;
        alert(mensagem);
    }

    
    document.getElementById('sala-ligar-btn').addEventListener('click', function () {
        document.getElementById('salaLigada').classList.remove('escondido');
        document.getElementById('salaDesligada').classList.add('escondido');
        mostrarMensagemEstado('sala', 'ligada');
    });

    document.getElementById('sala-desligar-btn').addEventListener('click', function () {
        document.getElementById('salaDesligada').classList.remove('escondido');
        document.getElementById('salaLigada').classList.add('escondido');
        mostrarMensagemEstado('sala', 'desligada'); 
    });

    document.getElementById('cozinha-ligar-btn').addEventListener('click', function () {
        document.getElementById('cozinhaLigada').classList.remove('escondido');
        document.getElementById('cozinhaDesligada').classList.add('escondido');
        mostrarMensagemEstado('cozinha', 'ligada');
    });

    document.getElementById('cozinha-desligar-btn').addEventListener('click', function () {
        document.getElementById('cozinhaDesligada').classList.remove('escondido');
        document.getElementById('cozinhaLigada').classList.add('escondido');
        mostrarMensagemEstado('cozinha', 'desligada'); 
    });

    document.getElementById('quarto-ligar-btn').addEventListener('click', function () {
        document.getElementById('quartoLigada').classList.remove('escondido');
        document.getElementById('quartoDesligada').classList.add('escondido');
        mostrarMensagemEstado('quarto', 'ligada');
    });

    document.getElementById('quarto-desligar-btn').addEventListener('click', function () {
        document.getElementById('quartoDesligada').classList.remove('escondido');
        document.getElementById('quartoLigada').classList.add('escondido');
        mostrarMensagemEstado('quarto', 'desligada');
    });

    document.getElementById('banheiro-ligar-btn').addEventListener('click', function () {
        document.getElementById('banheiroLigada').classList.remove('escondido');
        document.getElementById('banheiroDesligada').classList.add('escondido');
        mostrarMensagemEstado('banheiro', 'ligada');
    });

    document.getElementById('banheiro-desligar-btn').addEventListener('click', function () {
        document.getElementById('banheiroDesligada').classList.remove('escondido');
        document.getElementById('banheiroLigada').classList.add('escondido');
        mostrarMensagemEstado('banheiro', 'desligada');
    });
    
});

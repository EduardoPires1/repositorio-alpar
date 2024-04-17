class ControleIluminacao {
    constructor() {
        if (ControleIluminacao.instance) {
            return ControleIluminacao.instance;
        }
        ControleIluminacao.instances = this;
        this.observadores = []
        this.light = {}
    }

    adicionarObservador(observador) {
        this.observadores.push(observador);
    }

    notificarObservadores() {
        this.observadores.forEach(observador => observador.update(this.light));
    }

    alterarEstado(comodo) {
        if (this.light[comodo]) {
            this.light[comodo] = false;
        } else {
            this.light[comodo] = true
        }
        this.notificarObservadores();
        
    }
}

class lightStatus {
    constructor(comodo) {
        this.comodo = comodo;
        this.statusElement = document.getElementById(`${comodo}Status`);
    }

    update(light) {
        const status = light[this.comodo] ? "Ligado" : "Desligado";
        this.statusElement.innerText = `Status: ${status}`;
    }
}

const controleIluminacao = new ControleIluminacao();

controleIluminacao.adicionarObservador(new Observador('sala'));
controleIluminacao.adicionarObservador(new Observador('cozinha'));
controleIluminacao.adicionarObservador(new Observador('quarto'));
controleIluminacao.adicionarObservador(new Observador('banheiro'));

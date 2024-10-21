class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para atacar, baseado no tipo do herói
    atacar() {
        let ataque = '';

        // Definir o ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'fez um ataque desconhecido';
                break;
        }

        return `${this.nome} o ${this.tipo} atacou usando ${ataque}.`;
    }
}

// Criando instâncias com diferentes tipos
const mago = new Hero('Gandalf', 300, 'mago');
const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
const monge = new Hero('Shaolin', 45, 'monge');
const ninja = new Hero('Hanzo', 35, 'ninja');

// Testando o método atacar
console.log(mago.atacar());     
console.log(guerreiro.atacar()); 
console.log(monge.atacar());    
console.log(ninja.atacar());     
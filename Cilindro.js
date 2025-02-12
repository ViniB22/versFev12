export default class Cillindro {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularVolume() {
        return Math.PI * (this.raio ^ 2) * this.altura;
    }

    calcularAreaTotal() {
        return (2 * (Math.PI * (this.raio ^ 2)) + 
                2 * (Math.PI * this.raio * this.altura));
    }
}
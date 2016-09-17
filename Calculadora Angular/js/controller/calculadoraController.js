
angular.module('calc')
    .controller('calculadoraController', function () {
        this.resultado = 0;

        this.soma = function () {

            this.resultado = this.numero1 + this.numero2;
            this.zero();
        }
        this.subtracao = function () {
            this.resultado = this.numero1 - this.numero2;
            this.zero();

        }
        this.divisao = function () {
            this.resultado = this.numero1 / this.numero2;
            this.zero();
        }
        this.multiplicacao = function () {
            this.resultado = this.numero1 * this.numero2;
            this.zero();
        }
        
    });
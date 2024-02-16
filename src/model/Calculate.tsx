/**
 * class Calculator
 */
export class Calculate {
    // Variáveis
    // Variables
    private value: string;
    private total: string;
    private error: string;

    constructor() {
        // Iniciar variáveis
        // Initialize variables
        this.value = '';
        this.total = '0';
        this.error = '';
    }

    // Definir valor
    // Set value
    setValue(val: string) {
        // Máximo de 16 dígitos
        // Maximum 16 digits!
        if(this.value.length <= 16) {
            this.value += val;
        }
    }

    // Obter valor
    // Get value
    getValue() {
        this.value = this.getTestNumber();
        this.value = this.getTestSum();
        this.value = this.getTestSubtract();
        this.value = this.getTestMultiply();
        this.value = this.getTestDivision();
        this.value = this.getTestPoint();
        return this.value;
    }

    // Testa número recebido
    // Test received number
    getTestNumber() {
        // Obter número pela posição da string
        // Get number by string position
        let v0 = this.value.indexOf('0');
        let v1 = this.value.indexOf('1');
        let v2 = this.value.indexOf('2');
        let v3 = this.value.indexOf('3');
        let v4 = this.value.indexOf('4');
        let v5 = this.value.indexOf('5');
        let v6 = this.value.indexOf('6');
        let v7 = this.value.indexOf('7');
        let v8 = this.value.indexOf('8');
        let v9 = this.value.indexOf('9');

        // Se iniciar com dois zeros é colocado apenas um zero.
        // Testa se número vem depois de zero, se sim coloca zero seguido de ponto antes do número
        // If it starts with two zeros, only one zero is placed.
        // Tests whether the number comes after zero, if so, place zero followed by a period before the number
        if(this.value[0] + this.value[0] === '00') {
            this.value = this.value.replace(this.value[0] + this.value[0], '0');
        }
        if(this.value[v0] + this.value[v1]) {
            this.value = this.value.replace(this.value[v0] + this.value[v1], '0.1');
        }
        if(this.value[v0] + this.value[v2]) {
            this.value = this.value.replace(this.value[v0] + this.value[v2], '0.2');
        }
        if(this.value[v0] + this.value[v3]) {
            this.value = this.value.replace(this.value[v0] + this.value[v3], '0.3');
        }
        if(this.value[v0] + this.value[v4]) {
            this.value = this.value.replace(this.value[v0] + this.value[v4], '0.4');
        }
        if(this.value[v0] + this.value[v5]) {
            this.value = this.value.replace(this.value[v0] + this.value[v5], '0.5');
        }
        if(this.value[v0] + this.value[v6]) {
            this.value = this.value.replace(this.value[v0] + this.value[v6], '0.6');
        }
        if(this.value[v0] + this.value[v7]) {
            this.value = this.value.replace(this.value[v0] + this.value[v7], '0.7');
        }
        if(this.value[v0] + this.value[v8]) {
            this.value = this.value.replace(this.value[v0] + this.value[v8], '0.8');
        }
        if(this.value[v0] + this.value[v9]) {
            this.value = this.value.replace(this.value[v0] + this.value[v9], '0.9');
        }
        // Variável valor recebe alterações e retorna o valor
        // Variable value receives changes and returns the value
        this.value = this.value;
        return this.value;
    }

    // Testa sinal de '+'
    // Test '+' sign
    getTestSum() {
        // Obter sinal pela posição da string
        // Get signal by string position
        let v1 = this.value.indexOf('+');
        let v2 = this.value.indexOf('-');
        let v3 = this.value.indexOf('x');
        let v4 = this.value.indexOf('/');
        let v5 = this.value.indexOf('.');

        // Testa se inicia com sinal, se sim coloca vazio
        // Test starts with sign, if yes, it leaves empty
        if (this.value[0] === '+') {
            this.value = this.value.replace(this.value[0], '');
        }

        // O teste combina sinais e se hover a ocorrência deles retorna o primeiro sinal escolhido; pois entende que houve erro.
        // The test combines signals and if their occurrence hovers, it returns the first chosen signal; because he understands that there was an error.
        if (this.value[v1] + this.value[v1]
            || this.value[v1] + this.value[v2]
            || this.value[v1] + this.value[v3]
            || this.value[v1] + this.value[v4]
            || this.value[v1] + this.value[v5]) {
            this.value = this.value
                .replace(this.value[v1] + this.value[v1], '+')
                .replace(this.value[v1] + this.value[v2], '+')
                .replace(this.value[v1] + this.value[v3], '+')
                .replace(this.value[v1] + this.value[v4], '+')
                .replace(this.value[v1] + this.value[v5], '+');
        }
        return this.value;
    }

    // Testa sinal de '-'
    // Test '-' sign
    getTestSubtract() {
        // Obter sinal pela posição da string
        // Get signal by string position
        let v1 = this.value.indexOf('+');
        let v2 = this.value.indexOf('-');
        let v3 = this.value.indexOf('x');
        let v4 = this.value.indexOf('/');
        let v5 = this.value.indexOf('.');

        // Testa se inicia com sinal, se sim coloca vazio
        // Test starts with sign, if yes, it leaves empty
        if (this.value[0] === '-') {
            this.value = this.value.replace(this.value[0], '');
        }

        // O teste combina sinais e se hover a ocorrência deles retorna o primeiro sinal escolhido; pois entende que houve erro.
        // The test combines signals and if their occurrence hovers, it returns the first chosen signal; because he understands that there was an error.
        if (this.value[v2] + this.value[v2]
            || this.value[v2] + this.value[v1]
            || this.value[v2] + this.value[v3]
            || this.value[v2] + this.value[v4]
            || this.value[v2] + this.value[v5]) {
            this.value = this.value
                .replace(this.value[v2] + this.value[v2], '-')
                .replace(this.value[v2] + this.value[v1], '-')
                .replace(this.value[v2] + this.value[v3], '-')
                .replace(this.value[v2] + this.value[v4], '-')
                .replace(this.value[v2] + this.value[v5], '-');
        }
        return this.value;
    }

    // Testa sinal de 'x'
    // Test sign of 'x'
    getTestMultiply() {
        // Obter sinal pela posição da string
        // Get signal by string position
        let v1 = this.value.indexOf('+');
        let v2 = this.value.indexOf('-');
        let v3 = this.value.indexOf('x');
        let v4 = this.value.indexOf('/');
        let v5 = this.value.indexOf('.');

        // Testa se inicia com sinal, se sim coloca vazio
        // Test starts with sign, if yes, it leaves empty
        if (this.value[0] === 'x') {
            this.value = this.value.replace(this.value[0], '');
        }

        // O teste combina sinais e se hover a ocorrência deles retorna o primeiro sinal escolhido; pois entende que houve erro.
        // The test combines signals and if their occurrence hovers, it returns the first chosen signal; because he understands that there was an error.
        if (this.value[v3] + this.value[v3]
            || this.value[v3] + this.value[v1]
            || this.value[v3] + this.value[v2]
            || this.value[v3] + this.value[v4]
            || this.value[v3] + this.value[v5]) {
            this.value = this.value
                .replace(this.value[v3] + this.value[v3], 'x')
                .replace(this.value[v3] + this.value[v1], 'x')
                .replace(this.value[v3] + this.value[v2], 'x')
                .replace(this.value[v3] + this.value[v4], 'x')
                .replace(this.value[v3] + this.value[v5], 'x');
        }
        return this.value;
    }

    // Testa sinal de '/'
    // Test '/' sign
    getTestDivision() {
        // Obter sinal pela posição da string
        // Get signal by string position
        let v1 = this.value.indexOf('+');
        let v2 = this.value.indexOf('-');
        let v3 = this.value.indexOf('x');
        let v4 = this.value.indexOf('/');
        let v5 = this.value.indexOf('.');

        // Testa se inicia com sinal, se sim coloca vazio
        // Test starts with sign, if yes, it leaves empty
        if (this.value[0] === '/') {
            this.value = this.value.replace(this.value[0], '');
        }

        // O teste combina sinais e se hover a ocorrência deles retorna o primeiro sinal escolhido; pois entende que houve erro.
        // The test combines signals and if their occurrence hovers, it returns the first chosen signal; because he understands that there was an error.
        if (this.value[v4] + this.value[v4]
            || this.value[v4] + this.value[v1]
            || this.value[v4] + this.value[v2]
            || this.value[v4] + this.value[v3]
            || this.value[v4] + this.value[v5]) {
            this.value = this.value
                .replace(this.value[v4] + this.value[v4], '/')
                .replace(this.value[v4] + this.value[v1], '/')
                .replace(this.value[v4] + this.value[v2], '/')
                .replace(this.value[v4] + this.value[v3], '/')
                .replace(this.value[v4] + this.value[v5], '/');
        }
        return this.value;
    }    

    // Testa o ponto
    // Test the point
    getTestPoint() {
        // Obter sinal pela posição da string
        // Get signal by string position
        let v1 = this.value.indexOf('+');
        let v2 = this.value.indexOf('-');
        let v3 = this.value.indexOf('x');
        let v4 = this.value.indexOf('/');
        let v5 = this.value.indexOf('.');

        // Testa se inicia com sinal, se sim coloca vazio
        // Test starts with sign, if yes, it leaves empty
        if (this.value[0] === '.') {
            this.value = this.value.replace(this.value[0], '');
        }

        // O teste combina sinais e se hover a ocorrência deles retorna o primeiro sinal escolhido; pois entende que houve erro.
        // The test combines signals and if their occurrence hovers, it returns the first chosen signal; because he understands that there was an error.
        if (this.value[v5] + this.value[v5]
            || this.value[v5] + this.value[v1]
            || this.value[v5] + this.value[v2]
            || this.value[v5] + this.value[v3]
            || this.value[v5] + this.value[v4]) {
            this.value = this.value
                .replace(this.value[v5] + this.value[v5], '.')
                .replace(this.value[v5] + this.value[v1], '.')
                .replace(this.value[v5] + this.value[v2], '.')
                .replace(this.value[v5] + this.value[v3], '.')
                .replace(this.value[v5] + this.value[v4], '.');
        }
        return this.value;
    }    

    // Remove último caractere
    // Remove last character
    removeValue() {
        this.value = this.value.substring(0, this.value.length - 1);
    }

    // Definir total
    // Set total
    setTotal(total: string) {
        this.total = total;
    }

    // Obter total
    // Get total
    getTotal() {
        if(Number(this.total) % 1 === 0) {
            return this.total !== '' ? this.total : '0';
        }
        else {
            return this.total !== '' ? Number(this.total).toFixed(2) : '0';
        }        
    }

    // Definir erro
    // Set error
    setError(error: string) {
        this.error = error;
    }

    // Obter erro
    // Get error
    getError() {
        return this.error;
    }

    // Definir configuração
    // Set configuration
    setConfig(config: string) {
        if (config === 'CE') {
            this.value = '';
            this.total = '0';
            this.error = '';
        }

        if (config === 'C') {
            this.removeValue();
        }

        if (config === 'DEL') {
            this.value = '';
            this.total = '0';
            this.error = '';
        }
    }

    // Obter operação
    // Get operation
    getOperation() {
        try {
            // Realiza o cálculo com a função Eval
            // Perform the calculation with the Eval function
            this.total = eval(this.value.replace('x', '*'));
        } catch (e) {
            this.error = "Formula Invalid!";
        }
    }
}
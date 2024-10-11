function calcular(operacao, num1, num2) {
    switch (operacao) {
        case 'adição':
            return num1 + num2;
        case 'subtração':
            return num1 - num2;
        case 'multiplicação':
            return num1 * num2;
        case 'divisão':
            if (num2 === 0) throw new Error('Divisão por zero');
            return num1 / num2;
        case 'potência':
            return Math.pow(num1, num2);
        case 'raiz':
            if (num1 < 0) throw new Error('Raiz de número negativo');
            return Math.sqrt(num1);
        default:
            throw new Error('Operação inválida');
    }
}

module.exports = { calcular };

const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

class Operacoes {
    static adicionar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        if (b === 0) {
            throw new Error('Divisão por zero não é permitida.');
        }
        return a / b;
    }

    static potencia(a, b) {
        return Math.pow(a, b);
    }

    static raiz(a) {
        if (a < 0) {
            throw new Error('Raiz de número negativo não é permitida.');
        }
        return Math.sqrt(a);
    }

    static getOperacoes() {
        return [
            "adição",
            "subtração",
            "multiplicação",
            "divisão",
            "potência",
            "raiz"
        ];
    }
}

// Endpoint para operações
app.post('/operacao', (req, res) => {
    const { operacao, valores } = req.body;

    try {
        let resultado;

        switch (operacao) {
            case 'adição':
                resultado = Operacoes.adicionar(...valores);
                break;
            case 'subtração':
                resultado = Operacoes.subtrair(...valores);
                break;
            case 'multiplicação':
                resultado = Operacoes.multiplicar(...valores);
                break;
            case 'divisão':
                resultado = Operacoes.dividir(...valores);
                break;
            case 'potência':
                resultado = Operacoes.potencia(...valores);
                break;
            case 'raiz':
                resultado = Operacoes.raiz(...valores[0]); // raiz usa apenas um valor
                break;
            default:
                return res.status(400).send('Operação inválida.');
        }

        res.json({ resultado });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Endpoint para listar operações
app.get('/operacoes', (req, res) => {
    res.json(Operacoes.getOperacoes());
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

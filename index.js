const express = require('express');
const bodyParser = require('body-parser');
const { calcular } = require('./calculadora');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/calcular', (req, res) => {
    const { operacao, num1, num2 } = req.body;
    if (!operacao || (operacao !== 'raiz' && (num1 === undefined || num2 === undefined))) {
        return res.status(400).json({ error: 'Operação ou números inválidos' });
    }
    try {
        const resultado = calcular(operacao, num1, num2);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

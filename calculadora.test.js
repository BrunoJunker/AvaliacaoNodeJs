const { calcular } = require('./calculadora');

test('adição de dois números', () => {
    expect(calcular('adição', 2, 3)).toBe(5);
});

test('subtração de dois números', () => {
    expect(calcular('subtração', 5, 3)).toBe(2);
});

test('multiplicação de dois números', () => {
    expect(calcular('multiplicação', 2, 3)).toBe(6);
});

test('divisão de dois números', () => {
    expect(calcular('divisão', 6, 3)).toBe(2);
});

test('divisão por zero', () => {
    expect(() => calcular('divisão', 6, 0)).toThrow('Divisão por zero');
});

test('potência de dois números', () => {
    expect(calcular('potência', 2, 3)).toBe(8);
});

test('raiz quadrada de um número', () => {
    expect(calcular('raiz', 9)).toBe(3);
});

test('raiz quadrada de número negativo', () => {
    expect(() => calcular('raiz', -9)).toThrow('Raiz de número negativo');
});

test('operacao invalida', () => {
    expect(() => calcular('invalida', 1, 2)).toThrow('Operação inválida');
});

const soma = require("../index.js")

test("A soma de 2 + 2 deve ser 4",() => {
    expect(soma(2, 2)).toBe(4)
})
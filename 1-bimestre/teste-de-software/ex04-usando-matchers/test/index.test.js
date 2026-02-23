test('5 é maior que 3', () => {
  expect(5).toBeGreaterThan(3)
})

test('Texto contém a palavra "Software"', () => {
  const texto = "Teste de Software"
  expect(texto).toContain("Software")
})

test('Objeto { aprovado: true } é igual ao esperado', () => {
  const objeto = { aprovado: true }
  expect(objeto).toEqual({ aprovado: true })
})
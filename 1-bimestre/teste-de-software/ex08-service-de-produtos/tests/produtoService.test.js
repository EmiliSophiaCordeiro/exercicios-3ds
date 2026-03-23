const produtoService = require('../services/produtoService')
const db = require('../database/mockDb')

beforeEach(() => {
  db.limpar()
})

test('Deve cadastrar produto com sucesso', () => {
  const jogo = { nome: 'Elden Ring', plataforma: 'PS5' }
  const resultado = produtoService.cadastrar(jogo)

  expect(resultado).toEqual(jogo)
  expect(db.listar().length).toBe(1)
})

test('Deve retornar false se o nome nao existir', () => {
  const jogoInvalido = { plataforma: 'PC' }
  const resultado = produtoService.cadastrar(jogoInvalido)

  expect(resultado).toBe(false)
  expect(db.listar().length).toBe(0)
})
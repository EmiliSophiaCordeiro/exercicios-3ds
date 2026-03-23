const db = require('../database/mockDb')

beforeEach(() => {
  db.limpar()
})

test('Banco deve comecar vazio', () => {
  const lista = db.listar()
  expect(lista.length).toBe(0)
})

test('Deve adicionar um produto ao almoxarifado', () => {
  const novoProduto = { nome: 'Papel A4', quantidade: 50 }
  
  db.adicionar(novoProduto)
  const lista = db.listar()

  expect(lista.length).toBe(1)
  expect(lista[0].nome).toBe('Papel A4')
})
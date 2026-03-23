const descontoService = require('../services/descontoService')
const descontoController = require('../controllers/descontoController')

test('Service: aplica 10% acima de 100', () => {
  expect(descontoService.calcular(200)).toBe(180)
})

test('Service: sem desconto ate 100', () => {
  expect(descontoService.calcular(100)).toBe(100)
})

test('Controller: envia json correto', () => {
  const req = { body: { valor: 200 } }
  const res = { json: jest.fn() }

  descontoController.aplicar(req, res)

  expect(res.json).toHaveBeenCalledWith({ valorFinal: 180 })
})
const taxaService = require('../taxaService')

describe('taxaService', () => {
  let service

  beforeEach(() => {
    service = taxaService
  })

  test('taxa de 5% acima de 500', () => {
    expect(service.calcularTaxa(1000)).toBe(50)
  })

  test('sem taxa para 500', () => {
    expect(service.calcularTaxa(500)).toBe(0)
  })

  test('sem taxa abaixo de 500', () => {
    expect(service.calcularTaxa(100)).toBe(0)
  })
})
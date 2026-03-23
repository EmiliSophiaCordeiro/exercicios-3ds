const ProdutoService = require("../services/produtoService")

describe("ProdutoService", () => {
  beforeEach(() => {
    ProdutoService.listar().length = 0
  })

  test("Deve cadastrar produto com nome válido", () => {
    const resultado = ProdutoService.cadastrar({ nome: "PlayStation 5" })
    expect(resultado).toBe(true)
    expect(ProdutoService.listar()).toContainEqual({ nome: "PlayStation 5" })
  })

  test("Não deve cadastrar produto sem nome", () => {
    const resultado = ProdutoService.cadastrar({})
    expect(resultado).toBe(false)
    expect(ProdutoService.listar()).toHaveLength(0)
  })
})

const validarPedido = require("../index")

  test("deve retornar false se total <= 0", () => {
    const pedido = { cliente: "Carlos", total: 0, itens: ["Produto A"] }
    expect(validarPedido(pedido)).toBe(false)
  })

  test("deve retornar false se não tiver cliente", () => {
    const pedido = { total: 100, itens: ["Produto A"] }
    expect(validarPedido(pedido)).toBe(false)
  })

  test("deve retornar false se não tiver itens", () => {
    const pedido = { cliente: "Carlos", total: 100, itens: [] }
    expect(validarPedido(pedido)).toBe(false)
  })

  test("deve retornar true para pedido válido", () => {
    const pedido = { cliente: "Carlos", total: 150, itens: ["Produto A", "Produto B"] }
    expect(validarPedido(pedido)).toBe(true)
  })



const produtos = []

const mockDb = {
  adicionar: (produto) => {
    produtos.push(produto)
    return produto
  },

  listar: () => {
    return produtos
  },

  limpar: () => {
    produtos.length = 0
  }
}

module.exports = mockDb
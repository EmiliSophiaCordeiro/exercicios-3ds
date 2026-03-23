const db = require('../database/mockDb')

const produtoService = {
  cadastrar: (produto) => {
    if (!produto.nome) return false
    
    return db.adicionar(produto)
  }
}

module.exports = produtoService
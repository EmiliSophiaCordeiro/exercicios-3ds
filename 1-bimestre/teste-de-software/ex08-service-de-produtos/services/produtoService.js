const produtosDB = []

class ProdutoService {
  static cadastrar(produto) {
    if (!produto.nome || produto.nome.trim() === "") {
      return false
    }
    produtosDB.push(produto)
    return true
  }

  static listar() {
    return produtosDB
  }
}

module.exports = ProdutoService
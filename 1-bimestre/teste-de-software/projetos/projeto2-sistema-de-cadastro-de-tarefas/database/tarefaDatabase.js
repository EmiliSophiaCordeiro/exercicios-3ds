let tarefas = []

function salvar(descricao) {
  tarefas.push(descricao)
}

function listar() {
  return tarefas
}

function limpar() {
  tarefas = []
}

module.exports = { salvar, listar, limpar }
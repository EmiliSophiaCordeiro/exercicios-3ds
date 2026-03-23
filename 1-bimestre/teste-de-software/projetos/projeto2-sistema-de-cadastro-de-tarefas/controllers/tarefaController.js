const service = require("../services/tarefaService")

function cadastrar(descricao) {
  return service.cadastrarTarefa(descricao)
}

function total() {
  return service.totalTarefas()
}

function listar() {
  return service.listarTarefas()
}

module.exports = { cadastrar, total, listar }
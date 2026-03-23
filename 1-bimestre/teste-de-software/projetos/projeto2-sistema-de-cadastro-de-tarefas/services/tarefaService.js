const db = require("../database/tarefaDatabase")

function cadastrarTarefa(descricao) {
  if (!descricao) return false
  db.salvar(descricao)
  return true
}

function totalTarefas() {
  return db.listar().length
}

function listarTarefas() {
  return db.listar()
}

function limparBanco() {
  db.limpar()
}

module.exports = { cadastrarTarefa, totalTarefas, listarTarefas, limparBanco }
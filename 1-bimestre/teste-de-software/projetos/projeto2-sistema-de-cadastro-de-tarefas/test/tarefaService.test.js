const tarefaService = require("../services/tarefaService")

beforeEach(() => {
  tarefaService.limparBanco()
})

test("Cadastro de tarefa com descrição válida", () => {
  const resultado = tarefaService.cadastrarTarefa("Estudar Jest")
  expect(resultado).toBe(true)
  expect(tarefaService.totalTarefas()).toBe(1)
})

test("Cadastro de tarefa sem descrição deve falhar", () => {
  const resultado = tarefaService.cadastrarTarefa("")
  expect(resultado).toBe(false)
  expect(tarefaService.totalTarefas()).toBe(0)
})

test("Banco inicia vazio", () => {
  expect(tarefaService.totalTarefas()).toBe(0)
})

test("Listar tarefas cadastradas", () => {
  tarefaService.cadastrarTarefa("Estudar Node")
  const lista = tarefaService.listarTarefas()
  expect(lista).toContain("Estudar Node")
})
const descontoService = require('../services/descontoService')

const descontoController = {
  aplicar: (req, res) => {
    const { valor } = req.body
    const valorFinal = descontoService.calcular(valor)
    res.json({ valorFinal })
  }
}

module.exports = descontoController
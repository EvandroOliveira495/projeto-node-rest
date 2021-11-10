const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get ('/atendimentos', (req, res) => res.send('Rota de atendimentos get !!'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })
}
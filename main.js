import express from 'express'

const app = express()

app.use(express.json())

const porta = 5555

app.listen(porta, () => {
    console.log(`aplicação subiu na porta ${porta}`)
    console.log('rodando na porta', porta)
})
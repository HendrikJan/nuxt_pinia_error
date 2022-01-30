import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get('/user', (req, res) => {
    return res.json({
      name: 'WhoAmAi',
      age: 24,
      id: 1,
    })
})

export default app
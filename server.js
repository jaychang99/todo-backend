import express from 'express'
import todosRouter from './src/routes/todos.route.js'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("hello, world from todo server")
})

app.use('/todos', todosRouter)

// 서버 시작 
app.listen(8000, () => {
  console.log(`Server started on port 8000`)
})


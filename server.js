import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("hello, world from todo server")
})

// 서버 시작 
app.listen(8000, () => {
  console.log(`Server started on port 8000`)
})


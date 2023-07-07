const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Duc anh dep trai!')
})

app.get('/about', (req, res) => {
    res.send(`I'm Nguyen Duc Anh`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World YEEEE!')
})

app.listen(port, () => {
  console.log(`Graham's Space App listening at http://localhost:${port}`)
})
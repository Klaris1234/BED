const express = require('express')
const app = express()
const port = 3030
app.get('/', (req, res) => {
res.send('Hello World from Express!')
})
app.listen(port, () => {
console.log(`Express app listening on port ${port}`)
})

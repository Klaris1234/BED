const express = require('express');
const app = express();
const port = 3000;

app.use(express.static ("public"));
res.send('Hello World from Express!')

app.listen(port, () => {
console.log(`Express app listening on port ${port}`)
})

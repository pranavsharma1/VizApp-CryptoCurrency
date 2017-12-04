const express = require('express')
const app = express()


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static('public'))
app.listen(3000, () => console.log('Crypto Viz Aapp listening on port 3000!'))
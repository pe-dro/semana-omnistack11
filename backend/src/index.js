const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.listen(3333)
app.use(express.json())
app.use(routes)
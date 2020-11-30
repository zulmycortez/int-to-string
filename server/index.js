const express = require('express')
const bp = require('body-parser')
const cors = require('cors')

const db = require ('./db')
const router = require('./router')

const app = express()
const port = 3001

app.use(bp.urlencoded({ extended: true }))
app.use(cors())
app.use(bp.json())

db.on('error', console.error.bind(console, 'MongoDB connection failed...'))

app.use('/api', router)

app.listen(port, () => console.log(`Server running on ${port}`))
require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const cloudinary = require('cloudinary')
const cors = require('cors')
const fileupload = require('express-fileupload');
const { executeJob } = require('./helpers')
const moment = require('moment')
const schedule = require('node-schedule')

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.DB_URI)
.then(() => {
  console.log('Database Connected')
}).catch((err) => {
  console.log('Err===>', err)
})

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use(fileupload({ useTempFiles: true }))

app.use(express.urlencoded({ limit: '10000mb', extended: true }))
app.use(express.static(path.join(__dirname, '.-client/build')))


app.use('/api', require('./routes'))
app.get('/api/get/test', (req, res) => { return res.send({ success: true, message: 'BACKEND IS WORKING!' }) })
//set a static folder
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}))
schedule.scheduleJob('0 0 1 * *', () => executeJob())


server.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})
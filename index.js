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

// const { mongoose } = require('./config')

require('dotenv').config()
const PORT = process.env.myport || 4001


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

app.use(bodyParser.json())
app.use(fileupload({ useTempFiles: true }))

let now = moment().add(1, 'days').startOf('day').format("YYYY-MM-DD HH:mm:ss")
console.log('now', now)
var then = "22-11-2022 22:34:30";

let cond = moment.utc(moment(now, "YYYY-MM-DD HH:mm:ss").diff(moment(then, "YYYY-MM-DD HH:mm:ss"))).format("HH:mm:ss")
console.log('cond', cond)
app.use(bodyParser.urlencoded({limit: '100mb' ,extended: true }))



app.use(express.static(path.join(__dirname, '.-client/build')))

app.use(cors());

app.use('/api', require('./routes'))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}))
schedule.scheduleJob('0 0 1 * *', () => executeJob())

app.use(express.json())

server.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})
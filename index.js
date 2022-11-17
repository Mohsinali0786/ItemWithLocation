const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const cloudinary = require('cloudinary')
const cors = require('cors')
const fileupload = require('express-fileupload'); 



// const { mongoose } = require('./config')

require('dotenv').config()
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
  // secure: true
});
// var db = mongoose.connection
// db.on('error', (err) => {
//   console.log('err', err)
// })

// db.on('open', function () {
//   console.log('DB running')
// })
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(fileupload({useTempFiles: true}))


app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './client/build')))
app.use(cors());

app.use('/api', require('./routes'))

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}))

app.use(express.json())

server.listen(PORT, () => {
  console.log(`Server up and running on ${PORT}`)
})
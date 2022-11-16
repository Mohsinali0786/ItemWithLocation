const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT,NUMBER_REQUIRED} = require('./schematypes')

const userSchema=moongoose.Schema({
    image:STRING_REQUIRED,
    description:STRING_REQUIRED,
    latitude:NUMBER_REQUIRED,
    longitude: NUMBER_REQUIRED,
})

let User=moongoose.model("User",userSchema);
module.exports=User
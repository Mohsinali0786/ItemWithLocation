const moongoose=require('mongoose')
const { STRING_REQUIRED,NUMBER_REQUIRED} = require('./SchemaType')

const userSchema=moongoose.Schema({
    name:STRING_REQUIRED,
    email:STRING_REQUIRED,
    google_id:NUMBER_REQUIRED,
})
let User=moongoose.model("User",userSchema);
module.exports=User
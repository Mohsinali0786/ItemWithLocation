const moongoose=require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT,NUMBER_REQUIRED} = require('./SchemaType')

const itemSchema=moongoose.Schema({
    image:STRING_REQUIRED,
    description:STRING_REQUIRED,
    latitude:NUMBER_REQUIRED,
    longitude: NUMBER_REQUIRED,
})

let Item=moongoose.model("Items",itemSchema);
module.exports=Item
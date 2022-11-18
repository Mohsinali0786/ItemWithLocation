const moongoose = require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT, NUMBER_REQUIRED, REF_OBJECT_ID } = require('./SchemaType')

const itemSchema = moongoose.Schema({
    image: STRING_REQUIRED,
    description: STRING_REQUIRED,
    latitude: NUMBER_REQUIRED,
    longitude: NUMBER_REQUIRED,
    userId: REF_OBJECT_ID('User')
})

let Item = moongoose.model("Items", itemSchema);
module.exports = Item
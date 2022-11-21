const moongoose = require('mongoose')
const { STRING_REQUIRED, STRING, BOOLEAN_DEFAULT, NUMBER_REQUIRED, REF_OBJECT_ID, DATE, CREATED_DATE } = require('./SchemaType')

const itemSchema = moongoose.Schema({
    image: STRING_REQUIRED,
    description: STRING_REQUIRED,
    latitude: NUMBER_REQUIRED,
    longitude: NUMBER_REQUIRED,
    updatedAt: DATE,
    isTaken: BOOLEAN_DEFAULT,
    userId: REF_OBJECT_ID('User'),
    createdAt: CREATED_DATE,
})

let Item = moongoose.model("Items", itemSchema);
module.exports = Item
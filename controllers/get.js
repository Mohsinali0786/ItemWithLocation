const { Item } = require('../model')
const getItems = async (req, res) => {
    try {
        Item.find({}, async (err, data) => {
            if (err || !data) {
                return res.send({ success: false, message: 'No user found!' })
            }
            return res.send({ success: true, data })
        })
    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}

module.exports = {
    getItems,
}
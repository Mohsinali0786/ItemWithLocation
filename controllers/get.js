const { Item } = require('../model')
const getItems = async (req, res) => {
    try {
        Item.find({ userid: req?.params?.id }, async (err, data) => {
            if (err || !data) {
                return res.send({ success: false, message: 'No user found!' })
            }
            console.log('===>', data)
            return res.send({ success: true, data })
        }).populate('userId')
    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}

module.exports = {
    getItems,
}
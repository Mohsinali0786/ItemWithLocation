const { Item } = require('../model')
const cloudinary = require('cloudinary')
const moment=require('moment')

const addItem = async (req, res) => {
    try {
        const { body } = req
        const { description, latitude, longitude, userid } = body

        if (!description || !latitude || !longitude || !userid) {
            return res.send({ success: false, message: 'Please fill all fields' })
        }
        await cloudinary.uploader.upload(req.files.file.tempFilePath, function (result, err) {
            if (!result || err) {
                console.log('err', result, err)
                return res.send({ success: false, message: 'Image Upload Error', err })
            }

            let obj = {
                image: result?.url,
                description,
                latitude,
                longitude,
                userId: userid,

            }
            let saveData = new Item(obj)
            saveData.save()
                .then(() => {
                    return res.send({ success: true, message: 'Item added successfully' })
                }).catch((err) => {
                    console.log('err', err)
                    return res.send({ success: false, message: 'Try Again item not added ' })
                })
        })
    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}

const updateItem = (req, res) => {
    try {
        const { body } = req
        const { _id } = body

        if (!_id) {
            return res.send({ success: false, message: 'Please fill all fields' })
        }

        Item.findByIdAndUpdate(_id, { isTaken: true, updatedAt: moment() }, async (err, data) => {
            if (err) {
                console.log('err', err)
                return res.send({ success: false, message: 'Image Upload Error', err })
            }
            return res.send({ success: true })
        })
    } catch (e) {
        console.log('err', e)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}

module.exports = {
    addItem,
    updateItem
}
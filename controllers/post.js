const { Item } = require('../model')
const cloudinary = require('cloudinary')
const addItem = async (req, res) => {

    try {
        const { image, description, latitude, longitude } = req.body
        if(image||description){
            return res.send({ success: false, message: 'Please fill all fields' })
        }
        await Item.create({
            image,
            description,
            latitude,
            longitude
        }).then(() => {
            return res.send({ success: true, message: 'Congratulations Item added successfully' })
        }).catch((err) => {
            console.log('err', err)
            return res.send({ success: false, message: 'Try Again item not added ' })
        })
    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}
const uploadImage = async (req, res) => {
    const file = req.files.file.tempFilePath
    // console.log('req.files', req.files)
    try {
        const result = await cloudinary.uploader.upload(req.files.file.tempFilePath, function (err, result) {

        });
        res.send({
            success: true,
            result: result.url
        })
        console.log(result.url, "result");
        return result.public_id;
    }
    catch (error) {
        console.error('Err in upload', error);
    }
};

module.exports = {
    addItem,
    uploadImage,
    

}
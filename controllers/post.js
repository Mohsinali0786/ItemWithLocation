const {Item } = require('../model')
const cloudinary = require('cloudinary')


const addItem = async (req, res) => {

    // console.log('req.body',req.body)
    const { image, description,latitude,longitude} = req.body
    try {
        // const TeamExists = await teammodel.findOne({ teamemail, useremail })
        // if (TeamExists) {
        //     if (TeamExists.isDeleted !== true) {
        //         res.send({ status: 'error', message: 'This team is already exists' })
        //     }
        //     else {
        //         await TeamExists.updateOne({
        //             isDeleted: false,
        //         }).then(() => {
        //             res.send({ status: 'success', message: 'Congratulations Team added successfully' })
        //         }).catch((err) => {
        //             console.log('err', err)
        //         })
        //     }
        // }
        // else {
            await Item.create({
                image,
                description,
                latitude,
                longitude
            }).then(() => {
                res.send({ status: 'success', message: 'Congratulations Team added successfully' })
            }).catch((err) => {
                console.log('err', err)

            })
        // }

    }
    catch (err) {
        console.log('err', err)
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
            result:result.url
        })
        console.log(result.url, "result");
        return result.public_id;
    }
     catch (error) {
        console.error('Err in upload', error);
    }
};
module.exports={
    addItem,
    uploadImage

}
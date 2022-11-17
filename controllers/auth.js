const { UserModal } = require('../model')

const registerUser = async (req, res) => {
    try {
        const {name,email,google_id} = req.body
        console.log(req.body)
        const UserExist = await UserModal.findOne({ email,google_id})
        if(UserExist ){
            return res.send({ success: false, logininfo: UserExist })
        }
        await UserModal.create({
            name,
            email,
            google_id
        }).then(() => {
            return res.send({ success: true, message: 'Congratulations Login Successfully' })
        }).catch((err) => {
            console.log('err', err)
            return res.send({ success: false, message: 'Login Failed' })
        })
    }
    catch (err) {
        console.log('err', err)
        return res.send({ success: false, message: 'Oops Something Went Wrong!' })
    }
}
module.exports = {
    registerUser

}
const {Item}=require('../model')
const getItems = async (req, res) => {
    try {
        const MyItem = await Item.find({})
        console.log('Item',MyItem)
        if (MyItem) {
            res.send({ status: 'success', MyItem })
        }
        else {
            res.send({
                message: "Error in data receiving"
            })
        }
    }
    catch (err) {
        console.log('err', err)
    }
}

module.exports = {
    getItems,
}
const { Item } = require('./model')

const executeJob = async (req, res) => {
    console.log('executeJob')
    try {
        let allItems = await Item.find({ isTaken: true, isDeleted: false, updatedAt: { $ne: null } })

        if (!allItems?.length) {
            return false
        }

        for (let item of allItems) {
            await Item.findByIdAndUpdate({ _id: item?._id }, { isDeleted: true })
        }

    } catch (e) {
        console.log('e', e)
    }
}

module.exports = {
    executeJob
}
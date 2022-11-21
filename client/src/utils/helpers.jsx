import { message, notification } from 'antd'
import axios from 'axios'
import allPaths from '../Config/paths'
import { GET } from './apis'
import { getAllItems } from '../Redux/actions'
import moment from 'moment'

const getallData = (dispatch, userid) => {
    console.log('function')
    axios.get(`${GET?.GETITEMS}/${userid}`)
        .then((res) => {
            const { data } = res
            let filterData = data.data.filter((val, i) => {
                var now = moment().utc() //todays date
                console.log('now',now)
                var end = moment(val.updatedAt).utc()//todays date
                console.log('end',end)
                var duration = moment.duration(now.diff(end))
                console.log('duration',duration._data.hours)
                return !val.isTaken || (val.isTaken && duration._data.hours === 0 )
            })

            dispatch(getAllItems(data.data))
        })
        .catch((err) => {
            console.log('Err', err)
        })
}

const successMessage = (desc = 'Successfully Complete!') => {
    return message.success(desc)
}
const errorMessage = (desc = 'Error found!') => {
    return message.error(desc)
}
// const requiredMessage = (value) => `Please input your ${value}!`

// const inputPlace = (value) => `Input your ${value} Here...!`

// const setActiveMenu = (path) => path === allPaths.HOME ? 0 : 1

// const successMessage = (desc = 'Successfully Complete!') => {
//     return message.success(desc)
// }

// const infoMessage = (desc = 'Successfully Complete!') => {
//     return message.info(desc)
// }

// const errorMessage = (desc = 'Oops Something Went Wrong!') => {
//     return message.error(desc)
// }

// const warningMessage = (desc = 'Warning!') => {
//     return message.warning(desc)
// }

// const successNotification = (message = 'Successfully Complete!') => {
//     return notification.success({ message })
// }

// const errorNotification = (message = 'Oops Something Went Wrong!') => {
//     return notification.error({ message })
// }

// const convertTitle = (val) => val.charAt(0).toUpperCase() + val.slice(1)

// const stringLimiter = (val, limit = 50) => val?.length > limit ? `${val.slice(0, limit)}...` : val





export {
    getallData,
    successMessage,
    errorMessage,
    // requiredMessage,
    // inputPlace,
    // setActiveMenu,
    // successMessage,
    // infoMessage,
    // errorMessage,
    // warningMessage,
    // successNotification,
    // errorNotification,
    // convertTitle,
    // stringLimiter
}
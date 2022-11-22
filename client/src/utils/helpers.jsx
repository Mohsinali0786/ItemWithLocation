import { message } from 'antd'
import axios from 'axios'
import { GET } from './apis'
import { getAllItems } from '../Redux/actions'

const getallData = (dispatch, userid) => {
    axios.get(`${GET?.GETITEMS}/${userid}`)
        .then((res) => {
            const { data } = res

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


export {
    getallData,
    successMessage,
    errorMessage,

}
import {LOGINFIRSTALERT } from '../types'
let initialState = {
    message: '',
    // allItems:[]
}
const notifyReducer = (state = initialState = {}, action) => {
    switch (action.type) {
        case LOGINFIRSTALERT:
            console.log('LOGINFIRSTALERT', action.payload)
            return {
                ...state,
                uploaded_img_url: action.payload
            }
        default: {
            return state
        }
    }
}
export default notifyReducer
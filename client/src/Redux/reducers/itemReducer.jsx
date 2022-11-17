import { UPLOADTEAMIMAGE } from '../types'
const reducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOADTEAMIMAGE:
            console.log('UPLOADTEAMIMAGE', action.payload)
            return {
                ...state,
                uploaded_img_url: action.payload
            }

        default: {
            return state
        }
    }
}
export default reducer
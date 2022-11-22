import { UPLOADTEAMIMAGE, LATANDLONG, ISLOGGEDIN, LOGINUSER,GETALLITEMS } from '../types'
let initialState = {
    isLoggedin: false,
    // allItems:[]
}
const reducer = (state = initialState = {}, action) => {
    switch (action.type) {
        case UPLOADTEAMIMAGE:
            return {
                ...state,
                uploaded_img_url: action.payload
            }
        case LATANDLONG:

            return {
                ...state,
                latandlong: { latitude: action.payload.lat, longitude: action.payload.lng }
            }
        case ISLOGGEDIN:

            return {
                ...state,
                ISLOGGEDIN: action.payload
            }
            case LOGINUSER:
    
                return {
                    ...state,
                    LOGINUSER: action.payload
                }
                case GETALLITEMS:
                    console.log('GETALLITEMS', action.payload)
        
                    return {
                        ...state,
                        allItems:action.payload
                    }
        default: {
            return state
        }
    }
}
export default reducer
import { UPLOADTEAMIMAGE, LATANDLONG, ISLOGGEDIN, LOGINUSER,GETALLITEMS } from '../types'
let initialState = {
    isLoggedin: false,
    // allItems:[]
}
const reducer = (state = initialState = {}, action) => {
    switch (action.type) {
        case UPLOADTEAMIMAGE:
            console.log('UPLOADTEAMIMAGE', action.payload)
            return {
                ...state,
                uploaded_img_url: action.payload
            }
        case LATANDLONG:
            console.log('UPLOADTEAMIMAGE', action.payload)

            return {
                ...state,
                latandlong: { latitude: action.payload.lat, longitude: action.payload.lng }
            }
        case ISLOGGEDIN:
            console.log('ISLOGGEDIN', action.payload)

            return {
                ...state,
                ISLOGGEDIN: action.payload
            }
            case LOGINUSER:
                console.log('LOGINUSER', action.payload)
    
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
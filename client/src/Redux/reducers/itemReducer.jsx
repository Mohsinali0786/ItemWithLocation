import { UPLOADTEAMIMAGE ,LATANDLONG} from '../types'
const reducer = (state = {}, action) => {
    switch (action.type) {
        case UPLOADTEAMIMAGE:
            console.log('UPLOADTEAMIMAGE', action.payload)
            return {
                ...state,
                uploaded_img_url: action.payload
            }
            case LATANDLONG:
            console.log('UPLOADTEAMIMAGE', action.payload)

                return{
                    ...state,
                    latandlong:{latitude:action.payload.lat,longitude:action.payload.lng}
                }
        default: {
            return state
        }
    }
}
export default reducer
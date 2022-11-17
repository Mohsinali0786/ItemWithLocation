import {UPLOADTEAMIMAGE} from '../types'

export const get_Img_url=(imgURL)=>async(dispatch)=>{
    console.log('Img URL',imgURL)
    dispatch({
        type:UPLOADTEAMIMAGE,
        payload:imgURL
    })
}
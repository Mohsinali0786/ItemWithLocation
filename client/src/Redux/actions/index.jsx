import {UPLOADTEAMIMAGE,LATANDLONG} from '../types'

export const get_Img_url=(imgURL)=>async(dispatch)=>{
    console.log('Img URL',imgURL)
    dispatch({
        type:UPLOADTEAMIMAGE,
        payload:imgURL
    })
}
export const get_lat_long=(latandlong)=>async(dispatch)=>{
    console.log('latandlong',latandlong)
    dispatch({
        type:LATANDLONG,
        payload:latandlong
    })
}
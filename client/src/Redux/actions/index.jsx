import {UPLOADTEAMIMAGE,LATANDLONG,ISLOGGEDIN,LOGINUSER,GETALLITEMS} from '../types'

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
export const isLoggedin=(loginvalue)=>async(dispatch)=>{
    // console.log('latandlong',latandlong)
    dispatch({
        type:ISLOGGEDIN,
        payload:loginvalue
    })
}

export const loginUserData=(data)=>async(dispatch)=>{
    // console.log('latandlong',latandlong)
    dispatch({
        type:LOGINUSER,
        payload:data
    })
}
export const getAllItems=(data)=>async(dispatch)=>{
    // console.log('latandlong',latandlong)
    dispatch({
        type:GETALLITEMS,
        payload:data
    })
}

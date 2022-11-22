import {UPLOADTEAMIMAGE,LATANDLONG,ISLOGGEDIN,LOGINUSER,GETALLITEMS} from '../types'

export const get_Img_url=(imgURL)=>async(dispatch)=>{
    dispatch({
        type:UPLOADTEAMIMAGE,
        payload:imgURL
    })
}
export const get_lat_long=(latandlong)=>async(dispatch)=>{
    dispatch({
        type:LATANDLONG,
        payload:latandlong
    })
}
export const isLoggedin=(loginvalue)=>async(dispatch)=>{
    dispatch({
        type:ISLOGGEDIN,
        payload:loginvalue
    })
}

export const loginUserData=(data)=>async(dispatch)=>{
    dispatch({
        type:LOGINUSER,
        payload:data
    })
}
export const getAllItems=(data)=>async(dispatch)=>{
    dispatch({
        type:GETALLITEMS,
        payload:data
    })
}


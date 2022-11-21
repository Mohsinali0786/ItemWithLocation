import React, { useState } from 'react';
// import UploadImage from '../../Components/UploadFile/uploader'
import Map from '../../Components/mapcomponent/map'
import ItemModal from '../../Components/modal/itemmodal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLoggedin } from '../../Redux/actions';
import Header from '../../Components/header/header'
// import Notification from '../../Components/notification/notification';
import { getallData } from '../../utils/helpers';

const Home = () => {
    const dispatch = useDispatch()
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)

    // useEffect(() => {
    //     dispatch(isLoggedin(false))
    // }, [])
    useEffect(()=>{
        getallData(dispatch,userid)
    },[])
    return (
        <div className="mainHomeDiv">
            <Header />
            <Map />
            <ItemModal />

        </div>
    );
};
export default Home;

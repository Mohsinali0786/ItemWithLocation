import React, { useState } from 'react';
// import UploadImage from '../../Components/UploadFile/uploader'
import Map from '../../Components/mapcomponent/map'
import ItemModal from '../../Components/modal/itemmodal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLoggedin } from '../../Redux/actions';
import Header from '../../Components/header/header'


const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(isLoggedin(false))
    }, [])
   
    return (
        <div className="mainHomeDiv">
            <Header/>
            <Map />
            {/* <MyGoogleLogin /> */}
            <ItemModal />

        </div>
    );
};
export default Home;

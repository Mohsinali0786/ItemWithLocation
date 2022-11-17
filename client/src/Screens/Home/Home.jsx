import React, { useState } from 'react';
// import UploadImage from '../../Components/UploadFile/uploader'
import Map from '../../Components/mapcomponent/map'
import MyGoogleLogin from '../../Components/googlelogin'
import ItemModal from '../../Components/modal/itemmodal';

const Home = () => {
 
    return (
        <div className="mainHomeDiv">
            <Map />
            <MyGoogleLogin />
            <ItemModal/>
        </div>
    );
};
export default Home;

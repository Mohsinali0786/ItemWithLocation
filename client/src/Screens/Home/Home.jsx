import React, { useState } from 'react';
import Map from '../../Components/mapcomponent/map'
import ItemModal from '../../Components/modal/itemmodal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../../Components/header/header'
import { getallData } from '../../utils/helpers';

const Home = () => {
    const dispatch = useDispatch()
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)
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

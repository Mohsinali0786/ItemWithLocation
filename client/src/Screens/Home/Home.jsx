import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import UploadImage from '../../Components/UploadFile/uploader'
import Map from '../../Components/mapcomponent/map'
import MyGoogleLogin from '../../Components/googlelogin'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('')
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        console.log("description", description)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Map />
            <MyGoogleLogin/>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Add Your Item" okText={"Add Item"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='img_div'>
                    <UploadImage />
                </div>
                <div className='modal_div' id='modal-modal-description'>
                    <textarea className='text_area' rows="4" cols="70" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    {/* <input className='inp' value={longitude} placeholder='Longitude' onChange={(e) => { setLongitude(e.target.value) }} />
                            <input className='inp' value={latitude} placeholder='Latitude' onChange={(e) => { setLatitude(e.target.value) }} /> */}
                </div>
            </Modal>
        </>
    );
};
export default Home;

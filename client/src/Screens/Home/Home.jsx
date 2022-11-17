import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { Form, Input, Button } from 'antd'
import { requiredMessage, inputPlace } from '../../utils/helpers'
import UploadImage from '../../Components/UploadFile/uploader';

const Home = (props) => {
    const user = useSelector(state => state.authReducer.user)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [description, setDescription] = useState()
    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()
    const dispatch = useDispatch()
    const [state, updateState] = useState({
    })

    const onFinish = (value) => {

    }
    const handleClose = () => {
        setOpen(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (
        <>
            {/* <div className='home-main'>
                Hello
            </div> */}
            <div>
                <Button onClick={handleOpen}>Add</Button>
                <Modal
                    open={open}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box sx={style}>
                        <div className='img_div'>
                            <UploadImage/>
                        </div>
                        <div className='modal_div' id='modal-modal-description'>
                            <input className='inp' value={description} placeholder='Description' onChange={(e) => { setDescription(e.target.value) }} />
                            <input className='inp' value={longitude} placeholder='Longitude' onChange={(e) => { setLongitude(e.target.value) }} />
                            <input className='inp' value={latitude} placeholder='Latitude' onChange={(e) => { setLatitude(e.target.value) }} />
                        </div>
                        <div className='btn_div'>
                            <button className='btn cancel_btn' onClick={handleClose}>Cancel</button>
                            <button className='btn ok_btn' onClick={handleClose}>Ok</button>
                        </div>
                    </Box>
                </Modal>
            </div>

        </>

    )
}

export default Home
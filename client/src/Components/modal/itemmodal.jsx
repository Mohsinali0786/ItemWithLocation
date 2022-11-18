import { useState } from "react";
import { Button, Modal } from 'antd';
import UploadImage from '../uploadimage/uploadimg'
import { POST } from '../../utils/apis'
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
// import { isLoggedin } from '../../Redux/actions/index'
import {getallData} from '../../utils/helpers'
import { useDispatch } from "react-redux";

export default function ItemModal() {
    const dispatch=useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('')
    const getdata = useSelector((state) => state?.itemReducer)
    const ISLOGGEDIN = useSelector((state) => state.itemReducer.ISLOGGEDIN)
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)


    // console.log(getdata?.latandlong?.longitude,'getImage')
    function LoginFirstMesage() {
        Swal.fire({
            icon: 'error',
            text: 'Please Login First'
        })
    }
    const showModal = () => {
        if(ISLOGGEDIN)
        {
            setIsModalOpen(true);
        }
        else{
            LoginFirstMesage()
        }
    };
    const handleOk = () => {
        let itemDetail = {
            image: getdata?.uploaded_img_url,
            description,
            latitude: getdata?.latandlong?.latitude,
            longitude: getdata?.latandlong?.longitude,
            userid,

        }
        axios.post(`${POST?.ADDITEMS}`, itemDetail)
            .then((res) => {
                console.log('res=>', res.data)
                if (res.data.success === true) {
                    Swal.fire({
                        icon: 'success',
                        text: res.data.message
                    })
                    // alert('succesfully add item')
                    setIsModalOpen(false);
                    getallData(dispatch)
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        text: res.data.message
                    })
                }
            })
            .catch((err) => {
                console.log('err===>', err)
            })

        // console.log("description", description)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div >
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>

            <Modal title="Add Your Item" okText={"Add Item"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='img_div'>
                    <UploadImage />
                </div>
                <div className='modal_div' id='modal-modal-description'>
                    <textarea className='text_area' rows="4" cols="70" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
            </Modal>
        </div>

    )
}


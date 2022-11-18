import { useState } from "react";
import { Button, Modal } from 'antd';
import UploadImage from '../uploadimage/uploadimg'
import { POST } from '../../utils/apis'
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
// import { isLoggedin } from '../../Redux/actions/index'
import { getallData } from '../../utils/helpers'
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { Input, Form } from "antd";
const { TextArea } = Input;

export default function ItemModal() {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('')
    const getdata = useSelector((state) => state?.itemReducer)
    const ISLOGGEDIN = useSelector((state) => state.itemReducer.ISLOGGEDIN)
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)
    const [formdata, setformData] = useState()


    // console.log(getdata?.latandlong?.longitude,'getImage')
    function LoginFirstMesage() {
        Swal.fire({
            icon: 'error',
            text: 'Please Login First'
        })
    }
    const showModal = () => {
        if (ISLOGGEDIN) {
            setIsModalOpen(true);
        }
        else {
            LoginFirstMesage()
        }
    };
    const handleOk = () => {
        console.log('formdata', formdata)
        axios.post(`${POST?.UPLOADIMAGE}`, formdata)
            .then((res) => {
                let itemDetail = {
                    image: res.data.result,
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
                            setIsModalOpen(false);
                            getallData(dispatch, userid)
                        }
                    })
                    .catch((err) => {
                        console.log('err===>', err)
                    })
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
            {/* <Button className="modal_btn" type="primary" onClick={showModal}>
                Open Modal
            </Button> */}
            <AddIcon className="modal_btn" onClick={showModal} />

            <Modal title="Add Your Item" okText={"Add Item"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <div className='img_div'>
                    <UploadImage formdata={formdata} setformdata={setformData} />
                </div>
                <div className='modal_div' id='modal-modal-description'>
                    
                    <Form>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <TextArea rows={4} />
                            {/* <textarea className='text_area' rows="4" cols="70" value={description} onChange={(e) => { setDescription(e.target.value) }} /> */}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>

    )
}


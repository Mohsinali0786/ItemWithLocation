import { useState } from "react";
import { Button, Modal } from 'antd';
import { Alert } from "@mui/material";
import UploadImage from '../uploadimage/uploadimg'
import { POST } from '../../utils/apis'
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
// import { isLoggedin } from '../../Redux/actions/index'
import { getallData } from '../../utils/helpers'
import { useDispatch } from "react-redux";
import AddIcon from '@mui/icons-material/Add';
import { loginfirstalert } from '../../Redux/actions'
import { Input, Form, message } from "antd";
import { successMessage, errorMessage } from '../../utils/helpers'


const { TextArea } = Input;

export default function ItemModal() {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('')
    const getdata = useSelector((state) => state?.itemReducer)
    const ISLOGGEDIN = useSelector((state) => state.itemReducer.ISLOGGEDIN)
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)
    const [formdata, setformData] = useState()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)


    function LoginFirstMesage() {
        // Swal.fire({
        //     icon: 'error',
        //     text: 'Please Login First'
        // })
        // <Alert severity="error">This is an error alert — check it out!</Alert>
        // console.log('LoginFirstMesage')
    }
    const showModal = () => {
        if (ISLOGGEDIN) {
            setIsModalOpen(true);
        }
        else {
            errorMessage('Please Login First')
            // LoginFirstMesage()
        }
    };
    const validateForm = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                handleOk()
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }
    const handleOk = () => {
        setLoading(true)
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
                            successMessage(res.data.message)
                            setLoading(false)

                            // Swal.fire({
                            //     icon: 'success',
                            //     text: res.data.message
                            // })
                            setIsModalOpen(false);
                            getallData(dispatch, userid)
                        }
                    })
                    .catch((err) => {
                        setLoading(false)
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
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div >
            {/* <Button className="modal_btn" type="primary" onClick={showModal}>
                Open Modal
            </Button> */}

            <AddIcon className="modal_btn" onClick={showModal} />

            <Modal
                title="Add Your Item"
                okText={"Add Item"}
                open={isModalOpen}
                onOk={validateForm}
                onCancel={handleCancel}
            >


                <div className='modal_div' id='modal-modal-description'>

                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}

                    >
                        <Form.Item
                            label="Image"
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select image first!',
                                },
                            ]}
                        >
                            <div className='img_div'>
                                <UploadImage formdata={formdata} setformdata={setformData} />
                            </div>
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your description!',
                                },
                            ]}
                        >
                            <TextArea onChange={(e) => setDescription(e.target.value)} />
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>

    )
}


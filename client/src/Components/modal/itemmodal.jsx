import { useState } from 'react'
import { Button, Modal } from 'antd'
import { POST } from '../../utils/apis'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { getallData } from '../../utils/helpers'
import { useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { Input, Form } from 'antd'
import { successMessage, errorMessage } from '../../utils/helpers'
import { message, Upload } from 'antd'
import { UploadOutlined} from '@ant-design/icons'

const { TextArea } = Input

export default function ItemModal() {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const getdata = useSelector((state) => state?.itemReducer)
    const ISLOGGEDIN = useSelector((state) => state.itemReducer.ISLOGGEDIN)
    const userid = useSelector((state) => state.itemReducer.LOGINUSER?._id)
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const [fileList, setFileList] = useState([])

    const showModal = () => {
        if (userid) {
            setIsModalOpen(true)
        }
        else {
            errorMessage('Please Login First')
        }
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const onFinish = (values) => {
        setLoading(true)
        const formValues = new FormData()
        if (values?.file?.file) {
            formValues.append('file', values?.file?.file)
        }
        formValues.append('userid', userid)
        formValues.append('description', values?.description)
        formValues.append('latitude', Number(getdata?.latandlong?.latitude))
        formValues.append('longitude', Number(getdata?.latandlong?.longitude))

        axios.post(POST?.ADDITEMS, formValues)
            .then((res) => {
                const { data } = res
                if (data.success) {
                    successMessage(data.message)
                    setLoading(false)
                    setIsModalOpen(false)
                    getallData(dispatch, userid)
                } else {
                    setLoading(false)
                    errorMessage(data.message)
                }
            })
            .catch((err) => {
                setLoading(false)
                console.log('err===>', err)
            })
    }
    const onFinishFailed = (errorInfo) => {
        setLoading(false)
        errorMessage(errorInfo)
    }

    const normFile = (e) => {
        setFileList([])

        if (e?.fileList?.length && e?.file?.type !== 'image/png' && e?.file?.type !== 'image/jpeg') {
            errorMessage('You can only upload Images!')
            return []
        }

        if (Array.isArray(e)) {
            return e
        }

        e?.fileList?.length ? setFileList([...[e?.file]]) : setFileList([])
        return e && [e.file]
    }

    return (
        <div className='AddItemMainDiv'>
            <AddIcon className='modal_btn' onClick={showModal} />

            <Modal
                footer={null}
                title='Add Your Item'
                okText={'Add Item'}
                open={isModalOpen}
                onCancel={handleCancel}
            >
                <div className='modal_div' id='modal-modal-description'>
                    <Form
                        name='basic'
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
                            name='file'
                            label='File'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Select Your file!',
                                },
                            ]}
                        >
                            <Upload
                                name='file'
                                multiple={false}
                                beforeUpload={() => false}
                                accept='image/png, image/jpeg'
                                onChange={normFile}
                                fileList={fileList}
                            >
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item
                            label='Description'
                            name='description'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your description!',
                                },
                            ]}
                        >
                            <TextArea />
                        </Form.Item>
                        <Button loading={loading} htmlType='submit' type='primary'  >Add Item</Button>
                    </Form>
                </div>
            </Modal>
        </div>

    )
}


// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
import { Button } from '@mui/material';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { get_Img_url } from '../../Redux/actions'
import { useState } from "react"
import { POST } from '../../utils/apis'

function UploadImageComponent() {
    console.log('mysatte', useSelector((state) => state))
    const dispatch = useDispatch()
    const [imageSelected, setImageSelected] = useState("")

    const upload_img = () => {
        const formdata = new FormData()
        formdata.append("file", imageSelected)
        formdata.append("upload_preset", "ml_default")

        // for (const value of formdata.values()) {
        //     console.log("OBJ", value)
        // }
        // console.log('path', formdata)
        // console.log('imageSelected', imageSelected)
        axios.post(`${POST?.UPLOADIMAGE}`, formdata)
            .then((res) => {
                if (res.data.success === true) {
                    alert('succesfully uploaded')
                    console.log("res.result", res.data.result);
                    dispatch(get_Img_url(res.data.result))
                }
            })
            .catch((err) => {
                console.log('err===>', err)
            })

    }
    return (
        <div className='uploadImage-mainDiv'>

            <input type='file'
                onChange={(e) => { setImageSelected(e?.target?.files[0]) }}
            />
            <Button type="primary" onClick={() => { upload_img() }}>Upload</Button>
        </div >
    )
}

export default UploadImageComponent;
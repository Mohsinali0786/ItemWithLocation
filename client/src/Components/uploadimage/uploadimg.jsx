// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import { Button } from 'antd';
// import axios from "axios"
// import { useDispatch, useSelector } from 'react-redux';
// import { get_Img_url } from '../../Redux/actions'
// import { useState } from "react"
// import { POST } from '../../utils/apis'
// import Swal from 'sweetalert2';

function UploadImageComponent({formdata,setformdata}) {
    // console.log('mysatte', useSelector((state) => state))
    // const dispatch = useDispatch()
    const upload_img = (e) => {
        console.log(e?.target?.files[0],"ee")
        const myformdata = new FormData()
        myformdata.append("file", e?.target?.files[0])
        myformdata.append("upload_preset", "ml_default")
        setformdata(myformdata)

        // for (const value of myformdata.values()) {
        //     console.log("OBJ", value)
        // }

    }
    return (
        <div className='uploadImage-mainDiv'>
            <p className='labels'>Image</p>
            <input type='file'
                onChange={(e) => { upload_img(e) }}

            />
        </div >
    )
}

export default UploadImageComponent;
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios';
// import { POST } from '../../utils/apis'

// const UploadImage = () => {
//     const [fileList,setFileList]=useState([])
//     const normFile = (e) => {
//         setFileList([])

//         if (e?.fileList?.length && e?.file?.type !== 'image/png' && e?.file?.type !== 'image/jpeg') {
//             errorMessage('You can only upload Images!')
//             return []
//         }

//         if (Array.isArray(e)) {
//             return e
//         }
        
//         console.log('e',e.file)
//         e?.fileList?.length ? setFileList([...[e?.file]]) : setFileList([])
//         axios.post(`${POST?.UPLOADIMAGE}`, fileList)
//         .then((res) => {
//             if (res.data.success === true) {
//                 // alert('succesfully uploaded')
//                 // console.log("res.result", res.data.result);
//                 dispatch(get_Img_url(res.data.result))
//                 Swal.fire({
//                     icon:'success',
//                     text:res.data.message
//                 })
//             }
//         })
//         .catch((err) => {
//             Swal.fire({
//                 icon:'error',
//                 text:res.data.message
//             })
//             console.log('err===>', err)
//         })

//         return e && [e.file]
         
//     }
//     return (
//         // <Form.Item
//         //     name='file'
//         //     label='Image'
//         // >
//             <Upload
//                 name='file'
//                 multiple={false}
//                 beforeUpload={() => false}
//                 accept='image/png, image/jpeg'
//                 onChange={normFile}
//                 fileList={fileList}
//             >
//                 <Button icon={<UploadOutlined />}>Click to upload</Button>
//             </Upload>
//         // </Form.Item>

//     )
// };
// export default UploadImage;
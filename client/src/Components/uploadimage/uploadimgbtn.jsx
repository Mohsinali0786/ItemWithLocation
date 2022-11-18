// import { UploadOutlined } from '@ant-design/icons';
// import { Button, message, Upload } from 'antd';
// import React from 'react';
// const props = {
//   name: 'file',
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   headers: {
//     authorization: 'authorization-text',
//   },
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//         console.log('info.file',info.file + "info.fileList",info.fileList);
//     }
//     if (info.file.status === 'done') {
//         // axios.post(`${POST?.UPLOADIMAGE}`, formdata)
//         // .then((res) => {
//         //     if (res.data.success === true) {
//         //         alert('succesfully uploaded')
//         //         console.log("res.result", res.data.result);
//         //         dispatch(get_Img_url(res.data.result))
//         //     }
//         // })
//         // .catch((err) => {
//         //     console.log('err===>', err)
//         // })
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };
// const UploadImage = () => (
//   <Upload {...props}>
//     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//   </Upload>
// );
// export default UploadImage;
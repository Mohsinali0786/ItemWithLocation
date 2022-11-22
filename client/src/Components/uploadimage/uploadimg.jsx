function UploadImageComponent({formdata,setformdata}) {
    const upload_img = (e) => {
        console.log(e?.target?.files[0],"ee")
        const myformdata = new FormData()
        myformdata.append("file", e?.target?.files[0])
        myformdata.append("upload_preset", "ml_default")
        setformdata(myformdata)
    }
    return (
        <div className='uploadImage-mainDiv'>
            <input type='file'
                onChange={(e) => { upload_img(e) }}
            />
        </div >
    )
}

export default UploadImageComponent;
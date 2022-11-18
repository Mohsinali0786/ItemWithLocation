import { useState } from "react";
import { Button, Modal } from 'antd';

export default function ItemModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState('')
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        // console.log("description", description)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div >
            <Button className="modal_btn" type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Add Your Item" okText={"Add Item"} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className='img_div'>
                </div>
                <div className='modal_div' id='modal-modal-description'>
                    <textarea className='text_area' rows="4" cols="70" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                </div>
            </Modal>
        </div>

    )
}


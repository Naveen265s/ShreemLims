import React from 'react'
import { Modal } from 'react-bootstrap'

export default function UploadModal(props) {
    return (
        <div>
            <Modal show={props.show}>
                <Modal.Body>
                    <Modal.Header  onClick={props.onHide} closeButton></Modal.Header>
                 <h1>Uploade modals </h1>  
                </Modal.Body>
            </Modal>
        </div>
    )
}

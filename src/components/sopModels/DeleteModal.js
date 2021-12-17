import React from 'react'
import { Modal } from 'react-bootstrap'

export default function DeleteModal(props) {
    return (
        <>
            <Modal show={props.show}>
                <Modal.Body>
                    <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                    <h1>Deleting modal</h1>
                    </Modal.Body>

                </Modal>
            
        </>
    )
}

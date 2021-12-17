import React from 'react'
import { Modal } from 'react-bootstrap'

export default function ShareModal(props) {
    return (
        <div>
            <Modal show={props.show}  onClick={props.onHide}>
                <Modal.Header closeButton>
                   
                </Modal.Header>
                <Modal.Body>
                <h1>Share MOdals</h1>
                    </Modal.Body>
            </Modal>
        </div>
    )
}

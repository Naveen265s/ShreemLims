import React from "react";
import { Modal } from 'react-bootstrap'

export default function SettingModal(props) {
    return (
        <div>
            <Modal show={props.show}>
                <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <h1>Seting modal</h1>
                </Modal.Body>
            </Modal>
        </div>
    );
}

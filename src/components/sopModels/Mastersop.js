import React from 'react';
import { Modal } from 'react-bootstrap';

export default function Mastersop(props) {
    return (
        <>
            <Modal show={props.show}>
            <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <div>
                        snjgrkgnrjngrj
                    </div>
                </Modal.Body>
            </Modal>
            
        </>
    )
}

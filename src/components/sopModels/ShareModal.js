import React from "react";
import { Modal } from "react-bootstrap";

export default function ShareModal(props) {
    return (
        <>
            <Modal show={props.show} onClick={props.onHide}>
                <Modal.Header closeButton>Share</Modal.Header>
                <Modal.Body>
                    <div>
                        <h4>Share the folder with the team</h4>
                        <select>
                            <option>All</option>
                            <option>HOD</option>
                            <option>Operator</option>
                        </select>
                    </div>                  
                </Modal.Body>
            </Modal>
        </>                                              
    );
}

import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function CreateSop(props) {
    return (
        <div>
            <Modal show={props.show}>
                <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <div className="create_sop">
                        <div className="create_sop_div">
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

import React from "react";
import { Modal,Button } from "react-bootstrap";
import "./SopModels.scss"

export default function ShareModal(props) {
    return (
        <>
            <Modal dialogClassName="sharemodal" show={props.show}>
                <Modal.Header  onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <p className="text-center">Share</p>
                    <div>
                        <h4>Share the folder with the team</h4>
                        <select>
                            <option>All</option>
                            <option>HOD</option>
                            <option>Operator</option>
                        </select>
                       
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button className="btn btn-success" >Save</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./SopModels.scss";

export default function CreateSop(props) {
    return (
        <>
            <Modal show={props.show} dialogClassName="createSop">
                <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <div className="create_sop">
                        <h3>Create Sop</h3>
                        <form>
                            <fieldset>
                                <div className="field buildSop">
                                    <label>Build Sop</label>
                                    <input type="text" placeholder="Build Sop" />
                                </div>
                                <div className="field uploadFile">
                                    <label>Upload For Desktop</label>
                                    <input
                                        type="file"
                                        placeholder="Upload For Desktop"
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onHide}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

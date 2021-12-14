import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function Create_Sop_type(props) {
    return (
        <div>
            <Modal show={props.show} dialogClassName="createSopType">
                <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body>
                    <h3>Create SOP Type</h3>
                    <form>
                        <fieldset>
                            <div className="field">
                                <label>SOP Type</label>
                                <input
                                    type="text"
                                    placeholder="Adminstrative SOP"
                                />
                            </div>
                            <div className="field">
                                <label>Description</label>
                                <input type="text" placeholder="Description" />
                            </div>
                        </fieldset>
                        <div className="actions">
                            <Button>Create</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

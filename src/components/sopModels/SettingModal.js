import React from "react";
import {
    Form,
    Modal,
    DropdownButton,
    ButtonGroup,
    Dropdown,
    Button,
} from "react-bootstrap";
import "./SettingModal.scss";

export default function SettingModal(props) {
    return (
        <div className="setting_modal">
            <Modal show={props.show}>
                <Modal.Header onClick={props.onHide} closeButton>
                    Folder Setting
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div>
                            <div className="dropdown">
                                <label>Visible</label>

                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>

                            <div className="password">
                                <label>Password Protected</label>
                                <div className="radio">
                                    <input name="pass" type="radio" />
                                    <label>Yes</label>
                                    <input name="pass" type="radio" />
                                    <label>No</label>
                                </div>
                                <input type="password" />
                            </div>
                            <div className="rename">
                                <label>Rename</label>
                                <input type="text" placeholder="Eqipment SOP" />
                            </div>
                            <Button variant="secondary" >Cancel</Button>
                            <Button variant="primary">Save</Button>
                        </div>
                    </Form>
                </Modal.Body>
                
            </Modal>
        </div>
    );
}

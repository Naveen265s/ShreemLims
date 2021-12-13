import React from 'react'
import {Button,Modal} from 'react-bootstrap'

export default function Create_Sop_type(props) {
    return (
        <div>
            <Modal show={props.show}>
                <Modal.Header onClick={props.onHide} closeButton></Modal.Header>
                <Modal.Body><h3>Create SOP Type</h3>
                <div>
                <label>SOP Type</label>
                <input type="text" placeholder="Adminstrative SOP"/> 
                </div>
                <div>
                <label>Description</label> 
                <input type="text"/>
                </div>
                <div>
                    <Button>Create</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

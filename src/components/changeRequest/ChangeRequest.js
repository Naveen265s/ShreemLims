import React from "react";
import "./ChangeRequest.scss";
import Image from "./assests/image.png";

function ChangeRequest() {
    return (
        <div>
            <div className="change_request p-4 text-center">
                <img src={Image} alt="change request" />
                <h2 className="p-2 text-center">ChangeRequest</h2>
                <div className="change_request_details d-flex justify-content-center">
                    <div className="p-2 text-center">
                        <h4>23</h4>
                        <label>To-Do</label>
                    </div>
                    <div className="p-2 text-center">
                        <h4>23</h4>
                        <label>Active</label>
                    </div>
                    <div className="p-2 text-center">
                        <h4>23</h4>
                        <label>Done</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeRequest;

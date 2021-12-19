import React from "react";
import Delete from "./assets/delete.png";
import Setting from "./assets/setting.png";
import Share from "./assets/share.png";
import Upload from "./assets/upload.png";
import "./SopFolderLayer.scss";

function SopFolderLayer() {
    return (
        <div className="sop_folder_layer">
            <ul className="d-flex justify-content-around">
                <li>
                    <img src={Upload} alt="delete" />
                </li>
                <li>
                    <img src={Share} alt="delete" />
                </li>
                <li>
                    <img src={Setting} alt="delete" />
                </li>
                <li>
                    <img src={Delete} alt="delete" />
                </li>
            </ul>
            <div className="color_section">
                <h3>Colors</h3>
                <ul>
                    <li>
                        <label>Orange</label>
                        <input type="color" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SopFolderLayer;

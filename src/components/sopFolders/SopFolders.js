import { React, useState } from "react";
import master from "./assets/mastersop.png";
import Mastersop from "../sopModels/Mastersop";
import ActionBtn from "./assets/action.png";
import Delete from "./assets/delete.png";
import Setting from "./assets/setting.png";
import Share from "./assets/share.png";
import Upload from "./assets/upload.png";

import "./SopFolders.scss";

function SopFolders() {
    const [masterModal, setmasterModal] = useState(false);
    const [sopFolderSett, setSopFolderSett] = useState(false);

    const handleOnClick = () => {
        setSopFolderSett(true);
    };
    return (
        <div>
            <div className="sop_folder">
                <button className="action sopFolder_btn" onClick={handleOnClick}>
                    <img src={ActionBtn} alt="ActionBtn" />
                </button>
                <div className="sop_cont">
                    <img
                        onClick={() => {
                            setmasterModal(true);
                        }}
                        src={master}
                        alt="sop"
                    />
                    <div>
                        <h3>Master Sop</h3>
                        <p>Modified Date</p>
                    </div>
                </div>
                <div className="sop_folder_layer">
                    <ul>
                        <li>
                            <img src={Upload} alt="delete"/>
                        </li>
                        <li>
                            <img src={Share} alt="delete"/>
                        </li>
                        <li>
                            <img src={Setting} alt="delete"/>
                        </li>
                        <li>
                            <img src={Delete} alt="delete"/>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="sop_folder active">
                <button className="action sopFolder_btn" onClick={handleOnClick}>
                    <img src={ActionBtn} alt="ActionBtn" />
                </button>
                <div className="sop_cont">
                    <img
                        onClick={() => {
                            setmasterModal(true);
                        }}
                        src={master}
                        alt="sop"
                    />
                    <div>
                        <h3>Master Sop</h3>
                        <p>Modified Date</p>
                    </div>
                </div>
                <div className="sop_folder_layer" >
                    <ul>
                        <li>
                            <img src={Upload} alt="delete"/>
                        </li>
                        <li>
                            <img src={Share} alt="delete"/>
                        </li>
                        <li>
                            <img src={Setting} alt="delete"/>
                        </li>
                        <li>
                            <img src={Delete} alt="delete"/>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <Mastersop show={masterModal} onHide={() => setmasterModal()} />
        </div>
    );
}

export default SopFolders;

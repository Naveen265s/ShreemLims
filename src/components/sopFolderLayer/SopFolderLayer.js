import React, { useState } from "react";
import Delete from "./assets/delete.png";
import Setting from "./assets/setting.png";
import Share from "./assets/share.png";
import Upload from "./assets/upload.png";
import "./SopFolderLayer.scss";
import UploadModal from "../sopModels/UploadModal";
import ShareModal from "../sopModels/ShareModal";
import SettingModal from "../sopModels/SettingModal";
import DeleteModal from "../sopModels/DeleteModal";

function SopFolderLayer() {
    const [shareModal, setShareModal] = useState(false);
    const [mastersopuploade, setmastersopuploade] = useState(false);
    const [settingmodal, setsettingmodal] = useState(false);
    const [deletemodal, setdeletemodal] = useState(false);
    return (
        <>
            <div className="sop_folder_layer">
                <ul className="d-flex justify-content-around">
                    <li className="upload">
                        <button
                            onClick={() => {
                                setmastersopuploade(true);
                            }}
                        >
                            <img src={Upload} alt="delete" />
                        </button>
                    </li>
                    <li className="share">
                        <button
                            onClick={() => {
                                setShareModal(true);
                            }}
                        >
                            <img src={Share} alt="delete" />
                        </button>
                    </li>
                    <li className="setting">
                        <button
                            onClick={() => {
                                setmastersopuploade(true);
                            }}
                        >
                            <img src={Setting} alt="delete" />
                        </button>
                    </li>
                    <li className="delete">
                        <button
                            onClick={() => {
                                setdeletemodal (true);
                            }}
                        >
                            <img src={Delete} alt="delete" />
                        </button>
                    </li>
                </ul>
                <div className="color_section">
                    <h3>Colors</h3>
                    <ul>
                        <li className="sop_orange">
                            <label for="orange">Orange</label>
                            <input type="color" id="orange"/>
                        </li>
                        <li className="sop_glass active">
                            <label for="glass">Glass</label>
                            <input type="color" id="glass"/>
                        </li>
                        <li className="sop_green">
                            <label for="green">Green</label>
                            <input type="color" id="green"/>
                        </li>
                        <li className="sop_lightpink">
                            <label for="lightpink">Light Pink</label>
                            <input type="color" id="lightpink"/>
                        </li>
                        <li className="sop_lightblue">
                            <label for="lightblue">Light Blue</label>
                            <input type="color" id="lightblue"/>
                        </li>
                        <li className="sop_blue">
                            <label for="blue">Blue</label>
                            <input type="color" id="blue"/>
                        </li>
                        <li className="sop_pink">
                            <label for="pink">Pink</label>
                            <input type="color" id="pink"/>
                        </li>
                        <li className="sop_yellow">
                            <label for="yellow">Yellow</label>
                            <input type="color" id="yellow"/>
                        </li>
                    </ul>
                </div>
            </div>
            <DeleteModal show={deletemodal} onHide={() => setdeletemodal()} />
            <SettingModal
                show={settingmodal}
                onHide={() => setsettingmodal()}
            />
            <ShareModal show={shareModal} onHide={() => setShareModal()} />
            <UploadModal
                show={mastersopuploade}
                onHide={() => setmastersopuploade()}
            />
        </>
    );
}

export default SopFolderLayer;

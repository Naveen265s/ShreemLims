import { React, useState } from "react";
import Orange from "./assets/OrangeSopfolder.svg";
import Pink from "./assets/pinkSopfolder.svg";
import LightPink from "./assets/lightPinkSopfolder.svg";
import Green from "./assets/greenSopfolder.svg";
import Mastersop from "../sopModels/Mastersop";
import ActionBtn from "./assets/action.png";
import Delete from "./assets/delete.png";
import Setting from "./assets/setting.png";
import Share from "./assets/share.png";
import Upload from "./assets/upload.png";
import UploadModal from "../sopModels/UploadModal";
import ShareModal from "../sopModels/ShareModal";
import SettingModal from "../sopModels/SettingModal";
import DeleteModal from "../sopModels/DeleteModal";
import SopFolderSVG from "./SopFolderSVG";

import "./SopFolders.scss";

function SopFolders() {
    const [masterModal, setmasterModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [mastersopuploade, setmastersopuploade] = useState(false);
    const [settingmodal, setsettingmodal] = useState(false);
    const [deletemodal, setdeletemodal] = useState(false);

    return (
        <div className="sop_sec row">
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        {/* <SopFolderSVG /> */}
                        <img
                            onClick={() => {
                                setmasterModal(true);
                            }}
                            src={Orange}
                            alt="sop"
                        />
                        <div>
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
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
                </div>
            </div>
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2 active">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        <img
                            onClick={() => {
                                setmasterModal(true);
                            }}
                            src={Green}
                            alt="sop"
                        />
                        <div>
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    <div className="sop_folder_layer">
                        <ul className="d-flex justify-content-around">
                            <li>
                                <img
                                    onClick={() => {
                                        setmastersopuploade(true);
                                    }}
                                    src={Upload}
                                    alt="delete"
                                />
                            </li>
                            <li>
                                <img
                                    onClick={() => {
                                        setShareModal(true);
                                    }}
                                    src={Share}
                                    alt="delete"
                                />
                            </li>
                            <li>
                                <img
                                    onClick={() => {
                                        setsettingmodal(true);
                                    }}
                                    src={Setting}
                                    alt="delete"
                                />
                            </li>
                            <li>
                                <img
                                    onClick={() => setdeletemodal(true)}
                                    src={Delete}
                                    alt="delete"
                                />
                            </li>
                        </ul>
                        <div className="color_section">
                            <h3>Colors</h3>
                            <ul>
                                <li>
                                    <label>Orange</label>
                                    <input type="color" value="red"/>
                                </li>
                            </ul>
                        </div>
                    </div>
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
            <Mastersop show={masterModal} onHide={() => setmasterModal()} />
        </div>
    );
}

export default SopFolders;

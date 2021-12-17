import { React, useState } from "react";
import master from "./assets/mastersop.png";
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

import "./SopFolders.scss";

function SopFolders() {
    const [masterModal, setmasterModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);
    const [mastersopuploade, setmastersopuploade] = useState(false);
    const [settingmodal, setsettingmodal] = useState(false);
    const [deletemodal,setdeletemodal]=useState(false)

    return (
        <div className="sop_sec">
            <div className="sop_folder">
                <button className="action sopFolder_btn">
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
                </div>
            </div>
            <div className="sop_folder active">
                <button className="action sopFolder_btn">
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
                            <img onClick={()=>{setsettingmodal(true)

                            }} src={Setting} alt="delete" />
                        </li>
                        <li>
                            <img onClick={()=>setdeletemodal(true)} src={Delete} alt="delete" />
                        </li>
                    </ul>
                </div>
            </div>
            <DeleteModal show={deletemodal} onHide={()=>setdeletemodal()}/>
            <SettingModal show={settingmodal} onHide={()=>setsettingmodal()} />
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

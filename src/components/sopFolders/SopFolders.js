import { React, useState } from "react";
import Orange from "./assets/OrangeSopfolder.svg";
import Pink from "./assets/pinkSopfolder.svg";
import LightPink from "./assets/lightPinkSopfolder.svg";
import Green from "./assets/greenSopfolder.svg";
import Mastersop from "../sopModels/Mastersop";
import ActionBtn from "./assets/action.png";
import ADDFolder from "./assets/AddFolder.png";
import "./SopFolders.scss";
import SopFolderLayer from "../sopFolderLayer/SopFolderLayer";

function SopFolders() {
    const [masterModal, setmasterModal] = useState(false);
    const [modalIndex, setModalIndex] = useState(null);

    return (
        <div className="sop_sec row">
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img onClick={() => setModalIndex(0)} src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        <div className="sop_folder_count">
                            <figure>
                                <img
                                    onClick={() => {
                                        setmasterModal(true);
                                    }}
                                    src={Orange}
                                    alt="sop"
                                />
                            </figure>
                            <h2 className="sop_count">10</h2>
                        </div>
                        <div className="sop_details">
                            <h3>Master Sop1</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    {modalIndex === 0 && <SopFolderLayer /> }
                </div>
            </div>
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2 active">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img onClick={() => setModalIndex(1)} src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        <div className="sop_folder_count">
                            <figure>
                                <img
                                    onClick={() => {
                                        setmasterModal(true);
                                    }}
                                    src={Green}
                                    alt="sop"
                                />
                            </figure>
                            <h2 className="sop_count">10</h2>
                        </div>
                        <div className="sop_details">
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    {modalIndex === 1 && <SopFolderLayer /> }
                </div>
            </div>
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img onClick={() => setModalIndex(2)} src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        <div className="sop_folder_count">
                            <figure>
                                <img
                                    onClick={() => {
                                        setmasterModal(true);
                                    }}
                                    src={Pink}
                                    alt="sop"
                                />
                            </figure>
                            <h2 className="sop_count">10</h2>
                        </div>
                        <div className="sop_details">
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    {modalIndex === 2 && <SopFolderLayer /> }
                </div>
            </div>
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="sop_folder_inner">
                    <button className="action sopFolder_btn">
                        <img onClick={() => setModalIndex(3)} src={ActionBtn} alt="ActionBtn" />
                    </button>
                    <div className="sop_cont">
                        <div className="sop_folder_count">
                            <figure>
                                <img
                                    onClick={() => {
                                        setmasterModal(true);
                                    }}
                                    src={LightPink}
                                    alt="sop"
                                />
                            </figure>
                            <h2 className="sop_count">10</h2>
                        </div>
                        <div className="sop_details">
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    {modalIndex === 3 && <SopFolderLayer /> }
                </div>
            </div>
            <div className="sop_folder col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="sop_folder_inner">
                    <div className="sop_cont">
                        <div className="sop_folder_Add">
                            <figure>
                                <img
                                    onClick={() => {
                                        setmasterModal(true);
                                    }}
                                    src={ADDFolder}
                                    alt="sop"
                                />
                            </figure>
                        </div>
                        <div className="sop_details">
                            <h3>Master Sop</h3>
                            <p>Modified Date</p>
                        </div>
                    </div>
                    {modalIndex === 4 && <SopFolderLayer /> }
                </div>
            </div>
            <Mastersop show={masterModal} onHide={() => setmasterModal()} />
        </div>
    );
}

export default SopFolders;
import { React, useState } from "react";
import "./Sop.scss";
import sop from "./assets/sop.png";
import workflow from "./assets/workflow.png";
import batch from "./assets/batch.png";
import qms from "./assets/qms.png";
import addsoptype from "./assets/addsoptype.png";
import addsop from "./assets/addsop.png";
import sopList from "./assets/sop-list.png";
import sopGrid from "./assets/sop-grid.png";
import CreateSoptype from "../sopModels/CreateSoptype";
import CreateSop from "../sopModels/CreateSop";
import SopFolders from "../sopFolders/SopFolders";
export default function Sop() {
    const [openModal, setopenmodal] = useState(false);
    const [openModal1, setopenmodal1] = useState(false);

    return (
        <div className="container-fluid">
            <div className="sop-cont d-flex  justify-content-center">
                <div class="sop">
                    <button>
                        <img src={workflow} alt="ActionBtn" />
                        <span>WorkFlow</span>
                    </button>
                </div>
                <div class="sop">
                    <button>
                        <img src={sop} alt="sop" />
                        <span>SOP</span>
                    </button>
                </div>
                <div class="sop">
                    <button>
                        <img src={batch} alt="batch" />
                        <span>Batch</span>
                    </button>
                </div>
                <div class="sop">
                    <button>
                        <img src={qms} alt="qms" />
                        <span>QMS</span>
                    </button>
                </div>
            </div>
            <div className="sop-add">
                <div className="sop-add_cont d-flex  justify-content-between">
                    <ul className="sop_btn">
                        <li className="addsop_type ">
                            <button
                                onClick={() => {
                                    setopenmodal(true);
                                }}
                            >
                                <img src={addsoptype} alt="sop" />
                                <span>Add SOP Type</span>
                            </button>
                            <CreateSoptype
                                show={openModal}
                                onHide={() => {
                                    setopenmodal(false);
                                }}
                            />
                        </li>

                        <li className="addsop">
                            <button
                                onClick={() => {
                                    setopenmodal1(true);
                                }}
                            >
                                <img src={addsop} alt="sop" />
                                <span>Add SOP</span>
                            </button>
                        </li>
                    </ul>
                    <ul className="sop_list_grid">
                        <li>
                            <img src={sopList} alt="sop" />
                            <strong>list</strong>
                        </li>
                        <li>
                            <img src={sopGrid} alt="sop" />
                            <strong>grid</strong>
                        </li>
                    </ul>
                </div>
                <CreateSop
                    show={openModal1}
                    onHide={() => setopenmodal1(false)}
                />
            </div>

            <div className="sop_body">
                <SopFolders />
            </div>
        </div>
    );
}

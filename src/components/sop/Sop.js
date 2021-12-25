import { React, useState } from "react";
import "./Sop.scss";
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
        <div className="container-fluid sop_container">
            <div className="sop-add row ">
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

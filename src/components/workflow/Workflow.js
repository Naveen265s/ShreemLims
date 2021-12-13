import { React, useState } from "react";
import "./Workflow.scss";
import workflow from "./assets/workflow.png";
import sop from "./assets/sop.png";
import batch from "./assets/batch.png";
import qms from "./assets/qms.png";
import addsoptype from "./assets/addsoptype.png";
import addsop from "./assets/addsop.png";
import master from "./assets/mastersop.png";
import CreateSoptype from "../Alert_model/CreateSoptype";
import CreateSop from "../Alert_model/CreateSop";
import Mastersop from "../Alert_model/Mastersop";
export default function Workflow() {
    const [openModal, setopenmodal] = useState(false);
    const [openModal1, setopenmodal1] = useState(false);
    const [master_modal, setmaster_modal] = useState(false);

    return (
        <div className="contaiiner-fluid">
            <div className="workflow-cont">
                <div class="col workflow">
                    <img src={workflow} alt="ActionBtn" /> <span>Workflow</span>
                </div>
                <div class="col workflow">
                    <img src={sop} alt="sop" />
                    <span>SOP</span>
                </div>
                <div class="col workflow">
                    <img src={batch} alt="batch" />
                    <span>Batch</span>
                </div>
                <div class="col workflow">
                    <img src={qms} alt="qms" />
                    <span>QMS</span>
                </div>
            </div>
            <div className="workflow-add">
                <div className="addsop_type ">
                    <div
                        onClick={() => {
                            setopenmodal(true);
                        }}
                    >
                        <img src={addsoptype} alt="sop" />
                        <span>Add SOP Type</span>
                    </div>
                    <CreateSoptype show={openModal} onHide={()=>{setopenmodal(false)}} />
                </div>

                <div className="addsop">
                    <div
                        onClick={() => {
                            setopenmodal1(true);
                        }}
                    >
                        <img src={addsop} alt="sop" /> <span>Add SOP</span>
                    </div>
                </div>
                <CreateSop
                    show={openModal1}
                    onHide={() => setopenmodal1(false)}
                />
            </div>

            <div className="workflow_body">
                <div className="master_sop">
                    <img
                        onClick={() => {
                            setmaster_modal(true);
                        }}
                        src={master}
                        alt="sop"
                    />
                </div>
                <Mastersop show={master_modal} onHide={()=>setmaster_modal()}/>
            </div>
        </div>
    );
}

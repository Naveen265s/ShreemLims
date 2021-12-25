import { React, useState } from "react";
import sopList from "./assets/sop-list.png";
import sopGrid from "./assets/sop-grid.png";
import CreateSop from "../sopModels/CreateSop";
import SopFolders from "../sopFolders/SopFolders";

function SopFolderInnerPage() {
    const [openModal, setopenmodal] = useState(false);
    const [openModal1, setopenmodal1] = useState(false);

    return (
        <div className="container-fluid sop_container">

            <div className="sop-add row ">
                <div className="sop-add_cont d-flex  justify-content-between">
                    
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

export default SopFolderInnerPage;
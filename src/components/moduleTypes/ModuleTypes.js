import React from "react";
import "./ModuleTypes.scss";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function ModuleTypes() {
    return (
        <div className="module_types">
            <ul >
                <li className="workflow">
                    <Link to="/workflow" >Workflow</Link>
                </li>
                <li className="sop">
                    <Link to="/sop" >Sop</Link>
                    {/* <Outlet/> */}
                </li>
                <li className="batch">
                    <Link to="/batch" >Batch</Link>
                </li>
                <li className="qms">
                    <Link to="/qms" >QMS</Link>
                </li>
            </ul>
        </div>
    );
}

export default ModuleTypes;

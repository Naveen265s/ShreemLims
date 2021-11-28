import React from "react";
import "./BreadCrumbs.scss";

function BreadCrumbs() {
    return (
        <div>
            <div className="breadcrumbs">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#home">DashBoard</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BreadCrumbs;

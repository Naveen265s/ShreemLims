import React from "react";
import "./BreadCrumbs.scss";
import{useNavigate, useLocation } from "react-router-dom";


function BreadCrumbs() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleHome = () => {
        navigate("/");
    }
    return (
        <div>
            <div className="breadcrumbs">
                <ul>
                    <li>
                        <button onClick={handleHome}>Home</button>
                    </li>
                    <li>
                        <button >{location.pathname.slice(1)}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BreadCrumbs;

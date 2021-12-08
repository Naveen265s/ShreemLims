import React from "react";
import "./BreadCrumbs.scss";
import{useNavigate} from "react-router-dom";

function BreadCrumbs() {
    const navigate = useNavigate();
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
                        <button >DashBoard</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BreadCrumbs;

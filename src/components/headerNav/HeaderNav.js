import React from "react";
import logo from "./assets/Logo.png";
import logout from "./assets/Logout.png";
import bell from "./assets/Bell.png";
import home from "./assets/Home.png";
import "./HeaderNav.scss";
import { useNavigate } from "react-router-dom";


function HeaderNav() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/DashBoard');
    }
    return (
        <div className="container-fluid">
            <header className="App-header row justify-content-between">
                <div className="logo p-3 col-sm-12 col-lg-3">
                    <button
                        className="App-link"
                        onClick={handleClick}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logo}
                            className="App-logo"
                            alt="logo"
                            width="70px"
                        />
                        <h2>Shreem LIMS</h2>
                    </button>
                </div>
                <div className="search p-3 col-sm-12 col-lg-6 d-flex justify-content-center">
                    <div>
                        <label>Search</label>
                        <input type="text" placeholder="Search" id="inputsearch"/>
                    </div>
                </div>
                <div className="userList p-2 col-sm-12 col-lg-3 d-flex justify-content-end">
                    <ul>
                        <li className="p-3">
                            <a href="#home" title="Home">
                                <figure>
                                    <img src={home} alt="Home" />
                                </figure>
                            </a>
                        </li>
                        <li className="p-3">
                            <a href="#notifications" title="Notifications">
                                <figure>
                                    <img src={bell} alt="Bell" />
                                </figure>
                            </a>
                        </li>
                        <li className="p-3">
                            <button title="Logout" id="sign-details">
                                <span>JD</span>
                            </button>
                        </li>
                        <li className="p-3">
                            <button title="Logout">
                                <img src={logout} alt="Logout" />
                            </button>
                            
                        </li>
                    </ul>
                </div>
            </header>
       
        </div>
    );
}

export default HeaderNav;

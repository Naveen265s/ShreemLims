import React from "react";
import logo from "./assets/Logo.png";
import logout from "./assets/Logout.png";
import bell from "./assets/Bell.png";
import home from "./assets/Home.png";
import "./HeaderNav.scss";

function HeaderNav() {
    return (
        <div className="container-fluid">
            <header className="App-header d-flex justify-content-between">
                <div className="logo p-3">
                    <a
                        className="App-link"
                        href="https://reactjs.org"
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
                    </a>
                </div>
                <div className="search p-3">
                    <div>
                        <label>Search</label>
                        <input type="text" placeholder="Search" id="inputsearch"/>
                    </div>
                </div>
                <div className="userList p-2">
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

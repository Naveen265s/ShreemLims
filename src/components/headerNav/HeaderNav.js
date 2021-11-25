import React from "react";
import logo from "./assets/logo.png";
import logout from "./assets/Logout.png";
import bell from "./assets/Bell.png";
import home from "./assets/Home.png";
import "./HeaderNav.scss";

function HeaderNav() {
    return (
        <div className="container">
            <header className="App-header d-flex justify-content-between">
                <div className="logo p-2">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        width="70px"
                    />
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Shreem LIMS
                    </a>
                </div>
                <div className="search p-4">
                    <div>
                        <label>Search</label>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="userList">
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
                            <button title="Logout" id="logout">
                                <span>
                                    JD
                                </span>
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

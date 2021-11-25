import React from "react";
import logo from "./assets/logo.svg";

function HeaderNav() {
    return (
        <div>
            <header className="App-header d-flex justify-content-between">
                <div className="logo p-1">
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
                <div className="userList">
                    <ul>
                        <li className="p-3">
                            <a href="#home" title="Home">Home</a>
                        </li>
                        <li className="p-3">
                            <a href="#notifications" title="Notifications">Notifications</a>
                        </li>
                        <li className="p-3">
                            <a href="#user Name" title="User Name">User Name</a>
                        </li>
                        <li className="p-3">
                            <a href="#logout" title="Logout">Logout</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default HeaderNav;

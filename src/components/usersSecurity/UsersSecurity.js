import React from "react";
import "./UsersSecurity.scss";
import ArchiveIcon from "./assets/Archive_Icon.png";
import DeleteIcon from "./assets/Delete_Icon.png";
import EditIcon from "./assets/Edit_Icon.png";
import NewIcon from "./assets/New_Icon.png";
import SecurityIcon from "./assets/Security_Icon.png";
import UserGroupsIcon from "./assets/User_Groups_Icon.png";
import UsersIcon from "./assets/Users_Icon.png";

function usersSecurity() {
    return (
        <div className="usersecurity">
            <div className="usersecurity_headerbtn">
                <div className="d-flex  justify-content-center">
                    <div>
                        <button>
                            <img src={SecurityIcon} alt="SecurityIcon" />
                            Security Role
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={UserGroupsIcon} alt="UserGroupsIcon" />
                            Users Groups
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={UsersIcon} alt="UsersIcon" />
                            Users
                        </button>
                    </div>
                </div>
            </div>
            <div className="usersecurity_inner">
                <div className="d-flex  justify-content-start ">
                    <div>
                        <button>
                            <img src={NewIcon} alt="NewIcon" />
                            New Icon
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={EditIcon} alt="EditIcon" />
                            Edit Icon
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={ArchiveIcon} alt="ArchiveIcon" />
                            Archive Icon
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={DeleteIcon} alt="DeleteIcon" />
                            Delete Icon
                        </button>
                    </div>
                </div>
                <div className="usersecurity_option">
                    <div>
                        <h3>Security Roles</h3>
                        <div>
                            <ul>
                                <li>
                                    <p>Super User</p>
                                </li>
                                <li>
                                    <p>Super User 2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="usersecurity_details">
                        <h3>Security Details</h3>
                        <div className="usersecurity_details_inner">
                            <div>
                                <h4>Attributes</h4>
                                <div>
                                    <ul>
                                        <li>
                                            <p>Sop</p>
                                        </li>
                                        <li>
                                            <p>Sop Type</p>
                                        </li>
                                        <li>
                                            <p>Users</p>
                                        </li>
                                        <li>
                                            <p>User Groups</p>
                                        </li>
                                        <li>
                                            <p>Security Roles</p>
                                        </li>
                                        <li>
                                            <p>Super User</p>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <table>
                                        <thead>
                                            <th>Create</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Archive</th>
                                            <th>Delete</th>
                                            <th>Print</th>
                                            <th>Run</th>
                                            <th>Upload</th>
                                            <th>Share</th>
                                        </thead>
                                        <tbody>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="create">
                                                    Create
                                                </label>
                                                <input
                                                    type="checkbox"
                                                    id="create"
                                                />
                                            </td>
                                            <td>
                                                <label for="upload">
                                                    Upload
                                                </label>
                                                <input
                                                    type="file"
                                                    id="upload"
                                                />
                                            </td>
                                            <td>
                                                <label for="share">
                                                    Share
                                                </label>
                                                <input
                                                    type="share"
                                                    id="share"
                                                />
                                            </td>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default usersSecurity;

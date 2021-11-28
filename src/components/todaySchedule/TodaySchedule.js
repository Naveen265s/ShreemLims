import React from "react";
import "./TodaySchedule.scss";
import ActionBtn from "./assets/action.png"

function TodaySchedule() {
    return (
        <div>
            <div className="today_schedule_sec">
                <h2>Today</h2>
                <div>
                    <ul>
                        <li className="d-flex justify-content-between align-items-center">
                            <div className="schedule_time">
                                <h4>23</h4>
                                <label>Mon</label>
                            </div>
                            <div>
                                <h4>Project Blue</h4>
                                <p>SOP Training </p>
                            </div>
                            <button><img src={ActionBtn} alt="ActionBtn" /></button>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                            <div className="schedule_time">
                                <h4>23</h4>
                                <label>Mon</label>
                            </div>
                            <div>
                                <h4>Project Blue</h4>
                                <p>SOP Training </p>
                            </div>
                            <button><img src={ActionBtn} alt="ActionBtn" /></button>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                            <div className="schedule_time">
                                <h4>23</h4>
                                <label>Mon</label>
                            </div>
                            <div>
                                <h4>Project Blue</h4>
                                <p>SOP Training </p>
                            </div>
                            <button><img src={ActionBtn} alt="ActionBtn" /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodaySchedule;

import React from "react";
import "./TrainingScheduleTable.scss";

function TrainingSchedule() {
    return (
        <div className="training_schedule">
            <div className="row">
                <h2 className="col-11">Training Schedule</h2>
            </div>
            <svg width="400" height="180">
                <title>Id</title>
                <g>
                    <text x="0" y="15" fill="blue">
                        06:00
                    </text>
                    <rect
                        x="0"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "white", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="50" y="15" fill="blue">
                        07:00
                    </text>
                    <rect
                        x="50"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "grey", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="100" y="15" fill="blue">
                        08:00
                    </text>
                    <rect
                        x="100"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "white", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="150" y="15" fill="blue">
                        09:00
                    </text>
                    <rect
                        x="150"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "grey", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="200" y="15" fill="blue">
                        10:00
                    </text>
                    <rect
                        x="200"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "white", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="250" y="15" fill="blue">
                        11:00
                    </text>
                    <rect
                        x="250"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "grey", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="300" y="15" fill="blue">
                        12:00
                    </text>
                    <rect
                        x="300"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "white", opacity: 0.2 }}
                    />
                </g>
                <g>
                    <text x="350" y="15" fill="blue">
                        13:00
                    </text>
                    <rect
                        x="350"
                        y="20"
                        width="50"
                        height="180"
                        style={{ fill: "grey", opacity: 0.2 }}
                    />
                </g>

                <g>
                    <rect
                        x="00"
                        y="30"
                        rx="10"
                        ry="10"
                        width="150"
                        height="20"
                        style={{ fill: "blue", opacity: 1 }}
                    />
                    <rect
                        x="01"
                        y="31"
                        rx="10"
                        ry="10"
                        width="100"
                        height="18"
                        style={{ fill: "white", opacity: 1 }}
                    />
                    <text x="10" y="44" fill="black">
                        Project A
                    </text>
                </g>
                <g>
                    <rect
                        x="100"
                        y="80"
                        rx="10"
                        ry="10"
                        width="150"
                        height="20"
                        style={{ fill: "pink", opacity: 1 }}
                    />
                    <rect
                        x="101"
                        y="81"
                        rx="10"
                        ry="10"
                        width="100"
                        height="18"
                        style={{ fill: "white", opacity: 1 }}
                    />
                    <text x="110" y="94" fill="black">
                        Project A
                    </text>
                </g>
                <g>
                    <rect
                        x="200"
                        y="55"
                        rx="10"
                        ry="10"
                        width="150"
                        height="20"
                        style={{ fill: "yellow", opacity: 1 }}
                    />
                    <rect
                        x="201"
                        y="56"
                        rx="10"
                        ry="10"
                        width="100"
                        height="18"
                        style={{ fill: "white", opacity: 1 }}
                    />
                    <text x="210" y="69" fill="black">
                        Project A
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default TrainingSchedule;

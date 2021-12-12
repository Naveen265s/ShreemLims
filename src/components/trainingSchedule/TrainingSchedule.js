import React from "react";
import { useState } from "react";
import "./TrainingSchedule.scss";
import ActionBtn from "./assets/action.png";
import TrainingScheduleTable from "../trainingScheduleTable/TrainingScheduleTable";
import BatchScheduleTable from "../batchScheduleTable/BatchScheduleTable";

function TrainingSchedule() {
    const [tableFalse, setTableFalse] = useState(false);

    const handleOnClick = () => {
        setTableFalse(true);
    };

    return (
        <div className="training_schedule_sec">
            <button className="action sche_btn" onClick={handleOnClick}>
                <img src={ActionBtn} alt="ActionBtn" />
            </button>

            {tableFalse ? <BatchScheduleTable /> : <TrainingScheduleTable />}
        </div>
    );
}

export default TrainingSchedule;

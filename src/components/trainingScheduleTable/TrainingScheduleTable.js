import React from "react";
import "./TrainingScheduleTable.scss";

function TrainingSchedule() {
    return (
        <div className="training_schedule">
            <div className="row">
                <h2 className="col-11">Training Schedule</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>6:00</th>
                        <th>7:00</th>
                        <th>8:00</th>
                        <th>9:00</th>
                        <th>10:00</th>
                        <th>11:00</th>
                        <th>12:00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TrainingSchedule;

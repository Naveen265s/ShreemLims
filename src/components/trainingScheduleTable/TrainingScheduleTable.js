import React from "react";
import ChartBgColumn from "../trainingScheduleTableInner/TrainingScheduleTableInner";
import ChartBarRow from "../trainingScheduleTableRow/ChartBarRow";
import "./TrainingScheduleTable.scss";

function TrainingSchedule({ data }) {
    const columns = [
        {
            x: 0,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "gray",
            title: "06:15",
        },
        {
            x: 75,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "red",
            title: "07:15",
        },
        {
            x: 150,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "gray",
            title: "08:15",
        },
        {
            x: 225,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "red",
            title: "09:15",
        },
        {
            x: 300,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "gray",
            title: "10:15",
        },
        {
            x: 375,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "red",
            title: "11:15",
        },
        {
            x: 450,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "gray",
            title: "12:15",
        },
        {
            x: 525,
            y: 15,
            width: 75,
            height: "100%",
            tcolor: "blue",
            rcolor: "red",
            title: "13:15",
        }
    ];
    const schedules=[
        {x:0, y:30,width: 150, height: 25, fill1:"blue", fill2:"white", title: "Project A", link:"#"},
        {x:0, y:110,width: 150, height: 25, fill1:"blue", fill2:"white", title: "Project A", link:"#"},
        {x:100, y:70,width: 150, height: 25, fill1:"pink", fill2:"white", title: "Project A", link:"#"},
        {x:100, y:150,width: 150, height: 25, fill1:"pink", fill2:"white", title: "Project A", link:"#"},
        {x:200, y:190,width: 150, height: 25, fill1:"yellow", fill2:"white", title: "Project A", link:"#"},
        {x:300, y:230,width: 150, height: 25, fill1:"yellow", fill2:"white", title: "Project A", link:"#"},
    ]
    return (
        <div className="training_schedule">
            <div className="row">
                <h2 className="col-11">Training Schedule</h2>
            </div>
            <svg width="100%" height="300px">
                {columns.map((column,idx) => (<ChartBgColumn {...{ data: column }} />))}
                {schedules.map((Schedule,idx) => (<ChartBarRow {...{ data: Schedule }} />))}
                
            </svg>
        </div>
    );
}

export default TrainingSchedule;

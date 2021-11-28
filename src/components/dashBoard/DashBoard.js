import React from "react";
import "./DashBoard.scss";
import DashBoardSlider from "../dashBoardSlider/DashBoardSlider";
import TrainingSchedule from "../trainingSchedule/TrainingSchedule";
import ChangeRequest from "../changeRequest/ChangeRequest";
import TeamMembers from "../teamMembers/TeamMembers";
import TodaySchedule from "../todaySchedule/TodaySchedule";

export default function SimpleSlider() {
    return (
        <div className="container-fluid">
            <div className="row dashboard_top mb-5">
                <div className="col-md-12 col-lg-6 dashboard_slider">
                    <DashBoardSlider />
                </div>
                <div className="col-md-12 col-lg-6 training_schedule">
                    <TrainingSchedule />
                </div>
            </div>
            <div className="row dashboard_bottom clearfix mb-5">
                <div className="col-md-12 col-lg-5 change_requests">
                  <ChangeRequest />
                </div>
                <div className="col-md-12 col-lg-3 team_members">
                  <TeamMembers />
                </div>
                <div className="col-md-12 col-lg-4 today_schedule">
                  <TodaySchedule />
                </div>
            </div>
        </div>
    );
}

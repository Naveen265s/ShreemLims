import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import DashBoard from "../dashBoard/DashBoard";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersSecurity from "../usersSecurity/UsersSecurity";
import PageNotFound from "../../PageNotFound";
import Sop from "../sop/Sop";
import ModuleTypes from "../moduleTypes/ModuleTypes";

function RoutesNavigates() {
    return (
        <Router>
            <HeaderNav />
            <BreadCrumbs />
            <Routes>
                <Route exact path="/DashBoard" element={<DashBoard />} />
                <Route path="/UsersSecurity" element={<UsersSecurity />} />
                <Route path="ModuleTypes" element={<ModuleTypes/>} />
                <Route path="/Sop" element={<Sop/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesNavigates;

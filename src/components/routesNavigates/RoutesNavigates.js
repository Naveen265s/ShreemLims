import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import DashBoard from "../dashBoard/DashBoard";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import UsersSecurity from "../usersSecurity/UsersSecurity";
import PageNotFound from "../../PageNotFound";
import Sop from "../sop/Sop";
import ModuleTypes from "../moduleTypes/ModuleTypes";
import SopFolderInnerPage from "../sopFolderInnerPage/SopFolderInnerPage";
import SopWrapper from "../sop/SopWrapper";

function RoutesNavigates() {
    return (
        <Router>
            <HeaderNav />
            <BreadCrumbs />
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="Dashboard" replace />}
                ></Route>
                <Route path="/DashBoard" element={<DashBoard />} />
                <Route path="/UsersSecurity" element={<UsersSecurity />} />

                <Route path="/sop" element={<SopWrapper/>}>
                    <Route path="/sop/" element={<Sop />} />
                    <Route
                        path="SopFolderInnerPage"
                        element={<SopFolderInnerPage />}
                    />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesNavigates;

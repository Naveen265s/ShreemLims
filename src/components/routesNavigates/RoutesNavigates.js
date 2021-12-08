import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import DashBoard from "../dashBoard/DashBoard";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import PageTitleHeader from "../pageTitleHeader/PageTitleHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersSecurity from "../users&security/UsersSecurity";
import PageNotFound from "../../PageNotFound";

function RoutesNavigates() {
    return (
        <Router>
            <HeaderNav />
            <PageTitleHeader />
            <BreadCrumbs />
            <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route path="/UsersSecurity" element={<UsersSecurity />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default RoutesNavigates;

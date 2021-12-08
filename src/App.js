import "./App.scss";
import HeaderNav from "./components/headerNav/HeaderNav";
import DashBoard from "./components/dashBoard/DashBoard";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import PageTitleHeader from "./components/pageTitleHeader/PageTitleHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsersSecurity from "./components/users&security/UsersSecurity";

function App() {
    return (
        <Router>
            <HeaderNav />
            <PageTitleHeader />
            <BreadCrumbs />
            <DashBoard />
            <Routes>
                <Route exact path="/" element={<DashBoard/>} />
                <Route path="/UsersSecurity" element={<UsersSecurity/>} />
            </Routes>
        </Router>
    );
}

export default App;

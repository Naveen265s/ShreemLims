import "./App.scss";
import HeaderNav from "./components/headerNav/HeaderNav";
import DashBoard from "./components/dashBoard/DashBoard";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import PageTitleHeader from "./components/pageTitleHeader/PageTitleHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Users_Security from "./components/users&security/Users_Security";

function App() {
    return (
        <Router>
            <HeaderNav />
            <PageTitleHeader />
            <BreadCrumbs />
            <DashBoard />
            <Routes>
                <Route exact path="/" component={DashBoard} />
                <Route path="/Users_Security" component={Users_Security} />
            </Routes>
        </Router>
    );
}

export default App;

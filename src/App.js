import "./App.scss";
import HeaderNav from "./components/headerNav/HeaderNav";
import DashBoard from "./components/dashBoard/DashBoard";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import PageTitleHeader from "./components/pageTitleHeader/PageTitleHeader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        // <Router>
        //     <HeaderNav />
        //     <PageTitleHeader />
        //     <BreadCrumbs />
        //     <Switch>
        //         <Route exact path="/" component={DashBoard} />
        //         <Route exact path="/" component={DashBoard} />
        //         <Route exact path="/" component={DashBoard} />
        //     </Switch>
        // </Router>
        <div>
            <HeaderNav />
            <PageTitleHeader />
            <BreadCrumbs />
            <DashBoard />
        </div>
    );
}

export default App;

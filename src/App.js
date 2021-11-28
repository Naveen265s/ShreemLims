import "./App.scss";
import HeaderNav from "./components/headerNav/HeaderNav";
import DashBoard from "./components/dashBoard/DashBoard";
import BreadCrumbs from "./components/breadCrumbs/BreadCrumbs";
import PageTitleHeader from "./components/pageTitleHeader/PageTitleHeader";

function App() {
    return (
        <div className="">
            <HeaderNav />
            <PageTitleHeader />
            <BreadCrumbs />
            <DashBoard />
        </div>
    );
}

export default App;

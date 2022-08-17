import "./App.css";
import Navbar from "./components/navbarComp";
import Dashboard from "./components/dashboard/dashboard";
import Customers from "./components/Customers/Customers";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return ( <
        >
        <
        div className = "App" >
        <
        div className = "AppGlass" >
        <
        Router >
        <
        Navbar / >
        <
        Switch >
        <
        Route path = "/dashboard"
        exact component = { Dashboard }
        />{" "} <
        Route path = "/Customers"
        exact component = { Customers }
        />{" "} <
        /Switch>{" "} <
        /Router>{" "} <
        /div>{" "} <
        /div>{" "} <
        />
    );
}

export default App;
//hello world
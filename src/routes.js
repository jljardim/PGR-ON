import { Switch, Route  } from "react-router-dom";
import CompanyRegistration from "./pages/CompanyRegistration";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Message from "./pages/Messages";
import Register from "./pages/Register";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard />
            </Route>
            <Route path="/register" >
                <Register />
            </Route>
            <Route path="/message" >
                <Message />
            </Route>
            <Route path="/company" >
                <CompanyRegistration />
            </Route>
            <Route path="/login" >
                <Login />
            </Route>
        </Switch>

    );
}

export default Routes;
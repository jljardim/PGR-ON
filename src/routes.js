import { Switch, Route  } from "react-router-dom";
import CollaboratorRegistration from "./pages/CollaboratorRegistration";
import CompanyRegistration from "./pages/CompanyRegistration";
import Dashboard from "./pages/Dashboard";
import EquipamentRegistration from "./pages/EquipmentRegistration";
import Details from "./pages/Details";
import Home from "./pages/Details";
import Login from "./pages/Login";
import Message from "./pages/Messages";
import Register from "./pages/Register";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Login />
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
            <Route path="/dashboad" >
                <Dashboard />
            </Route>
            <Route path="/details" >
                <Details />
            </Route>
            <Route path="/register-colaborator" >
                <CollaboratorRegistration />
            </Route>
            <Route path="/register-equipment" >
                <EquipamentRegistration />
            </Route>
        </Switch>

    );
}

export default Routes;
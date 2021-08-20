import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Search from "./view/pages/Search/Search";
import {ProtectedRoute} from "./route/prodectedRoute/ProdectedRoute";
import LogIn from "./view/pages/Login/Login";
import Register from "./view/pages/register/Register";
import DashBoard from "./view/pages/dashboard/Dashboard";
import Main from "./view/pages/main/Main";


const App = () => {
  return (
      <Router>

        <Switch>

            <Route path="/search">
                <Search />
            </Route>
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={Register} />
            <ProtectedRoute exact path="/dashboard" component={DashBoard} />
            <Route path="/">
                <Main />
            </Route>
        </Switch>
      </Router>
  );
};

export default App;

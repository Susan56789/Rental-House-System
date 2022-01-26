import React, { useEffect, useState } from "react";

import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Invoices from "./Components/Invoices";
import Tenants from "./Components/Tenants";
import Houses from "./Components/Houses";
import Login from "./Components/Login";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import Settings from "./Components/Settings";
import Reports from "./Components/Reports";
import BalanceReports from "./Components/BalanceReports";
import PaymentReport from "./Components/PaymentReport";
import Users from "./Components/Users";
import ViewPayments from "./Components/View_Payments";
import Footer from "./Components/Footer";

import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import {
  getToken,
  removeUserSession,
  setUserSession,
} from "./Components/Common";
import axios from "axios";

function App(e) {
  e.preventDefault();
  const [authLoading, setAuthLoading] = useState(true);

  const AuthStatus = () => {
    const token = getToken();
    if (!token) {
      return;
    }
    axios
      .get(`https://rental-house-server.vercel.app/verifyToken?token${token}`)
      .then((response) => {
        setAuthLoading(false);
        setUserSession(
          response.data.token,
          response.data.user.name,
          response.data.user.username
        );
      })
      .catch((error) => {
        console.log(error);
        setAuthLoading(false);
        removeUserSession();
      });
  };

  useEffect(() => {
    AuthStatus();
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication ...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/Reports" component={Reports} />

          <PrivateRoute
            exact
            path="/PaymentReports"
            component={PaymentReport}
          />

          <PrivateRoute exact path="/AllPayments" component={ViewPayments} />

          <PrivateRoute exact path="/Users" component={Users} />

          <PrivateRoute
            exact
            path="/BalanceReports"
            component={BalanceReports}
          />

          <PrivateRoute exact path="/Invoices" component={Invoices} />

          <PrivateRoute exact path="/Tenants" component={Tenants} />

          <PrivateRoute exact path="/Houses" component={Houses} />

          <PrivateRoute exact path="/Settings" component={Settings} />
          <PrivateRoute exact path="/Home" component={Home} />

          <Route exact path="/" component={Header} />

          <PublicRoute exact path="/Login" component={Login} />

          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/Reports" component={Reports} />

          <Route exact path="/PaymentReports" component={PaymentReport} />

          <Route exact path="/AllPayments" component={ViewPayments} />

          <Route exact path="/Users" component={Users} />

          <Route exact path="/BalanceReports" component={BalanceReports} />

          <Route exact path="/Invoices" component={Invoices} />

          <Route exact path="/Tenants" component={Tenants} />

          <Route exact path="/Houses" component={Houses} />

          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Home" component={Home} />

          <Route exact path="/" component={Header} />

          <Route exact path="/Login" component={Login} />

          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

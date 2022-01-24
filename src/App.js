import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

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
        <Routes>
          <Route exact path="/Reports" element={<Reports />} />

          <Route exact path="/PaymentReports" element={<PaymentReport />} />

          <Route exact path="/AllPayments" element={<ViewPayments />} />

          <Route exact path="/Users" element={<Users />} />

          <Route exact path="/BalanceReports" element={<BalanceReports />} />

          <Route exact path="/" element={<Header />} />

          <Route exact path="/Login" element={<Login />} />

          <Route exact path="/SignUp" element={<SignUp />} />

          <Route exact path="/Home" element={<Home />} />

          <Route exact path="/Invoices" element={<Invoices />} />

          <Route exact path="/Tenants" element={<Tenants />} />

          <Route exact path="/Houses" element={<Houses />} />

          <Route exact path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

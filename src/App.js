import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Invoices from "./Components/Invoices";
import Tenants from "./Components/Tenants";
import Houses from "./Components/Houses";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/Home" element={<Home />} />

          <Route path="/Invoices" element={<Invoices />} />

          <Route path="/Tenants" element={<Tenants />} />

          <Route path="/Houses" element={<Houses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

const Navbar = () => {
  const navigate = useNavigate();
  const usertype = localStorage.getItem("userType");
  const { logout } = useContext(GeneralContext);

  // Generate navigation options based on user type
  const renderNavOptions = () => {
    switch (usertype) {
      case "customer":
        return (
          <>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/bookings")}>Bookings</p>
            <p onClick={logout}>Logout</p>
          </>
        );
      case "admin":
        return (
          <>
            <p onClick={() => navigate("/admin")}>Home</p>
            <p onClick={() => navigate("/all-users")}>Users</p>
            <p onClick={() => navigate("/all-bookings")}>Bookings</p>
            <p onClick={() => navigate("/all-flights")}>Flights</p>
            <p onClick={logout}>Logout</p>
          </>
        );
      case "flight-operator":
        return (
          <>
            <p onClick={() => navigate("/flight-admin")}>Home</p>
            <p onClick={() => navigate("/flight-bookings")}>Bookings</p>
            <p onClick={() => navigate("/flights")}>Flights</p>
            <p onClick={() => navigate("/new-flight")}>Add Flight</p>
            <p onClick={logout}>Logout</p>
          </>
        );
      default:
        return (
          <>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("/auth")}>Login</p>
          </>
        );
    }
  };

  return (
    <div className="navbar">
      <h3>
        AirVista
        {usertype && ` (${usertype === "admin" ? "Admin" : "Operator"})`}
      </h3>
      <div className="nav-options">{renderNavOptions()}</div>
    </div>
  );
};

export default Navbar;

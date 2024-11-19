import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

const Register = ({ setIsLogin }) => {
  const {
    setUsername,
    setEmail,
    setPassword,
    usertype,
    setUsertype,
    register,
  } = useContext(GeneralContext);

  // Handles form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  return (
    <form className="authForm">
      <h2 className="authFormTitle">Create an Account</h2>

      {/* Username Input */}
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="text"
          className="form-control"
          id="floatingUsername"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="floatingUsername">Username</label>
      </div>

      {/* Email Input */}
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="email"
          className="form-control"
          id="floatingEmail"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingEmail">Email Address</label>
      </div>

      {/* Password Input */}
      <div className="form-floating mb-3 authFormInputs">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      {/* User Type Selector */}
      <div className="form-group mb-3">
        <select
          className="form-select form-select-lg"
          aria-label="Select user type"
          value={usertype}
          onChange={(e) => setUsertype(e.target.value)}
        >
          <option value="">Select User Type</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
          <option value="flight-operator">Flight Operator</option>
        </select>
      </div>

      {/* Submit Button */}
      <button className="btn btn-primary w-100" onClick={handleRegister}>
        Sign Up
      </button>

      {/* Switch to Login */}
      <p className="text-center mt-3">
        Already registered?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Log in
        </span>
      </p>
    </form>
  );
};

export default Register;

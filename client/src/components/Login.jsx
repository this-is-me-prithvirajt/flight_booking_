import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";

const Login = ({ setIsLogin }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <form className="authForm">
      <h2 className="authFormTitle">Welcome Back!</h2>

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

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary w-100"
        onClick={handleLogin}
      >
        Sign In
      </button>

      {/* Switch to Register */}
      <p className="text-center mt-3">
        Not registered?{" "}
        <span
          className="text-primary cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Register here
        </span>
      </p>
    </form>
  );
};

export default Login;

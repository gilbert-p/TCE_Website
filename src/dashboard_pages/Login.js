import React from "react";
import "../assets/dashboard_styles/login.scss";
import LoginNav from "../dashboard_components/Login_Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <LoginNav /> */}
      <div className="main-content">
        <div className="login-content-container">
          <div className="login-form-container">
            <div className="login-title-container">
              <h3>Admin Login</h3>
            </div>
            <div id="form-container" className="">
              <form id="login-form">
                <div className="form-inner-container">
                  <div className="">
                    <label for="inputEmail" className="field-name">
                      Email
                    </label>
                    <input
                      type="email"
                      id="inputEmail"
                      className=""
                      placeholder="name@example.com"
                      // required
                      //   value={email}
                      //   onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <label for="password" className="field-name">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder=""
                    // required
                    //   value={name}
                    //   onChange={(e) => setName(e.currentTarget.value)}
                  />

                  <Link to="/dashboard">
                    <div className="form-submit-button-container">
                      <input
                        className="form-control"
                        id="login-submit"
                        type="submit"
                        className=""
                        value="Login"
                      />
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="login-footer-container">
            <div className="copyright-content">© 2021 A&P Web Services</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);

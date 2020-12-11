import React from "react";
import "../assets/dashboard_styles/login.scss";
import AdminNav from "../dashboard_components/Dashboard_Navbar";

const Login = () => {
  return (
    <>
      <AdminNav />
      <div className="login-background"></div>
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
                    required
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
                  required
                  //   value={name}
                  //   onChange={(e) => setName(e.currentTarget.value)}
                />

                <div className="form-submit-button-container">
                  <input
                    className="form-control"
                    id="login-submit"
                    type="submit"
                    className=""
                    value="Login"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

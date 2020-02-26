import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./FrontPage.css";

export default class FrontPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="row" style={{ height: "100vh" }}>
          <div className="col-6" />
          <div className="col-6" style={{ padding: "4%", marginTop: "90px" }}>
            <h3 className="signin">Sign In</h3>
            <br />
            <form
              // onSubmit={this.onSubmit}
              className="text-center"
              style={{ color: "#757575" }}
            >
              <div className="md-form">
                <input
                  type="text"
                  id="materialLoginFormEmail"
                  className="form-control"
                  name="username"
                  placeholder="User Name"
                  // onChange={this.onChange}
                  // value={username}
                />
              </div>
              <br />
              <div className="md-form">
                <input
                  type="password"
                  id="materialLoginFormPassword"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  // onChange={this.onChange}
                  // value={password}
                />
              </div>
              <button
                className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                type="submit"
              >
                Login
              </button>
              <p>
                Don't have an account?&nbsp;
                <Link to="/register">Register</Link>
              </p>
            </form>
            <hr />
            <center>
              <button
                className="btn btn-outline-dark btn-rounded my-4 waves-effect z-depth-0"
                type="submit"
              >
                <i className="fab fa-google"></i>&nbsp;&nbsp;Sign in
              </button>
            </center>
          </div>
        </div>
      </Fragment>
    );
  }
}

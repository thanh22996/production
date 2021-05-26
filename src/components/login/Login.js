import React from "react";

function Login(props) {
  return (
    <div className="bg-primary bg-login">
      <div className="account-pages">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-pattern shadow-none">
                <div className="card-body">
                  <div className="text-center mt-4">
                    <div className="mb-3">
                      <a href="index.html" className="logo">
                        <img
                          src="assets/images/logo-dark.png"
                          height={20}
                          alt="logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-18 text-center">Welcome Back !</h4>
                    <p className="text-muted text-center mb-4">
                      Sign in to continue to Veltrix.
                    </p>
                    <form className="form-horizontal" action="index.html">
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customControlInline"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mt-3">
                        <button
                          className="btn btn-primary btn-block waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <a href="pages-recoverpw.html">
                          <i className="mdi mdi-lock" /> Forgot your password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center text-white-50">
                <p>
                  Don't have an account ?{" "}
                  <a href="pages-register.html" className="font-500 text-white">
                    {" "}
                    Signup now{" "}
                  </a>{" "}
                </p>
                <p>
                  © 2019 Veltrix. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

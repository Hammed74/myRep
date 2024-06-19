/* eslint-disable react/prop-types */
import "../stylesheets/Landing.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing({setName}) {

const [forgot, setForgot] = useState(false)

const handleChange = (e) => {
  setName(e.target.value);
};

  return (
    <>
      <div className="body-landing">
        <h1 className="landing-header">Welcome to myRep.</h1>
        <div
          className="box"
          style={forgot === true ? { height: "20rem" } : null}
        >
          {forgot === false ? (
            <>
              <h2 className="sign-in">Sign In</h2>
              <div className="log-box">
                <div className="login-label">Username</div>
                <input onChange={handleChange} className="login-box username" type="text" />
              </div>
              <div className="log-box">
                <div className="login-label">Password</div>
                <input className="login-box password" type="password" />
              </div>
              <div className="forgot" onClick={() => setForgot(true)}>
                Forgot Password?
              </div>
              <Link style={{ height: "3rem", margin: "auto 0" }} to={"/home"}>
                <button className="submit">Continue</button>
              </Link>
            </>
          ) : (
            <ForgotPassword setForgot={setForgot} />
          )}
        </div>
      </div>
    </>
  );
}

function ForgotPassword({setForgot}){
  return (
    <>
      <div
        className="log-box"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "2rem",
        }}
      >
        <div className="back-text" onClick={() => setForgot(false)}>
          {" "}
          Back
        </div>
        <div className="reset-text">Reset Your Password</div>
        <div className="forgot-label">
          Enter the email address associated with your account and we&apos;ll
          send you a link to reset your password.
        </div>
        <input className="login-box forgot-input" type="text" />
      </div>
        <button className="submit" style={{ margin: "1rem auto" }}>
          Submit
        </button>
    </>
  );
}

export default Landing

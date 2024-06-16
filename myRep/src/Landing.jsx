import "./stylesheets/Landing.css";

function App() {

  return (
    <>
      <h1 className="landing-header">Welcome to myRep.</h1>
      <div className="box">
        <h2 className='sign-in'>Sign In</h2>
        <div className='log-box'>
          <div className='login-label'>Username</div>
          <input className="login-box username" type="text"/>
        </div>
        <div className='log-box'>
          <div className='login-label'>Password</div>
          <input className="login-box password" type="password"/>
        </div> 
        <div className='forgot'>Forgot Password?</div>
        <button className='submit'>Continue</button>
      </div>
    </>
  );
}

export default App

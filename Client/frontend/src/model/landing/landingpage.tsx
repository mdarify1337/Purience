import React from 'react';
// import '../../app.css';
import logo from './logo.svg'


function LandingPage() {
    const googleLoginUrlClient = `http://localhost:3001/api/auth/google/login?state=${encodeURIComponent(
        JSON.stringify({ User: 'Client' }),
      )}`;
      const googleLoginUrlOperator = `http://localhost:3001/api/auth/google/login?state=${encodeURIComponent(
        JSON.stringify({ User: 'Operator' }),
      )}`;
      console.log('url -> ', googleLoginUrlClient);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a 
            className='google-button' 
            href={googleLoginUrlClient}>
           hello
        </a>
        <a 
            className='google-button' 
            href={googleLoginUrlOperator}>
           hello
        </a>
      </header>
    </div>
  )
}

export default LandingPage
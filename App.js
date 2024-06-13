import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

function App() {
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false); // Set to false to show signup form initially
  const [passwordValid, setPasswordValid] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false); // New state for signup success

  const validatePassword = () => {
    const regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*])(?=.{8,})/;
    return regex.test(password);
  };

  const handleLogin = () => {
    // Implement your login logic here
    if (username && password) {
      setLoggedIn(true);
    } else {
      alert('Please enter username and password.');
    }
  };

  const handleSignup = () => {
    // Implement your signup logic here
    if (!validatePassword()) {
      setPasswordValid(false);
      return;
    }
    // Simulate signup success
    setSignupSuccess(true);
    // Reset form fields after signup
    setUsername('');
    setMobileNumber('');
    setGender('');
    setPassword('');
    // Redirect to login page after signup
    setIsLoginForm(true);
  };

  return (
    
      <div className="container">
        {loggedIn ? (
          <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <h1>Recruitment Portal</h1>
            {signupSuccess && <p style={{ color: 'green' }}>Signup successful! Redirecting to login page...</p>}
            {!isLoginForm ? (
              <>
                <h2>Signup</h2>
                <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
                <br />
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <br />
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {!passwordValid && (
                  <p style={{ color: 'red' }}>Password must include at least one uppercase letter, one lowercase letter, one numeric digit, one special character (!@#$%^&*), and have a minimum length of 8 characters.</p>
                )}
                <br />
                <button onClick={handleSignup}>Signup</button>
                <br />
                <button onClick={() => setIsLoginForm(true)}>Switch to Login</button>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {!passwordValid && (
                  <p style={{ color: 'red' }}>Password must include at least one uppercase letter, one lowercase letter, one numeric digit, one special character (!@#$%^&*), and have a minimum length of 8 characters.</p>
                )}
                <br />
                <button onClick={handleLogin}>Login</button>
                <br />
                <button onClick={() => setIsLoginForm(false)}>Switch to Signup</button>
              </>
            )}
          </div>
        )}
      </div>
    
  );
}

export default App;
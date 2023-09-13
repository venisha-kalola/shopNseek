import React, { useState } from 'react';

function SignUp({ onSwitchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // You can implement your user registration logic here
    console.log('User registered with email:', email);
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Account already exists?{' '}
        <span className="switch-to-login" onClick={onSwitchToLogin}>
          Try Log In
        </span>
      </p>
    </div>
  );
}

export default SignUp;

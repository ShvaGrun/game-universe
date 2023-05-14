import React, { useState } from 'react';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
    </div>
  );
};

export default PasswordField;
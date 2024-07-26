// src/MyComponent.jsx
import React, { useState } from 'react';

function JsxExample() {
  const [name, setName] = useState('Vandana');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={handleInputChange} />
      <h2>Hello, {name}!</h2>
      <div>
        {isLoggedIn ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>
      <div>
        <h3>Information:</h3>
        <ul>
          <li>JSX allows you to write HTML-like syntax in JavaScript.</li>
          <li>JSX elements can be nested, like this list.</li>
          <li>Attributes in JSX use camelCase, e.g., `className` instead of `class`.</li>
        </ul>
      </div>
    </div>
  );
}

export default JsxExample;

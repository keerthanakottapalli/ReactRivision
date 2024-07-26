import React, { useState } from 'react';
import './Greeting.css'; // Import the CSS file for styling

const StateManagementRfc = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleGreet = () => {
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`);
    }
  };

  return (
    <div className="greeting-container">
      <h1>Greeting Application</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="greeting-input"
      />
      <button onClick={handleGreet} className="greeting-button">
        Greet
      </button>
      {greeting && <p className="greeting-message">{greeting}</p>}
    </div>
  );
};

export default StateManagementRfc;

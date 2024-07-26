import React, { useState } from 'react';
import styled from 'styled-components';
import './Styles.css'; // External CSS file

function Styles() {
  // Inline styles for the header
  const headerStyle = {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  // State for conditional styling of a section
  const [isHovered, setIsHovered] = useState(false);

  // Conditional styles for a section
  const sectionStyle = {
    backgroundColor: isHovered ? '#6997e0' : '#9b69e0',
    color: '#fff',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    marginBottom: '20px',
  };

  // Styled-components for a card
  const Card = styled.div`
    background-color: #fff;
    color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin: 0 auto;
    width: 80%;
    max-width: 400px;
  `;

  // Styled-components for a link
  const StyledLink = styled.a`
    color: #7ed321;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #50e3c2;
    }
  `;

  return (
    <div>
      {/* Header with inline styles */}
      <header style={headerStyle}>My Stylish App</header>

      {/* Main section with conditional styling */}
      <section
        style={sectionStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2>Conditional Styles Section</h2>
        <p>This section changes color when you hover over it.</p>
      </section>

      {/* External styles button */}
      <button className="external-button">External Styles Button</button>

      {/* Styled-components Card */}
      <Card>
        <h3>Styled Components Card</h3>
        <p>This is a card created using styled-components.</p>
        <StyledLink href="#">Learn More</StyledLink>
      </Card>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f5f5f5', color: '#333' }}>
        <p>&copy; 2024 My Stylish App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Styles;

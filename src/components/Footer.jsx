import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0a0736;
  color: white;
  padding: 1rem;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Course Platform. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

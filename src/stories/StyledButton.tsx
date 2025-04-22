// src/components/StyledButton.tsx
import React from 'react';
import styled from 'styled-components';

export interface StyledButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-block;
  background-color: ${props => props.backgroundColor || '#4caf50'};
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }
`;

const Button: React.FC<StyledButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #3e8e41;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

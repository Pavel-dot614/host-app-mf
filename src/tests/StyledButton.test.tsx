import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { StyledButton } from 'stories/StyledButton';

describe('StyledButton Component', () => {
  it('renders the button with the correct text', () => {
    render(<StyledButton>Test Button</StyledButton>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    render(<StyledButton onClick={onClickMock}>Click Me</StyledButton>);
    const buttonElement = screen.getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies the correct background color', () => {
    render(<StyledButton backgroundColor="red">Red Button</StyledButton>);
    const buttonElement = screen.getByText('Red Button');
    expect(buttonElement).toHaveStyle('background-color: red;');
  });
});

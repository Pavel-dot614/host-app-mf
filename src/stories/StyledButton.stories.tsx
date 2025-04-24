import { Meta, StoryObj } from '@storybook/react';

import Button, { StyledButtonProps } from './StyledButton';

const meta: Meta<StyledButtonProps> = {
  title: 'Components/StyledButton',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<StyledButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    backgroundColor: '#4caf50',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    backgroundColor: '#008CBA',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    backgroundColor: '#4caf50',
    style: { fontSize: '20px', padding: '15px 25px' },
  },
};

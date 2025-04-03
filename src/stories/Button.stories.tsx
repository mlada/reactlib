import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UiButton } from '../components/UiButton/UiButton';

const meta: Meta<typeof UiButton> = {
  title: 'Components/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};

export const CustomBackground: Story = {
  args: {
    label: 'Button with custom background',
    backgroundColor: '#ff00ff',
  },
};

export const InteractiveExample: Story = {
  args: {
    primary: true,
    size: 'medium',
    label: 'Click me!',
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <UiButton {...args} />
      <span>Try interacting with the button in the Canvas tab</span>
    </div>
  ),
};
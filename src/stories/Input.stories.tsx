import type { Meta, StoryObj } from '@storybook/react';
import { useRef } from 'react';
import { UiInput } from '../components/UiInput/UiInput';

const meta: Meta<typeof UiInput> = {
  title: 'Components/UiInput',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

export default meta;

type Story = StoryObj<typeof UiInput>;

export const Basic: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    prefixIcon: 'email',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    suffixIcon: 'lock',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    clearable: true,
    prefixIcon: 'search',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    value: 'Cannot edit this',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    value: 'invalid-email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Phone Number',
    placeholder: '+1 (___) ___-____',
    hint: 'Include country code',
  },
};

export const WithRef: Story = {
  render: (args) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleClick = () => {
      inputRef.current?.focus();
    };
    
    return (
      <div>
        <UiInput {...args} ref={inputRef} />
        <button onClick={handleClick} style={{ marginTop: '10px' }}>
          Focus Input
        </button>
      </div>
    );
  },
  args: {
    label: 'Focus with Ref',
  },
};
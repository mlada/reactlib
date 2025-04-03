import type { Meta, StoryObj } from '@storybook/react';
import { UiHeader } from '../components/UiHeader/UiHeader';

const meta: Meta<typeof UiHeader> = {
  title: 'Components/UiHeader',
  component: UiHeader,
  tags: ['autodocs'],
  argTypes: {
    onLogin: { action: 'login' },
    onLogout: { action: 'logout' },
    onCreateAccount: { action: 'createAccount' },
  },
};

export default meta;

type Story = StoryObj<typeof UiHeader>;

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Иван Иванов',
    },
  },
};

export const WithActions: Story = {
  args: {
    user: null,
  },
  render: (args) => {
    const handleAction = (actionName: string) => {
      console.log(`${actionName} clicked`);
      // In a real app, you would handle the action here
    };

    return (
      <UiHeader
        {...args}
        onLogin={() => handleAction('Login')}
        onLogout={() => handleAction('Logout')}
        onCreateAccount={() => handleAction('Create Account')}
      />
    );
  },
};

export const MobileView: Story = {
  args: {
    user: null,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
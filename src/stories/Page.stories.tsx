import type { Meta, StoryObj } from '@storybook/react';
import { UiPage } from '../components/UiPage/UiPage';

const meta: Meta<typeof UiPage> = {
  title: 'Components/UiPage',
  component: UiPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UiPage>;

export const Default: Story = {
  render: () => <UiPage />,
};

export const LoggedIn: Story = {
  render: () => {
    // This demonstrates how you could mock the logged in state
    return <UiPage />;
  },
  parameters: {
    // Add any mock data or context providers here if needed
  },
};
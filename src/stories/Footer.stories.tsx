import type { Meta, StoryObj } from '@storybook/react';
import { UiFooter } from '../components/UiFooter/UiFooter';

const meta: Meta<typeof UiFooter> = {
  title: 'Components/UiFooter',
  component: UiFooter,
  tags: ['autodocs'],
  argTypes: {
    user: { control: { disable: true } },
    links: { control: { type: 'object' } },
    socialLinks: { control: { type: 'object' } }
  },
};

export default meta;

type Story = StoryObj<typeof UiFooter>;

export const Default: Story = {
  args: {}
};

export const WithCustomLinks: Story = {
  args: {
    links: [
      {
        title: 'Products',
        links: [
          { text: 'Features', url: '/features' },
          { text: 'Pricing', url: '/pricing' },
          { text: 'API', url: '/api' }
        ]
      },
      {
        title: 'Support',
        links: [
          { text: 'Help Center', url: '/help' },
          { text: 'Community', url: '/community' },
          { text: 'Status', url: '/status' }
        ]
      }
    ]
  }
};

export const WithSocialLinks: Story = {
  args: {
    socialLinks: [
      { name: 'Twitter', url: 'https://twitter.com', icon: 'https://cdn-icons-png.flaticon.com/512/124/124021.png' },
      { name: 'Facebook', url: 'https://facebook.com', icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' }
    ]
  }
};

export const LoggedInUser: Story = {
  args: {
    user: { name: 'John Doe' }
  }
};

export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { UiCard } from '../components/UiCard/UiCard';
import { UiButton } from '../components/UiButton/UiButton';

const meta: Meta<typeof UiCard> = {
  title: 'Components/UiCard',
  component: UiCard,
  tags: ['autodocs'],
  argTypes: {
    header: { control: 'text' },
    icon: { control: 'text' },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    hoverable: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof UiCard>;

// Базовый пример карточки
export const Basic: Story = {
  args: {
    header: 'Card Title',
    children: 'This is the content of the card. You can put any content here.',
  },
};

// Карточка с иконкой
export const WithIcon: Story = {
  args: {
    header: 'Card with Icon',
    icon: 'https://via.placeholder.com/24',
    children: 'This card has an icon in the header.',
  },
};

// Карточка с изображением
export const WithImage: Story = {
  args: {
    header: 'Beautiful Landscape',
    imageUrl: 'https://via.placeholder.com/400x200',
    imageAlt: 'Scenic view',
    children: 'This card features a beautiful landscape image.',
  },
};

// Карточка с hover эффектом
export const Hoverable: Story = {
  args: {
    header: 'Hoverable Card',
    hoverable: true,
    children: 'Hover over this card to see the effect.',
  },
};

// Карточка с действиями
export const WithActions: Story = {
  args: {
    header: 'Card with Actions',
    children: 'This card has action buttons in the footer.',
  },
  render: (args) => (
    <UiCard {...args}>
      {args.children}
      <div slot="actions">
        <UiButton label="Cancel" primary={false} size="small" />
        <UiButton label="Confirm" primary={true} size="small" />
      </div>
    </UiCard>
  ),
};

// Комплексный пример
export const ComplexExample: Story = {
  args: {
    header: 'Complex Card',
    icon: 'https://via.placeholder.com/24',
    imageUrl: 'https://via.placeholder.com/400x200',
    hoverable: true,
  },
  render: (args) => (
    <UiCard {...args}>
      <div>
        <h4>Detailed Information</h4>
        <p>This is a more complex card example with multiple content elements.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div slot="actions">
        <UiButton label="Learn More" primary={false} size="small" />
        <UiButton label="Buy Now" primary={true} size="small" />
      </div>
    </UiCard>
  ),
};
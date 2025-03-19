import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">Card Title</h3>
        <p className="text-gray-700 dark:text-gray-300">
          This is a basic card with some sample content. It demonstrates the
          Card component's default appearance.
        </p>
      </div>
    ),
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <div className="relative h-48 bg-gray-200">
          <div className="flex h-full items-center justify-center text-gray-500">
            [Image Placeholder]
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 text-xl font-bold">Card with Image</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This card includes an image placeholder at the top.
          </p>
        </div>
      </>
    ),
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => alert('Card clicked!'),
    children: (
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">Clickable Card</h3>
        <p className="text-gray-700 dark:text-gray-300">
          This card can be clicked. Try clicking it!
        </p>
      </div>
    ),
  },
};

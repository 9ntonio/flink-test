import type { Meta, StoryObj } from '@storybook/react';
import AnimatedBox from './AnimatedBox';

// Metadata for the component
const meta: Meta<typeof AnimatedBox> = {
  title: 'Components/AnimatedBox',
  component: AnimatedBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delay: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      description: 'Delay before animation starts (in seconds)',
    },
    duration: {
      control: { type: 'number', min: 0.1, max: 3, step: 0.1 },
      description: 'Duration of the animation (in seconds)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedBox>;

// Default story using default props
export const Default: Story = {};

// Story with quick animation
export const Quick: Story = {
  args: {
    delay: 0.2,
    duration: 0.3,
  },
};

// Story with slow animation
export const Slow: Story = {
  args: {
    delay: 0.5,
    duration: 2,
  },
};

// Story with long delay
export const DelayedStart: Story = {
  args: {
    delay: 3,
    duration: 0.75,
  },
};

// Story with multiple instances showing different timings
export const MultipleBoxes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AnimatedBox delay={0.2} duration={0.5} />
      <AnimatedBox delay={0.6} duration={0.8} />
      <AnimatedBox delay={1.0} duration={1.1} />
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import { AnimatedBox } from './AnimatedBox';

const meta: Meta<typeof AnimatedBox> = {
  title: 'Components/AnimatedBox',
  component: AnimatedBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    animation: {
      control: { type: 'select' },
      options: ['fadeIn', 'slideInLeft', 'slideInRight', 'slideInUp', 'slideInDown', 'scaleIn', 'pulse', 'bounce'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof AnimatedBox>;

export const FadeIn: Story = {
  args: {
    animation: 'fadeIn',
    children: <div className="text-center">
      <h3 className="mb-2 text-xl font-bold">Fade In Animation</h3>
      <p>Click the button below to toggle the animation</p>
    </div>,
  },
};

export const SlideIn: Story = {
  args: {
    animation: 'slideInLeft',
    children: <div className="text-center">
      <h3 className="mb-2 text-xl font-bold">Slide In Animation</h3>
      <p>Click the button below to toggle the animation</p>
    </div>,
  },
};

export const ScaleIn: Story = {
  args: {
    animation: 'scaleIn',
    children: <div className="text-center">
      <h3 className="mb-2 text-xl font-bold">Scale In Animation</h3>
      <p>Click the button below to toggle the animation</p>
    </div>,
  },
};

export const Pulse: Story = {
  args: {
    animation: 'pulse',
    children: <div className="text-center">
      <h3 className="mb-2 text-xl font-bold">Pulse Animation</h3>
      <p>Click the button below to toggle the animation</p>
    </div>,
  },
};
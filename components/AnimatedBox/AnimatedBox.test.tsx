import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnimatedBox from './AnimatedBox';
import { gsap } from 'gsap';

// Mock GSAP to avoid actual animations in tests
jest.mock('gsap', () => ({
  gsap: {
    fromTo: jest.fn().mockReturnValue({
      kill: jest.fn(),
    }),
  },
  fromTo: jest.fn().mockReturnValue({
    kill: jest.fn(),
  }),
}));

describe('AnimatedBox', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<AnimatedBox />);
    expect(screen.getByText('Animated with GSAP')).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    render(<AnimatedBox />);
    const box = screen.getByText('Animated with GSAP');
    expect(box).toHaveClass('flex');
    expect(box).toHaveClass('h-32');
    expect(box).toHaveClass('w-64');
    expect(box).toHaveClass('rounded-lg');
    expect(box).toHaveClass('bg-red-600');
  });

  it('initializes GSAP animation with default props', () => {
    render(<AnimatedBox />);

    // Check if gsap.fromTo was called
    expect(gsap.fromTo).toHaveBeenCalledTimes(1);

    // Extract the call arguments to check animation settings
    const callArgs = (gsap.fromTo as jest.Mock).mock.calls[0];

    // Check animation properties
    expect(callArgs[2].duration).toBe(0.75); // Default duration
    expect(callArgs[2].delay).toBe(1); // Default delay
  });

  it('uses custom props when provided', () => {
    render(<AnimatedBox delay={2} duration={1.5} />);

    // Check if gsap.fromTo was called
    expect(gsap.fromTo).toHaveBeenCalledTimes(1);

    // Extract the call arguments
    const callArgs = (gsap.fromTo as jest.Mock).mock.calls[0];

    // Check if custom values were used
    expect(callArgs[2].duration).toBe(1.5);
    expect(callArgs[2].delay).toBe(2);
  });

  it('cleans up animation on unmount', () => {
    const { unmount } = render(<AnimatedBox />);

    // Get the kill method from the mock
    const killMethod = (gsap.fromTo as jest.Mock).mock.results[0].value.kill;

    // Unmount the component
    unmount();

    // Check if kill was called
    expect(killMethod).toHaveBeenCalledTimes(1);
  });
});

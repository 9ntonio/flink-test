import { render, screen, fireEvent } from '@testing-library/react';
import AnimatedBox from './AnimatedBox';

// Mock the Glaze animation hook
jest.mock('@glaze/react', () => ({
  useAnimation: () => ({
    play: jest.fn(),
    styles: { opacity: 1 },
  }),
}));

describe('AnimatedBox', () => {
  it('renders children content correctly', () => {
    render(
      <AnimatedBox>
        <p>Test content</p>
      </AnimatedBox>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders a toggle button with initial "Hide" text', () => {
    render(<AnimatedBox>Content</AnimatedBox>);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hide');
  });

  it('changes button text when clicked', () => {
    render(<AnimatedBox>Content</AnimatedBox>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(button).toHaveTextContent('Show');
  });

  it('applies additional classNames when provided', () => {
    render(
      <AnimatedBox className="custom-class">
        Content
      </AnimatedBox>
    );
    
    const boxElement = screen.getByText('Content').closest('div');
    expect(boxElement).toHaveClass('custom-class');
  });

  it('toggles visibility state when button is clicked', () => {
    render(<AnimatedBox>Content</AnimatedBox>);
    
    // Initially the state should be visible
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Hide');
    
    // Click to hide
    fireEvent.click(button);
    expect(button).toHaveTextContent('Show');
    
    // Click to show again
    fireEvent.click(button);
    expect(button).toHaveTextContent('Hide');
  });
});
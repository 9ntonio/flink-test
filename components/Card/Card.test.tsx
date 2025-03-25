import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders card with the provided content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies the card class', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('card');
  });

  it('applies additional classes when provided', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    const card = container.firstChild;
    expect(card).toHaveClass('card');
    expect(card).toHaveClass('custom-class');
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Card onClick={handleClick}>Click me</Card>);

    const card = screen.getByRole('button', { name: /Click me/i });
    fireEvent.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('has role="button" and is focusable when onClick is provided', () => {
    render(<Card onClick={() => {}}>Clickable Card</Card>);
    const card = screen.getByRole('button', { name: /Clickable Card/i });
    expect(card).toHaveAttribute('tabIndex', '0');
    expect(card).toHaveClass('cursor-pointer');
  });

  it('does not have button role or tabIndex when not clickable', () => {
    render(<Card>Non-clickable Card</Card>);
    const card = screen.getByText('Non-clickable Card').parentElement;
    expect(card).not.toHaveAttribute('role');
    expect(card).not.toHaveAttribute('tabIndex');
    expect(card).not.toHaveClass('cursor-pointer');
  });
});

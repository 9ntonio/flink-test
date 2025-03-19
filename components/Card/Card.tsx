import React from 'react';

export interface CardProps {
  /**
   * Card contents
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Card component for displaying content in a contained box
 */
export const Card = ({ children, className = '', onClick }: CardProps) => {
  const hasClickHandler = !!onClick;
  const clickableClass = hasClickHandler ? 'cursor-pointer' : '';

  return (
    <div
      className={`card ${className} ${clickableClass}`}
      onClick={onClick}
      role={hasClickHandler ? 'button' : undefined}
      tabIndex={hasClickHandler ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;

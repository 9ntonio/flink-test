import React, { useState } from 'react';
import { useAnimation } from '@glaze/react';

export interface AnimatedBoxProps {
  /**
   * Animation name to use from glaze.config.js
   */
  animation?: string;
  /**
   * Content to display inside the box
   */
  children: React.ReactNode;
  /**
   * Additional classes to apply to the box
   */
  className?: string;
}

/**
 * AnimatedBox component demonstrating Glaze animations
 */
export const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  animation = 'fadeIn',
  children,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Initialize Glaze animation hook
  const { play, styles } = useAnimation(animation, {
    duration: 0.6,
    ease: 'power2.inOut',
  });

  // Toggle animation
  const toggleAnimation = () => {
    setIsVisible(!isVisible);
    play({ reverse: isVisible });
  };

  return (
    <div 
      className={`relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}
      style={styles}
    >
      <div className="mb-4">
        {children}
      </div>
      <button
        onClick={toggleAnimation}
        className="mt-2 rounded bg-primary px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default AnimatedBox;
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedBoxProps {
  delay?: number;
  duration?: number;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  delay = 1,
  duration = 0.75,
}) => {
  // Create a ref for the element we want to animate
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure boxRef.current is not null
    if (!boxRef.current) return;

    // Store the animation in a variable so we can control it
    const animation = gsap.fromTo(
      boxRef.current,
      // Starting properties
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
      },
      // Ending properties
      {
        opacity: 1,
        y: 25,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: 'elastic.out', // GSAP easing function
      }
    );

    // Cleanup function to kill animation when component unmounts
    return () => {
      animation.kill();
    };
  }, [delay, duration]); // Rerun effect if delay or duration changes

  return (
    <div
      ref={boxRef}
      className="flex h-32 w-64 items-center justify-center rounded-lg bg-red-600 font-bold text-white"
    >
      Animated with GSAP
    </div>
  );
};

export default AnimatedBox;

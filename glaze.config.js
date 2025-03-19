/**
 * Glaze Animation Configuration
 * @see https://www.npmjs.com/package/@glaze/react for documentation
 */

module.exports = {
  // Define custom animations
  animations: {
    // Fade animations
    fadeIn: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    fadeOut: {
      from: { opacity: 1 },
      to: { opacity: 0 },
    },
    
    // Slide animations
    slideInLeft: {
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, x: 0 },
    },
    slideInRight: {
      from: { opacity: 0, x: 50 },
      to: { opacity: 1, x: 0 },
    },
    slideInUp: {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
    },
    slideInDown: {
      from: { opacity: 0, y: -50 },
      to: { opacity: 1, y: 0 },
    },
    
    // Scale animations
    scaleIn: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    },
    scaleOut: {
      from: { opacity: 1, scale: 1 },
      to: { opacity: 0, scale: 0.8 },
    },
    
    // Attention seekers
    pulse: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)' },
    },
    bounce: {
      '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
      '40%': { transform: 'translateY(-30px)' },
      '60%': { transform: 'translateY(-15px)' },
    },
  },
  
  // Define default durations, easing, etc.
  defaults: {
    duration: 0.4,
    ease: 'power2.out',
    delay: 0,
  },
  
  // Define animation presets (combinations of animations with specific settings)
  presets: {
    entrance: {
      animation: 'fadeIn',
      duration: 0.6,
      ease: 'power2.out',
    },
    exit: {
      animation: 'fadeOut',
      duration: 0.4,
      ease: 'power2.in',
    },
    cardEntrance: {
      animation: 'scaleIn',
      duration: 0.5,
      ease: 'back.out(1.7)',
    },
    buttonHover: {
      animation: 'pulse',
      duration: 0.3,
      repeat: 0,
      ease: 'power1.inOut',
    },
  },
  
  // Configure GSAP integration
  gsap: {
    // Any global GSAP configuration
  },
};
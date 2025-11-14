"use client";

import React from 'react';
import { motion, TargetAndTransition, Transition } from 'motion/react';

interface AOSProps {
  children: React.ReactNode;
  animation?: string; // e.g., 'fade-up', 'fade-right', 'zoom-in', 'blur'
  delay?: number; // in ms
  duration?: number; // in ms
  className?: string; // additional classes
  initial?: TargetAndTransition; // custom initial state
  animate?: TargetAndTransition; // custom animate state
  transition?: Transition; // custom transition
}

const AOS: React.FC<AOSProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.6,
  className = '',
  initial,
  animate,
  transition,
}) => {
  // Default initial states based on animation type, starting from edges
  const getInitial = () => {
    if (initial) return initial;
    switch (animation) {
      case 'fade-right':
        return { opacity: 0, x: -100 };
      case 'fade-left':
        return { opacity: 0, x: 100 };
      case 'fade-up':
        return { opacity: 0, y: 100 };
      case 'fade-down':
        return { opacity: 0, y: -100 };
      case 'zoom-in':
        return { opacity: 0, scale: 0 };
      case 'blur':
        return { opacity: 0, filter: 'blur(10px)' };
      default:
        return { opacity: 0 };
    }
  };

  const defaultAnimate = animate || (animation === 'blur' ? { opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 } : { opacity: 1, x: 0, y: 0, scale: 1 });
  const defaultTransition = transition || { duration, delay: delay, ease: 'easeOut' };

  return (
    <motion.div
      className={className + ' full static'}
      initial={getInitial()}
      whileInView={defaultAnimate}
      exit={getInitial()}
      viewport={{ once: false, amount: 0.2 }}
      transition={defaultTransition}
    >
      {children}
    </motion.div>
  );
};

export default AOS;

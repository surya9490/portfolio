import { useEffect } from 'react';

type KeyboardNavConfig = {
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  onTab?: (event: KeyboardEvent) => void;
};

export const useKeyboardNav = (config: KeyboardNavConfig) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          config.onArrowUp?.();
          break;
        case 'ArrowDown':
          event.preventDefault();
          config.onArrowDown?.();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          config.onArrowLeft?.();
          break;
        case 'ArrowRight':
          event.preventDefault();
          config.onArrowRight?.();
          break;
        case 'Escape':
          config.onEscape?.();
          break;
        case 'Enter':
          config.onEnter?.();
          break;
        case 'Tab':
          config.onTab?.(event);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [config]);
}; 
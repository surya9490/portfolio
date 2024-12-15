'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative flex items-center justify-center gap-2 p-2 rounded-full transition-colors bg-transparent dark:bg-zinc-800 bg-zinc-100 focus:outline-none"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <Sun
        className="h-5 w-5 text-gray-900 dark:text-gray-400 rotate-180 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      {/* Moon Icon */}
      <Moon
        className="h-5 w-5 text-gray-900 dark:text-gray-400 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </button>
  );
}

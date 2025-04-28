'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './Card';
import { searchContent, type SearchResult, type SearchResultType } from '@/utils/search';
import { Command } from 'lucide-react';

const TypeIcon = ({ type }: { type: SearchResultType }) => {
  switch (type) {
    case 'project':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      );
    case 'blog':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
        </svg>
      );
    case 'page':
      return (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
};

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = searchContent(query);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? handleClose() : handleOpen();
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(i => Math.min(i + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(i => Math.max(i - 1, 0));
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].href;
          }
          break;
        case 'Escape':
          e.preventDefault();
          handleClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, handleClose, handleOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (!resultsRef.current) return;
    const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  // Add scroll event listener
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      handleClose();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, handleClose]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-[rgb(222_29_141)] transition-colors duration-300 flex items-center gap-2"
        aria-label="Search"
      >
        <Command className="w-4 h-4" />
        <span className="text-sm hidden md:inline-block">Search</span>
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-zinc-100 dark:bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-600 dark:text-zinc-400 ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={handleClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-0 top-0 md:top-20 md:left-1/2 md:-translate-x-1/2 w-full md:max-w-lg z-50"
            >
              <Card variant="glass" className="overflow-hidden md:rounded-lg rounded-none border-b border-zinc-200 dark:border-zinc-700 md:border md:mx-4">
                <div className="px-4 py-3 md:p-4 w-full max-w-full">
                  <div className="relative flex items-center gap-3 w-full">
                    <Command className="w-5 h-5 flex-shrink-0 text-zinc-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setSelectedIndex(0);
                      }}
                      placeholder="Search projects, blog posts, and more..."
                      className="w-full min-w-0 bg-transparent border-none outline-none text-zinc-900 dark:text-white placeholder-zinc-500 text-base md:text-lg py-2"
                      autoComplete="off"
                    />
                    {query && (
                      <button
                        onClick={() => setQuery('')}
                        className="p-1 flex-shrink-0 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <div ref={resultsRef} className="mt-3 max-h-[40vh] md:max-h-[60vh] overflow-y-auto overscroll-contain">
                    {results.length > 0 ? (
                      <div className="space-y-1">
                        {results.map((result, index) => (
                          <a
                            key={result.href}
                            href={result.href}
                            className={`block p-3 rounded-lg transition-colors duration-200 ${
                              selectedIndex === index
                                ? 'bg-[rgb(222_29_141)]/10 text-[rgb(222_29_141)]'
                                : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'
                            }`}
                            onMouseEnter={() => setSelectedIndex(index)}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="flex-shrink-0 text-zinc-400">
                                <TypeIcon type={result.type} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="font-medium truncate">{result.title}</div>
                                {result.description && (
                                  <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                                    {result.description}
                                  </div>
                                )}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : query ? (
                      <div className="text-center text-zinc-500 dark:text-zinc-400 py-6">
                        No results found for "{query}"
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="hidden md:flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                      <div className="flex gap-2">
                        <kbd className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">↑↓</kbd>
                        <span>to navigate</span>
                      </div>
                      <div className="flex gap-2">
                        <kbd className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">enter</kbd>
                        <span>to select</span>
                      </div>
                      <div className="flex gap-2">
                        <kbd className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">esc</kbd>
                        <span>to close</span>
                      </div>
                    </div>
                    <div className="md:hidden text-center text-xs text-zinc-500 dark:text-zinc-400">
                      Tap anywhere outside to close
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Search; 
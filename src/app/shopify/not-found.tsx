'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-[rgb(222_29_141)] to-purple-600 bg-clip-text text-transparent"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl mb-8 text-zinc-600 dark:text-zinc-400"
        >
          Oops! The Shopify page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/shopify"
            className="inline-block px-6 py-3 rounded-lg bg-[rgb(222_29_141)] text-white hover:bg-[rgb(222_29_141)]/90 transition-colors duration-300"
          >
            Back to Shopify Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 
"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const ContactSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 p-px">
            <div className="relative rounded-[23px] bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 px-8 py-16 md:px-16 md:py-20 text-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Glow orbs */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
                  <span className="size-2 bg-green-400 rounded-full animate-pulse" />
                  Available for work
                </div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  Let&apos;s Build Something
                  <br />
                  Amazing Together
                </h2>
                <p className="text-white/80 text-base md:text-lg mb-10 max-w-lg mx-auto">
                  Ready to bring your next eCommerce project to life? I&apos;d love to hear about your vision and help make it a reality.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-violet-700 font-semibold text-sm hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Get in Touch
                    <svg
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <a
                    href="mailto:suryakiran0257@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    suryakiran0257@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import ScrollReveal from "@/components/ScrollReveal";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSending, setIsSending] = useState<boolean>(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(data: FormData) {
    setIsSending(true);
    try {
      await sendEmail(data);
      reset();
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="pt-28 pb-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="uppercase font-semibold tracking-widest text-sm gradient-text mb-4">
                Contact
              </p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
                Have a project in mind? Let&apos;s talk about how I can help bring your vision to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <ScrollReveal direction="left" className="lg:col-span-2">
              <div className="glass-card p-8 h-full">
                <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <a href="mailto:suryakiran0257@gmail.com" className="flex items-start gap-4 group">
                    <div className="size-12 shrink-0 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-colors duration-300">
                      <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">Email</p>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        suryakiran0257@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="size-12 shrink-0 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                      <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">Phone</p>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">+91 8886999441</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="size-12 shrink-0 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                      <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">Location</p>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Kakinada, Andhra Pradesh, India</p>
                    </div>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/surya-kiran-palipireddy-0bb873217"
                    target="_blank"
                    rel="noopener"
                    className="flex items-start gap-4 group"
                  >
                    <div className="size-12 shrink-0 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-colors duration-300">
                      <svg className="size-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">LinkedIn</p>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        Connect with me
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right" className="lg:col-span-3">
              <div className="glass-card p-8">
                {sent && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400 text-sm font-medium">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300 placeholder:text-zinc-400"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300 placeholder:text-zinc-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...register("message", { required: true })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-300 placeholder:text-zinc-400 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-violet-500/25"
                  >
                    {isSending ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

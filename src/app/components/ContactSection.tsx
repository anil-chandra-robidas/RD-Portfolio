'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    try {
      // Send via FormSubmit service to anilkumer.cse@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/anilkumer.cse@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Contact Form Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback to mailto link if API fails
        window.location.href = `mailto:anilkumer.cse@gmail.com?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        setStatus('success');
      }
    } catch {
      // Fallback to direct mailto
      window.location.href = `mailto:anilkumer.cse@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 max-w-3xl bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-2xl rounded-full bg-accent-violet/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl relative">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-cyan">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Send Me A <span className="text-gradient-static">Message</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-text-secondary sm:text-lg">
            Have a project or opportunity? Send me a message below and I will get back to you promptly at{' '}
            <span className="text-accent-violet-light font-medium">anilkumer.cse@gmail.com</span>.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Email Card */}
            <ScrollReveal delay={150}>
              <div className="glass gradient-border rounded-2xl p-6 transition-all duration-300 hover:bg-bg-card-hover">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-accent-violet/10 border border-accent-violet/30 text-accent-violet flex items-center justify-center shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">Email Direct</h3>
                    <a href="mailto:anilkumer.cse@gmail.com" className="text-sm font-medium text-text-primary hover:text-accent-violet-light transition-colors">
                      anilkumer.cse@gmail.com
                    </a>
                    <p className="text-xs text-text-muted mt-0.5">anilkumer12.cse@gmail.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone Card */}
            <ScrollReveal delay={250}>
              <div className="glass gradient-border rounded-2xl p-6 transition-all duration-300 hover:bg-bg-card-hover">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan flex items-center justify-center shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">Phone &amp; WhatsApp</h3>
                    <a href="tel:+8801755448113" className="text-sm font-mono font-medium text-text-primary hover:text-accent-cyan transition-colors">
                      +880 1755448113
                    </a>
                    <p className="text-xs font-mono text-text-muted mt-0.5">+880 1740191762</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={350}>
              <div className="glass gradient-border rounded-2xl p-6 transition-all duration-300 hover:bg-bg-card-hover">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted">Location</h3>
                    <p className="text-sm font-medium text-text-primary">Joypurhat 5900, Bangladesh</p>
                    <p className="text-xs text-text-muted mt-0.5">Available for Remote Work</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="glass gradient-border rounded-2xl p-8 transition-all duration-500 hover:border-accent-violet/30">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                Fill out the form below to send an email straight to <span className="text-accent-cyan font-mono">anilkumer.cse@gmail.com</span>.
              </p>

              {status === 'success' && (
                <div className="mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400 text-sm flex items-center gap-3">
                  <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully. I will get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      Your Name <span className="text-accent-pink">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                      Your Email <span className="text-accent-pink">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="form-subject" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:bg-white/10 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Message <span className="text-accent-pink">*</span>
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-white/5 border border-glass-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:bg-white/10 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-violet/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

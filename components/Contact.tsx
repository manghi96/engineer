"use client";

import { useState, useRef, useEffect } from "react";

const EMAIL = "manghi.work@gmail.com";
// Đường dẫn đến file CV duy nhất của bạn
const CV_FILE = "/Tran_Minh_Nghia_Resume.pdf";

function DownloadCVButton() {
  return (
    <a
      href={CV_FILE}
      download
      className="px-6 py-3 border border-slate-400 hover:border-blue-600 text-slate-800 hover:text-slate-950 dark:border-slate-600 dark:text-slate-200 dark:hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm inline-flex items-center gap-2"
    >
      Download CV
      {/* <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg> */}
    </a>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-[#0B1220] py-24 lg:py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-texture dark:dark-grid opacity-60" />
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" /> */}

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium shadow-lg transition-all duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        ✓ Email copied to clipboard
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left ── */}
          <div>
            <p className="section-badge mb-6 reveal">
              06 — Contact
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-slate-950 dark:text-slate-50 leading-tight mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build
              <br />
              <span className="italic text-blue-600 dark:text-blue-400">something great</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-md mb-10 reveal reveal-delay-2">
              I&apos;m happy to connect, listen and help.
              <br />
              Let's work together and build something awesome.
            </p>

            <div className="flex flex-wrap gap-3 reveal reveal-delay-3">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                {copied ? "Copied! ✓" : "Copy Email"}
              </button>
<DownloadCVButton />
            </div>
          </div>

          {/* ── Right: Links ── */}
          <div className="space-y-4 reveal reveal-delay-2">
            {/* Email — click to copy */}
            <button
              onClick={handleCopyEmail}
              className="w-full bg-white dark:bg-slate-800/40 border border-[#E4E4E7] dark:border-slate-700/50 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/40 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  Email
                </p>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                  {copied ? "Copied to clipboard ✓" : EMAIL}
                </span>
              </div>
            </button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/manghi96"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white dark:bg-slate-800/40 border border-[#E4E4E7] dark:border-slate-700/50 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.5a1.68 1.68 0 0 0-1.68 1.68c0 .93.75 1.68 1.68 1.68s1.68-.75 1.68-1.68c0-.93-.75-1.68-1.68-1.68Z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>LinkedIn</p>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                  linkedin.com/in/manghi96 ↗
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="w-full bg-white dark:bg-slate-800/40 border border-[#E4E4E7] dark:border-slate-700/50 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Location</p>
                <span className="text-slate-700 dark:text-slate-300 text-sm">Tan Thoi Hiep, Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-slate-500 dark:text-slate-500 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Tran Minh Nghia — Built with Next.js & TypeScript
          </span>
          <span className="text-slate-500 dark:text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            HCMC Vietnam
          </span>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useRef, useEffect, type RefObject } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const EMAIL = "manghi.work@gmail.com";
// Đường dẫn đến file CV duy nhất của bạn
const CV_FILE = "Tran_Minh_Nghia_Resume.pdf";

function DownloadCVButton() {
  const { language } = useLanguage();

  return (
    <a
      href={CV_FILE}
      download="Tran_Minh_Nghia_Resume.pdf"
      className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm inline-flex items-center gap-2"
    >
      {language === "en" ? "Download Resume" : "Tải CV"}
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

function FooterKitten({ footerRef }: { footerRef: RefObject<HTMLElement> }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const wrapper = wrapperRef.current;
    const cat = catRef.current;
    const head = headRef.current;
    if (!footer || !wrapper || !cat || !head) return;

    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let walkTimer: number | undefined;
    let jumpTimer: number | undefined;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = footer.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY;

      const nextLeft = Math.max(0, Math.min(bounds.width - cat.offsetWidth, pointerX - cat.offsetWidth / 2));
      const movingRight = nextLeft > cat.offsetLeft;
      cat.style.left = `${nextLeft}px`;
      cat.classList.toggle("face_right", movingRight);
      cat.classList.toggle("face_left", !movingRight);
      cat.classList.remove("first_pose");
      head.style.top = pointerY > bounds.top - 100 ? "-15px" : "-30px";

      const legs = cat.querySelectorAll(".footer-kitten__leg");
      legs.forEach((leg) => leg.classList.add("walk"));
      window.clearTimeout(walkTimer);
      walkTimer = window.setTimeout(() => {
        legs.forEach((leg) => leg.classList.remove("walk"));
      }, 1500);
    };

    const jumpIfNeeded = () => {
      if (pointerX === null || pointerY === null) return;
      const bounds = footer.getBoundingClientRect();
      if (pointerY >= bounds.top - 200) return;

      wrapper.classList.remove("jump");
      void wrapper.offsetWidth;
      wrapper.classList.add("jump");
      window.clearTimeout(jumpTimer);
      jumpTimer = window.setTimeout(() => wrapper.classList.remove("jump"), 1000);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    const jumpInterval = window.setInterval(jumpIfNeeded, 1000);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearInterval(jumpInterval);
      window.clearTimeout(walkTimer);
      window.clearTimeout(jumpTimer);
    };
  }, [footerRef]);

  return (
    <div className="footer-kitten__track" aria-hidden="true">
      <div className="footer-kitten__wrapper" ref={wrapperRef}>
        <div className="footer-kitten first_pose" ref={catRef}>
          <div className="footer-kitten__head" ref={headRef}>
            <svg viewBox="0 0 76.4 61.2">
              <polygon className="footer-kitten__eyes" points="63.8,54.1 50.7,54.1 50.7,59.6 27.1,59.6 27.1,54.1 12.4,54.1 12.4,31.8 63.8,31.8" />
              <path d="M10.2,61.2v-5.1H5.1V51H0V25.5h5.1V15.3h5.1V5.1h5.1V0h5.1v5.1h5.1v5.1h5.1v5.1c0,0,15.2,0,15.2,0v-5.1h5.1V5.1H56V0h5.1v5.1h5.1v10.2h5.1v10.2h5.1l0,25.5h-5.1v5.1h-5.1v5.1H10.2z" />
              <path className="footer-kitten__face-detail" d="M15.3,45.9h5.1V35.7h-5.1C15.3,35.7,15.3,45.9,15.3,45.9z M45.8,56.1V51H30.6v5.1H45.8z M61.1,35.7H56v10.2h5.1V35.7z" />
            </svg>
          </div>
          <div className="footer-kitten__body">
            <svg viewBox="0 0 91.7 40.8">
              <path d="M91.7,40.8H0V10.2h5.1V5.1h5.1V0h66.2v5.1h10.2v5.1h5.1L91.7,40.8z" />
            </svg>
            <div className="footer-kitten__tail">
              <svg viewBox="0 0 25.5 61.1">
                <polygon points="10.2,56 10.2,50.9 5.1,50.9 5.1,40.7 0,40.7 0,20.4 5.1,20.4 5.1,10.2 10.2,10.2 10.2,5.1 15.3,5.1 15.3,0 25.5,0 25.5,10.2 20.4,10.2 20.4,15.3 15.3,15.3 15.3,20.4 10.2,20.4 10.2,40.7 15.3,40.7 15.3,45.8 20.4,45.8 20.4,50.9 25.5,50.9 25.5,61.1 15.3,61.1 15.3,56" />
              </svg>
            </div>
          </div>
          <div className="footer-kitten__front-legs">
            <div className="footer-kitten__leg one"><svg viewBox="0 0 14 30.5"><polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" /></svg></div>
            <div className="footer-kitten__leg two"><svg viewBox="0 0 14 30.5"><polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" /></svg></div>
          </div>
          <div className="footer-kitten__back-legs">
            <div className="footer-kitten__leg three"><svg viewBox="0 0 14 30.5"><polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" /></svg></div>
            <div className="footer-kitten__leg four"><svg viewBox="0 0 14 30.5"><polygon points="15.3,30.5 5.1,30.5 5.1,25.4 0,25.4 0,0 15.3,0" /></svg></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-white dot-texture pt-24 overflow-hidden"
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
        {language === "en" ? "✓ Email copied to clipboard" : "✓ Đã sao chép email"}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left ── */}
          <div>
            <p className="section-badge mb-6 reveal">
              {language === "en" ? "06 — Contact" : "06 — Liên hệ"}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-slate-950 dark:text-slate-50 leading-tight mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {language === "en" ? "Let's build" : "Cùng xây dựng"}
              <br />
              <span className="italic text-blue-600 dark:text-blue-500">
                {language === "en" ? "something great" : "những điều tuyệt vời"}
              </span>
            </h2>
            <p className="text-slate-700 dark:text-slate-400 text-base leading-relaxed max-w-md mb-10 reveal reveal-delay-2">
              {language === "en" ? "I'm happy to connect, listen and help." : "Tôi luôn sẵn lòng kết nối, lắng nghe và hỗ trợ."}
              <br />
              {language === "en" ? "Let's work together and build something awesome." : "Hãy cùng hợp tác và tạo nên những điều tuyệt vời."}
            </p>

            <div className="flex flex-wrap gap-3 reveal reveal-delay-3">
              <DownloadCVButton />
            </div>
          </div>

          {/* ── Right: Links ── */}
          <div className="space-y-4 reveal reveal-delay-2">
            {/* Email — click to copy */}
            <button
              onClick={handleCopyEmail}
              className="w-full bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover-lift transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  Email
                </p>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors text-sm">
                  {copied
                    ? language === "en" ? "Copied to clipboard ✓" : "Đã sao chép ✓"
                    : EMAIL}
                </span>
              </div>
            </button>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/manghi96"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover-lift transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" />
                  <path d="M12 16v-5" />
                  <path d="M16 16v-3a2 2 0 1 0-4 0" />
                  <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>LinkedIn</p>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors text-sm">
                  linkedin.com/in/manghi96 ↗
                </span>
              </div>
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/8PKcdyHy9mKsmro57"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover-lift transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-500 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  {language === "en" ? "Location" : "Địa chỉ"}
                </p>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors text-sm">
                  {language === "en" ? "Tan Thoi Hiep, Ho Chi Minh City ↗" : "Tân Thới Hiệp, Thành phố Hồ Chí Minh ↗"}
                </span>
              </div>
            </a>
          </div>
          </div>
        </div>

        {/* Footer */}
        <footer ref={footerRef} className="relative mt-60 border-t border-slate-200 bg-white dark:border-white/5 dark:bg-[#253D77]">
          <FooterKitten footerRef={footerRef} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-center text-slate-500 dark:text-slate-500 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              {language === "en"
                ? "© 2026 Tran Minh Nghia — Built with Next.js & TypeScript"
                : "© 2026 Trần Minh Nghĩa — Phát triển bằng Next.js & TypeScript"}
            </span>
            <span className="text-slate-500 dark:text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              {language === "en" ? "HCMC Vietnam" : "TP. Hồ Chí Minh, Việt Nam"}
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
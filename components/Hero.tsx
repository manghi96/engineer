"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const ROLES = {
  en: ["BIM Plumbing Modeler.", "Plumbing Engineer.", "Product Designer.", "Minimalist.", "Cinephilia."],
  vi: ["BIM Modeler Cấp thoát nước.", "Kỹ sư Cấp thoát nước.", "Nhà thiết kế sản phẩm.", "Người yêu tối giản.", "Người yêu điện ảnh."],
};
const TERMINAL_LINES = {
  en: [
  "> Initializing...",
  "> Loading profile: NGHIA_TRAN.engineer",
  "> Expertise: BIM Modeling | Design & Calculation | Documentation",
  "> Status: Ready for transmission...",
  "",
  ],
  vi: [
    "> Đang khởi tạo...",
    "> Đang tải hồ sơ: NGHIA_TRAN.engineer",
    "> Chuyên môn: BIM Modeling | Thiết kế & Tính toán | Hồ sơ kỹ thuật",
    "> Trạng thái: Sẵn sàng...",
    "",
  ],
};
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

function TypingText() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    setText("");
    setIdx(0);
    setDeleting(false);
  }, [language]);

  useEffect(() => {
    const current = ROLES[language][idx];
    const speed = deleting ? 35 : 75;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((p) => (p + 1) % ROLES[language].length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, idx, language]);

  return (
    <span>
      {text}
      <span
        className="cursor-blink ml-0.5 inline-block w-[2px] h-5 bg-blue-500 align-middle"
        aria-hidden
      />
    </span>
  );
}

function TerminalProfile() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const { language } = useLanguage();
  const terminalLines = TERMINAL_LINES[language];

  useEffect(() => {
    if (lineIndex >= terminalLines.length) return;

    const line = terminalLines[lineIndex];
    const timer = setTimeout(() => {
      if (charIndex < line.length) {
        setText((prev) => prev + line[charIndex]);
        setCharIndex((prev) => prev + 1);
        return;
      }

      if (lineIndex < terminalLines.length - 1) {
        setText((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, charIndex === 0 && lineIndex === 0 ? 800 : 28 + Math.random() * 35);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex, terminalLines]);

  return (
    <div className="code-window float">
      <div className="titlebar">
        <span className="code-dot bg-[#FF5F57]" />
        <span className="code-dot bg-[#FEBC2E]" />
        <span className="code-dot bg-[#28C840]" />
        <span className="ml-4 text-xs" style={{ fontFamily: "var(--font-mono)", color: "#7A8BA3" }}>
          nghia_tran.exe
        </span>
      </div>
      <div className="terminal-body" style={{ fontFamily: "var(--font-mono)" }}>
        <span className="terminal-text">{text}</span>
        <span className="terminal-cursor">█</span>
      </div>
    </div>
  );
}

export { DownloadCVButton, TypingText, TerminalProfile };

export default function Hero() {
  const { language } = useLanguage();
  const [emailCopyStatus, setEmailCopyStatus] = useState<"copied" | "error" | null>(null);

  useEffect(() => {
    if (!emailCopyStatus) return;

    const timer = window.setTimeout(() => setEmailCopyStatus(null), 2000);
    return () => window.clearTimeout(timer);
  }, [emailCopyStatus]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("manghi.work@gmail.com");
      setEmailCopyStatus("copied");
    } catch (error) {
      console.error("Unable to copy email address to clipboard.", error);
      setEmailCopyStatus("error");
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-white dot-texture opacity-100" />
      {/* Radial fade */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0C1220] via-[#0C1220]/80 to-[#0D1F30]" /> */}
      {/* Teal glow */}
      {/* <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Left: Content ── */}
        <div>
          <p
            className="text-blue-500 text-xs tracking-[0.18em] uppercase mb-6 section-badge"
            style={{ animation: "fadeInUp 0.5s ease both" }}
          >
            {language === "en" ? "✦ Portfolio" : "✦ Portfolio"}
          </p>

          <h1
            className="text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black text-slate-800 dark:text-white leading-[1.08] mb-5"
            style={{
              fontFamily: "var(--font-sans)",
              animation: "fadeInUp 0.6s 0.08s ease both",
            }}
          >
            {language === "en" ? "NGHIA" : "NGHĨA"}
            {/* <br /> */}
            <span className="text-blue-600 dark:text-blue-500">
              {language === "en" ? " TRAN" : " TRẦN"}
            </span>
          </h1>

          <p
            className="text-xl text-slate-800 dark:text-slate-200 h-8 mb-5"
            style={{
              fontFamily: "var(--font-sans)",
              animation: "fadeInUp 0.6s 0.16s ease both",
            }}
          >
            <TypingText />
          </p>

          <p
            className="text-slate-700 dark:text-slate-400 text-base leading-relaxed mb-10"
            style={{ animation: "fadeInUp 0.6s 0.24s ease both" }}
          >
            {language === "en"
              ? "Environmental Engineering graduate specializing in Water Supply & Drainage, with UI/UX design experience. Seeking a BIM Modeler (Plumbing/MEP) position to combine my technical knowledge of water/wastewater systems with advanced 3D modeling and spatial design skills. Highly motivated to deliver accurate 3D models, streamline workflows, and grow into a BIM Manager."
              : "Tốt nghiệp ngành Kỹ thuật Môi trường, chuyên ngành Cấp thoát nước, cùng kinh nghiệm về thiết kế UI/UX. Tôi đang tìm kiếm vị trí BIM Modeler (Cấp thoát nước/MEP) để kết hợp kiến thức kĩ thuật về hệ thống cấp thoát nước với kỹ năng mô hình hóa 3D và thiết kế không gian. Luôn nỗ lực tạo ra mô hình chính xác, tối ưu quy trình và đặt mục tiêu trở thành BIM Manager."}
          </p>

          <div
            className="flex flex-wrap gap-3 mb-10"
            style={{ animation: "fadeInUp 0.6s 0.32s ease both" }}
          >
            <DownloadCVButton />
            {/* <a
              href="#projects"
              className="px-6 py-3 border border-slate-400 hover:border-blue-600 text-slate-800 hover:text-slate-950 dark:border-slate-600 dark:text-slate-200 dark:hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              {language === "en" ? "View Projects" : "Xem dự án"}
            </a> */}
          </div>

          <div
            className="flex items-center gap-6 pt-6 border-t border-slate-300 dark:border-slate-700"
            style={{ animation: "fadeInUp 0.6s 0.4s ease both" }}
          >
            <button
              onClick={copyEmail}
              className="text-slate-700 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-500 transition-colors text-sm font-mono"
            >
              {emailCopyStatus === "copied"
                ? language === "en" ? "Email copied ✓" : "Đã sao chép email ✓"
                : emailCopyStatus === "error"
                  ? language === "en" ? "Copy failed" : "Sao chép thất bại"
                  : language === "en" ? "Email ↗" : "Email ↗"}
            </button>
            <a
              href="https://www.linkedin.com/in/manghi96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-500 transition-colors text-sm font-mono"
            >
              LinkedIn ↗
            </a>
            <span className="sr-only" role="status" aria-live="polite">
              {emailCopyStatus === "copied"
                ? language === "en" ? "Email address copied to clipboard." : "Đã sao chép địa chỉ email."
                : emailCopyStatus === "error"
                  ? language === "en" ? "Could not copy email address." : "Không thể sao chép địa chỉ email."
                  : ""}
            </span>
          </div>
        </div>

        {/* ── Right: Code Window ── */}
        <div
          className="hidden lg:block"
          style={{ animation: "fadeInUp 0.7s 0.2s ease both" }}
        >
          <TerminalProfile key={language} />

          {/* <div className="flex flex-wrap gap-2 mt-4">
            {["BIM Modeling", "Design & Calculation", "Documentation"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full border"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: "rgba(10, 14, 23, 0.85)",
                  borderColor: "rgba(0, 240, 255, 0.18)",
                  color: "#A5F3FC",
                  boxShadow: "0 0 12px rgba(0, 240, 255, 0.08)",
                }}
              >
                {t}
              </span>
            ))}
          </div> */}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 dark:text-slate-400 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
          {language === "en" ? "scroll" : "cuộn xuống"}
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500/60 to-transparent" />
      </div>
    </section>
  );
}
"use client";

import RainDropsModel from "@/components/RainDropsModel";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="section-badge mb-6 reveal">{language === "en" ? "01 — About" : "01 — Giới thiệu"}</p>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <RainDropsModel />
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {language === "en" ? "Building things" : "Kiến tạo những thứ"}
              <br />
              <span className="italic text-blue-600 dark:text-blue-500">
                {language === "en" ? " that actually matter" : " thật sự ý nghĩa"}
              </span>
            </h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-400 text-base leading-relaxed">
              <p className="reveal reveal-delay-2">
                {language === "en"
                  ? "I'm an Environmental Engineering graduate from Ton Duc Thang University, specializing in Water Supply & Drainage. I have built a strong technical foundation in water and wastewater systems, alongside solid expertise in 3D visualization, spatial design, and digital workflows."
                  : "Tôi tốt nghiệp ngành Kỹ thuật Môi trường tại Trường Đại học Tôn Đức Thắng, chuyên ngành Cấp thoát nước. Tôi có nền tảng chuyên môn vững chắc về hệ thống cấp thoát nước, cùng kinh nghiệm về trực quan hóa 3D, thiết kế không gian và quy trình làm việc số."}
              </p>
              <p className="reveal reveal-delay-3">
                {language === "en"
                  ? "I'm actively seeking a position as a BIM Modeler (Plumbing/MEP) where I can apply my engineering knowledge and digital modeling precision to create accurate, clash-free BIM models. I am eager to contribute to efficient project delivery while continuously developing my technical and coordination skills to achieve my long-term career goal of becoming a BIM Manager."
                  : "Tôi đang tìm kiếm vị trí BIM Modeler (Cấp thoát nước/MEP), nơi tôi có thể vận dụng kiến thức kỹ thuật và khả năng mô hình hóa chính xác để tạo ra các mô hình BIM chuẩn xác, hạn chế xung đột. Tôi mong muốn góp phần triển khai dự án hiệu quả, đồng thời phát triển kỹ năng chuyên môn và phối hợp để hướng đến mục tiêu trở thành BIM Manager."}
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-3">
              {[
                language === "en" ? "HCMC · Vietnam" : "TP.HCM · Việt Nam",
                language === "en" ? "English · Vietnamese" : "Tiếng Anh · Tiếng Việt",
                language === "en" ? "Available for opportunities" : "Sẵn sàng cho những cơ hội mới",
              ].map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full text-slate-500"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
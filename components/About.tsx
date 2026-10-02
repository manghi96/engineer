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
                  ? "I graduated from Ton Duc Thang University with a bachelor's degree in Environmental Engineering Technology, specializing in Water Supply & Drainage. After graduation, I explored the digital multimedia design field, where I strengthened my skills in 3D visualization, complex system structuring, and cross-functional workflow coordination."
                  : "Tôi tốt nghiệp Đại học Tôn Đức Thắng với bằng Cử nhân ngành Công nghệ Kỹ thuật Môi trường, chuyên ngành Cấp thoát nước. Sau khi tốt nghiệp, tôi đã thử sức trong lĩnh vực thiết kế kỹ thuật số đa phương tiện, qua đó trau dồi các kỹ năng về trực quan hóa 3D, xây dựng cấu trúc hệ thống phức tạp và phối hợp quy trình làm việc liên bộ phận."}
              </p>
              <p className="reveal reveal-delay-3">
                {language === "en"
                  ? "I'm now shifting my career direction and am fully committed to returning to my core engineering path. I am seeking a Plumbing/MEP BIM Modeler role where I can combine my academic engineering knowledge with my advanced 3D modeling skills to build precise, production-ready BIM models and grow into a professional BIM Manager."
                  : "Hiện tại, tôi đang chuyển hướng sự nghiệp và hoàn toàn quyết tâm quay trở lại với con đường kỹ thuật chuyên môn. Tôi đang tìm kiếm vị trí BIM Modeler (Cấp thoát nước/MEP), nơi tôi có thể kết hợp kiến ​​thức kỹ thuật nền tảng cùng kỹ năng mô hình hóa 3D chuyên sâu để tạo ra các mô hình BIM chính xác, sẵn sàng cho giai đoạn thi công, đồng thời phát triển bản thân trở thành một BIM Manager."}
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
"use client";

import { useLanguage } from "@/components/LanguageProvider";

type TimelineItem = {
  period: string;
  title: string;
  viTitle: string;
  org: string;
  // type: "work" | "education";
  // tags?: string[];
  description?: string;
  viDescription?: string;
};

const renderDescription = (description: string) =>
  description.split("\n").filter(Boolean).map((line, index) => {
    const cleanedLine = line.replace(/^•\s*/, "");
    const [title, ...rest] = cleanedLine.split(":");

    if (rest.length > 0) {
      return (
        <div key={index} className="flex items-start gap-2 text-sm leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-300">{title.trim()}</span>
            {": "}
            <span className="text-slate-600 dark:text-slate-400">{rest.join(":").trim()}</span>
          </p>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-start gap-2 text-sm leading-relaxed">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
        <p>{cleanedLine}</p>
      </div>
    );
  });

const ITEMS: TimelineItem[] = [
  {
    period: "2024 — 2026",
    title: "Product Designer",
    viTitle: "Product Designer",
    org: "Hippo Technology",
    // type: "work",
    // tags: ["Manual Testing", "Front-end Dev", "Industry Experience"],
    description:
      "• Product & Design Leadership: Led end-to-end design initiatives from the company’s inception across Fintech, Crypto Exchange, and Logistics sectors. Collaborated with POs, Stakeholders, and Dev teams in an Agile environment to align design solutions with business goals.\n• Design Systems & Brand Strategy: Built and maintained comprehensive Design Systems and visual brand identities for an ecosystem of products (Katchy, PayAny, Hippo Supply Chain, ZebraLinks, etc.), ensuring cross-platform consistency and scalability.\n• End-to-End UX/UI Execution: Delivered intuitive Web and Mobile experiences by executing user flows, wireframes, high-fidelity prototypes, and user testing.\n• AI Integration: Applied modern AI tools to accelerate design UI, UX research, document analysis, and feature brainstorming, significantly streamlining the early discovery phase.",
    viDescription:
      "• Dẫn dắt sản phẩm & thiết kế: Khởi xướng và dẫn dắt các hoạt động thiết kế xuyên suốt từ khi công ty thành lập trong các lĩnh vực Fintech, sàn giao dịch tiền mã hóa và Logistics. Phối hợp với PO, các bên liên quan và đội ngũ phát triển theo phương pháp Agile để đảm bảo giải pháp thiết kế phù hợp mục tiêu kinh doanh.\n• Hệ thống thiết kế & chiến lược thương hiệu: Xây dựng và duy trì hệ thống thiết kế cùng nhận diện thương hiệu cho hệ sinh thái sản phẩm (Katchy, PayAny, Hippo Supply Chain, ZebraLinks...), đảm bảo tính nhất quán và khả năng mở rộng đa nền tảng.\n• Triển khai UX/UI đầu-cuối: Thiết kế trải nghiệm Web và Mobile trực quan thông qua luồng người dùng, wireframe, prototype độ trung thực cao và kiểm thử người dùng.\n• Ứng dụng AI: Sử dụng các công cụ AI hiện đại để tăng tốc thiết kế UI, nghiên cứu UX, phân tích tài liệu và đề xuất ý tưởng tính năng, rút ngắn đáng kể giai đoạn khám phá ban đầu.",
  },
  {
    period: "2022",
    title: "UI/UX Designer",
    viTitle: "UI/UX Designer",
    org: "ITC Group",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Internal Brand & Product UI Design: Partnered with the product team to conceptualize and design a cohesive brand identity and internal UI for the company's insurance product line.\n• Enterprise CRM (IZIon24): Designed user interfaces for an external CRM management system and the IZIon24 App, optimizing complex workflows for both internal teams and external client usability.\n• Cross-functional Collaboration: Worked closely with Business Analysts (BAs) and Quality Assurance QA teams to align and refine Business Requirement Documents (BRDs) and test cases, ensuring high design precision during development.",
    viDescription:
      "• Thiết kế thương hiệu nội bộ & giao diện sản phẩm: Phối hợp với nhóm sản phẩm xây dựng ý tưởng và thiết kế nhận diện thương hiệu đồng bộ cùng giao diện nội bộ cho dòng sản phẩm bảo hiểm của công ty.\n• CRM doanh nghiệp (IZIon24): Thiết kế giao diện cho hệ thống quản lý CRM bên ngoài và ứng dụng IZIon24, tối ưu quy trình phức tạp cho cả đội ngũ nội bộ và khách hàng.\n• Phối hợp liên chức năng: Làm việc chặt chẽ với chuyên viên phân tích nghiệp vụ (BA) và nhóm đảm bảo chất lượng (QA) để thống nhất, hoàn thiện tài liệu yêu cầu nghiệp vụ (BRD) và các trường hợp kiểm thử, đảm bảo độ chính xác thiết kế trong quá trình phát triển.",
  },
  {
    period: "2022",
    title: "UI Designer",
    viTitle: "UI Designer",
    org: "TTM68 Network",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Web & Brand Redesign (MKLabs): Spearheaded the visual redesign of the company's internal NFT game platform (MKLabs), including brand logo refresh, visual layout enhancement, and wireframing.\n• Visual & Layout Enhancement: Transformed complex Web3/NFT concepts into intuitive wireframes and modern visual interfaces, improving user navigation and engagement.",
    viDescription:
      "• Thiết kế lại Website & thương hiệu (MKLabs): Dẫn dắt quá trình đổi mới hình ảnh nền tảng game NFT nội bộ của công ty, bao gồm làm mới logo, cải thiện bố cục và xây dựng wireframe.\n• Cải thiện hình ảnh & bố cục: Chuyển hóa các khái niệm Web3/NFT phức tạp thành wireframe trực quan và giao diện hiện đại, giúp cải thiện điều hướng và mức độ tương tác của người dùng.",
  },
  {
    period: "2021",
    title: "Web Designer",
    viTitle: "Web Designer",
    org: "WOWCNS Vietnam",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Cross-Platform UI Design: Designed responsive Web and Mobile user interfaces focused on clean aesthetic appeal and functional user experience.\n• Front-End Development Support: Collaborated directly with Front-End Developers to adjust, fine-tune, and inspect HTML/CSS files, ensuring pixel-perfect implementation of designs.",
    viDescription:
      "• Thiết kế UI đa nền tảng: Thiết kế giao diện Web và Mobile đáp ứng nhiều kích thước màn hình, chú trọng thẩm mỹ gọn gàng và trải nghiệm sử dụng hiệu quả.\n• Hỗ trợ phát triển Front-End: Phối hợp trực tiếp với lập trình viên Front-End để điều chỉnh, tinh chỉnh và kiểm tra tệp HTML/CSS, đảm bảo giao diện triển khai sát với thiết kế.",
  },
  {
    period: "2021",
    title: "Graphic Designer",
    viTitle: "Graphic Designer",
    org: "4Bros Media",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Print-on-Demand POD Design: Designed custom graphics, apparel typography, and personalized artwork for print-ondemand products, including merchandise, apparel, and giftware.\n• Pre-press & Production Specs: Prepared print-ready files, managing color profiles, image resolution, and layout scale to ensure high-quality output across various printing techniques.\n• Trend Research & Asset Creation: Researched market trends and consumer preferences to create scalable visual assets and digital mockups for promotional and e-commerce displays.",
    viDescription:
      "• Thiết kế Print-on-Demand (POD): Thiết kế đồ họa tùy chỉnh, kiểu chữ trên trang phục và tác phẩm cá nhân hóa cho các sản phẩm in theo yêu cầu như hàng lưu niệm, quần áo và quà tặng.\n• Chuẩn bị in & thông số sản xuất: Chuẩn bị tệp sẵn sàng in, quản lý hệ màu, độ phân giải ảnh và tỷ lệ bố cục để đảm bảo chất lượng trên nhiều kỹ thuật in.\n• Nghiên cứu xu hướng & tạo tài nguyên: Nghiên cứu xu hướng thị trường và sở thích khách hàng để tạo tài nguyên đồ họa có thể mở rộng cùng bản mô phỏng số phục vụ quảng bá và thương mại điện tử.",
  },
  {
    period: "2020",
    title: "Staff",
    viTitle: "Nhân viên",
    org: "Canadisign Home Solutions",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• AutoCAD drawing.\n• Statistical report.",
    viDescription: "• Triển khai bản vẽ AutoCAD.\n• Lập báo cáo thống kê.",
  },
  {
    period: "2020",
    title: "Staff",
    viTitle: "Nhân viên",
    org: "Good Land Informatics",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Data processing.\n• Paperwork.\n• Statistical report.",
    viDescription: "• Xử lý dữ liệu.\n• Xử lý giấy tờ.\n• Lập báo cáo thống kê.",
  },
  {
    period: "2018",
    title: "Technical Staff",
    viTitle: "Nhân viên kỹ thuật",
    org: "Gia Bao Trading Service Techniques",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Construction and installation of electrical networks, water supply and drainage system for Vietnam Canada (Montessori) preschool construction project.",
    viDescription:
      "• Thi công và lắp đặt hệ thống điện, cấp nước và thoát nước cho dự án xây dựng Trường Mầm non Việt Nam Canada (Montessori).",
  },
];

const typeStyle = {
  work: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    label: "Work",
  },
  education: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    label: "Education",
  },
};

export default function Timeline() {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-6 reveal">
            {language === "en" ? "04 — Experience" : "04 — Kinh nghiệm"}
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {language === "en" ? "My" : "Hành trình"}
            {/* <br /> */}
            <span className="italic text-blue-600 dark:text-blue-500">
              {language === "en" ? " journey so far" : " của tôi đến hiện tại"}
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-8 pl-8">
            {ITEMS.map((item, i) => (
              <div
                key={i}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Dot */}
                <div className="timeline-dot" />

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      {/* <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full border font-mono ${typeStyle[item.type].badge}`}
                        >
                          {typeStyle[item.type].label}
                        </span>
                      </div> */}
                      <h3 className="font-bold text-slate-700 text-lg mb-0.5">
                        {language === "en" ? item.title : item.viTitle}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-500 text-sm font-medium">{item.org}</p>
                    </div>
                    <span
                      className="text-xs text-slate-400 whitespace-nowrap mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {language === "vi" && item.period.endsWith("Present")
                        ? item.period.replace("Present", "Hiện tại")
                        : item.period}
                    </span>
                  </div>

                  {item.description && (
                    <div className="space-y-2 mb-2">
                      {renderDescription(
                        language === "en" ? item.description : item.viDescription ?? item.description,
                      )}
                    </div>
                  )}

                  {/* {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

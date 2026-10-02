"use client";

import { useLanguage } from "@/components/LanguageProvider";

type TimelineItem = {
  period: string;
  title: string;
  viTitle: string;
  org: string;
  type: "Full Time" | "Part Time" | "Internship" | "Contract" | "Freelance";
  viType?: string;
  tags?: string[];
  viTags?: string[];
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
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
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
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
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
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Standardized Component Systems", "Cross-functional Coordination", "Technical System Workflows", "AI Workflow Acceleration"],
    viTags: ["Hệ thống thành phần chuẩn hóa", "Phối hợp liên chức năng", "Quy trình hệ thống kỹ thuật", "Tăng tốc quy trình AI"],
    description:
      "• System Architecture & Standardization: Built and maintained comprehensive, scalable component systems and visual documentation, ensuring high precision, consistency, and reusability across complex digital ecosystems.\n• Cross-functional & Technical Coordination: Collaborated directly with product owners, stakeholders, and engineering teams in an Agile environment to translate complex business logic into structured technical solutions.\n• Complex Workflow Mapping: Designed end-to-end structural workflows, spatial layouts, and interactive prototypes, optimizing complex multi-layered system processes for maximum clarity.\n• AI-Powered Process Acceleration: Applied modern AI tools to accelerate technical research, document analysis, and workflow optimization, significantly streamlining early-stage discovery phases.",
    viDescription:
      "• Kiến trúc hệ thống & Chuẩn hóa: Xây dựng và duy trì hệ thống thành phần và tài liệu trực quan toàn diện, có khả năng mở rộng, đảm bảo độ chính xác, nhất quán và khả năng tái sử dụng cao trong các hệ sinh thái kỹ thuật số phức tạp.\n• Phối hợp liên chức năng & kỹ thuật: Hợp tác trực tiếp với chủ sở hữu sản phẩm, các bên liên quan và nhóm kỹ thuật trong môi trường Agile để chuyển đổi logic kinh doanh phức tạp thành các giải pháp kỹ thuật có cấu trúc.\n• Lập bản đồ quy trình làm việc phức tạp: Thiết kế quy trình làm việc từ đầu đến cuối, bố cục không gian và nguyên mẫu tương tác, tối ưu hóa các quy trình hệ thống đa lớp phức tạp để đạt được sự rõ ràng tối đa.\n• Tăng tốc quy trình bằng AI: Áp dụng các công cụ AI hiện đại để tăng tốc nghiên cứu kỹ thuật, phân tích tài liệu và tối ưu hóa quy trình làm việc, giúp đơn giản hóa đáng kể giai đoạn khám phá ban đầu.",
  },
  {
    period: "2022",
    title: "UI/UX Designer",
    viTitle: "UI/UX Designer",
    org: "ITC Group",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Complex Workflow Optimization", "Technical Documentation & QA Precision"],
    viTags: ["Tối ưu hóa quy trình phức tạp", "Tài liệu kỹ thuật & độ chính xác QA"],
    description:
      "• Complex System Workflow Design: Designed intuitive user interfaces and structured workflows for enterprise management systems, simplifying complex operational data for technical and non-technical users.\n• Technical Documentation & Alignment: Partnered closely with Business Analysts (BAs) and Quality Assurance (QA) teams to review, align, and refine technical requirement documents (BRDs) and test scenarios, ensuring strict design-to-implementation accuracy.\n• System Consistency & Visual Standards: Developed cohesive visual layouts and structured brand components for internal enterprise product lines, maintaining high visual alignment across all platforms.",
    viDescription:
      "• Thiết kế quy trình làm việc hệ thống phức tạp: Thiết kế giao diện người dùng trực quan và quy trình làm việc có cấu trúc cho các hệ thống quản lý doanh nghiệp, đơn giản hóa dữ liệu vận hành phức tạp cho cả người dùng kỹ thuật và phi kỹ thuật.\n• Tài liệu kỹ thuật & Đồng bộ hóa: Hợp tác chặt chẽ với các Nhà phân tích Kinh doanh (BA) và nhóm Đảm bảo Chất lượng (QA) để xem xét, đồng bộ hóa và tinh chỉnh các tài liệu yêu cầu kỹ thuật (BRD) và kịch bản kiểm thử, đảm bảo độ chính xác từ thiết kế đến triển khai.\n• Tính nhất quán hệ thống & Tiêu chuẩn hình ảnh: Phát triển bố cục hình ảnh đồng bộ và các thành phần thương hiệu có cấu trúc cho các dòng sản phẩm nội bộ của doanh nghiệp, duy trì sự đồng bộ hình ảnh cao trên tất cả các nền tảng.",
  },
  {
    period: "2022",
    title: "UI Designer",
    viTitle: "UI Designer",
    org: "TTM68 Network",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["UI Design", "Visual Design", "Web3/NFT"],
    viTags: ["Thiết kế UI", "Thiết kế hình ảnh", "Web3/NFT"],
    description:
      "• Spatial Layout & Wireframing: Designed structured spatial layouts and detailed wireframes for complex digital platforms, ensuring clear spatial hierarchy and organized component distribution.\n• Complex System Visualization: Translated multi-layered system structures and technical requirements into clear, intuitive 2D/3D visual interfaces to optimize navigation and clarity.",
    viDescription:
      "• Bố cục không gian & Wireframing: Thiết kế bố cục không gian có cấu trúc và wireframe chi tiết cho các nền tảng kỹ thuật số phức tạp, đảm bảo thứ bậc không gian rõ ràng và phân phối thành phần có tổ chức.\n• Trực quan hóa hệ thống phức tạp: Chuyển đổi các cấu trúc hệ thống đa lớp và yêu cầu kỹ thuật thành giao diện trực quan 2D/3D rõ ràng, trực quan để tối ưu hóa điều hướng và sự rõ ràng.",
  },
  {
    period: "2021",
    title: "Web Designer",
    viTitle: "Web Designer",
    org: "WOWCNS Vietnam",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Technical Layout", "Implementation & Quality Inspection"],
    viTags: ["Bố cục kỹ thuật", "Triển khai & kiểm tra chất lượng"],
    description:
      "• Technical Layout & Dimensional Precision: Created responsive layout frameworks with a focus on structural accuracy, grid alignment, and clean visual organization.\n• Implementation & Quality Inspection: Worked directly with engineering teams to inspect, fine-tune, and verify design outputs against technical specifications, ensuring exact pixel-perfect fidelity.",
    viDescription:
      "• Bố cục kỹ thuật & Độ chính xác kích thước: Tạo các khung bố cục đáp ứng với trọng tâm là độ chính xác cấu trúc, căn chỉnh lưới và tổ chức hình ảnh sạch sẽ.\n• Triển khai & Kiểm tra chất lượng: Làm việc trực tiếp với các nhóm kỹ thuật để kiểm tra, tinh chỉnh và xác minh đầu ra thiết kế so với các thông số kỹ thuật kỹ thuật, đảm bảo độ trung thực chính xác từng pixel.",
  },
  {
    period: "2021",
    title: "Graphic Designer",
    viTitle: "Graphic Designer",
    org: "4Bros Media",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Print-on-Demand", "Pre-press", "Trend Research"],
    viTags: ["In ấn theo yêu cầu", "Pre-press", "Nghiên cứu xu hướng"],
    description:
      "• Production Specifications: Prepared production-ready technical assets, managing layout scale, output specifications, and precision tolerances.\n• Asset Standardization: Developed scalable visual assets and digital mockups following strict technical requirements for manufacturing and output.",
    viDescription:
      "• Thông số kỹ thuật sản xuất: Chuẩn bị các tài sản kỹ thuật sẵn sàng sản xuất, quản lý tỷ lệ bố cục, thông số đầu ra và dung sai chính xác.\n• Chuẩn hóa tài sản: Phát triển các tài sản hình ảnh có khả năng mở rộng và mô phỏng kỹ thuật số theo các yêu cầu kỹ thuật nghiêm ngặt cho sản xuất và đầu ra.",
  },
  {
    period: "2020",
    title: "Staff",
    viTitle: "Nhân viên",
    org: "Canadisign Home Solutions",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Technical Support", "Quantity Survey & Reporting"],
    viTags: ["Hỗ trợ kỹ thuật", "Khảo sát số lượng & báo cáo"],
    description:
      "• AutoCAD drawing.\n• Statistical report.",
    viDescription: "• Triển khai bản vẽ AutoCAD.\n• Lập báo cáo thống kê.",
  },
  {
    period: "2020",
    title: "Staff",
    viTitle: "Nhân viên",
    org: "Good Land Informatics",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Data Analysis", "Documentation"],
    viTags: ["Phân tích dữ liệu", "Tài liệu hóa"],
    description:
      "• Data processing.\n• Paperwork.\n• Statistical report.",
    viDescription: "• Xử lý dữ liệu.\n• Xử lý giấy tờ.\n• Lập báo cáo thống kê.",
  },
  {
    period: "2018",
    title: "Technical Staff",
    viTitle: "Nhân viên kỹ thuật",
    org: "Gia Bao Trading Service Techniques",
    type: "Full Time",
    viType: "Toàn thời gian",
    tags: ["Construction", "Installation"],
    viTags: ["Thi công", "Lắp đặt"],
    description:
      "• On-Site MEP Installation: Supported hands-on construction, piping layout, and installation of water supply, drainage, and electrical systems for the Vietnam-Canada (Montessori) Preschool project.\n• Technical Site Coordination: Assisted in reviewing site conditions against engineering drawings to support smooth installation on site.",
    viDescription:
      "• Lắp đặt MEP tại công trình: Hỗ trợ thi công thực tế, bố trí đường ống và lắp đặt hệ thống cấp thoát nước và điện cho dự án Trường Mầm non Việt Nam-Canada (Montessori).\n• Phối hợp kỹ thuật tại hiện trường: Hỗ trợ xem xét điều kiện hiện trường so với bản vẽ kỹ thuật để hỗ trợ việc lắp đặt suôn sẻ tại hiện trường.",
  },
];

const typeStyle = {
  "Full Time": {
    badge: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-400/30",
    label: { en: "Full Time", vi: "Toàn thời gian" },
  },
  "Part Time": {
    badge: "bg-green-50 text-green-700 border-green-200 dark:bg-green-500/15 dark:text-green-300 dark:border-green-400/30",
    label: { en: "Part Time", vi: "Bán thời gian" },
  },
  "Internship": {
    badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/30",
    label: { en: "Internship", vi: "Thực tập" },
  },
  "Contract": {
    badge: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-400/30",
    label: { en: "Contract", vi: "Hợp đồng" },
  },
  "Freelance": {
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-400/30",
    label: { en: "Freelance", vi: "Tự do" },
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
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full border font-mono bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700/60 dark:text-slate-200 dark:border-slate-600"
                        >
                          {language === "en" ? typeStyle[item.type].label.en : item.viType ?? typeStyle[item.type].label.vi}
                        </span>
                      </div>
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
                    <div className="space-y-2 mb-3">
                      {renderDescription(
                        language === "en" ? item.description : item.viDescription ?? item.description,
                      )}
                    </div>
                  )}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {language === "en" ? "Transferable Skills:" : "Kỹ năng chuyển giao:"}
                      </span>
                      {(language === "en" ? item.tags : item.viTags ?? item.tags).map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-3 py-0.5 rounded-full border font-mono ${typeStyle[item.type].badge}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

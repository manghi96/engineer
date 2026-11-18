"use client";

import { useLanguage } from "@/components/LanguageProvider";

type Project = {
  title: string;
  subtitle: string;
  viSubtitle: string;
  period: string;
  description: string;
  viDescription: string;
  // businessValue: string;
  role: string;
  viRole: string;
  team: string;
  viTeam: string;
  skill: string[];
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Revit Case Study",
    subtitle: "abc",
    viSubtitle: "abc",
    period: "2026",
    description:
      "xyz",
    viDescription:
      "xyz",
    role: "BIM Modeler",
    viRole: "BIM Modeler",
    team: "Only me",
    viTeam: "Chỉ có tôi",
    skill: ["MPEF Modeling", "AutoDesk Revit", "AutoDesk AutoCAD"],
    githubUrl: "https://viewer.autodesk.com/",
  },
  {
    title: "PayAny",
    subtitle: "Cross-Border Multi-Currency Payment and Digital Wallet Platform",
    viSubtitle: "Nền tảng thanh toán đa tiền tệ xuyên biên giới và ví điện tử",
    period: "2024 — 2026",
    description:
      "A cross-border multi-currency payment and digital wallet platform that enables users to send, receive, and store funds in multiple currencies. Integrates with VeChain blockchain for secure transaction recording and verification.",
    viDescription:
      "Nền tảng thanh toán đa tiền tệ xuyên biên giới và ví điện tử, cho phép người dùng gửi, nhận và lưu trữ tiền bằng nhiều loại tiền tệ. Tích hợp blockchain VeChain để ghi nhận và xác minh giao dịch an toàn.",
    // businessValue:
    //   "Facilitates seamless international transactions, reducing friction and costs for users. Provides a secure and transparent platform for cross-border payments, enhancing trust and adoption.",
    role: "Product Designer · UI/UX Designer · Graphic Designer",
    viRole: "Nhà thiết kế sản phẩm · Thiết kế UI/UX · Thiết kế đồ họa",
    team: "10 members",
    viTeam: "10 thành viên",
    skill: ["Design System", "Wireframing", "Prototyping", "UI/UX Design", "Figma", "Adobe Illustrator", "Adobe Photoshop", "Spline"],
    githubUrl: "https://www.payany.com/",
  },
  {
    title: "IZIon24 Admin Portal",
    subtitle: "Internal Management Web Platform for IZIon24",
    viSubtitle: "Nền tảng web quản trị nội bộ cho IZIon24",
    period: "2022",
    description:
      "A web-based internal management platform for IZIon24, a property service marketplace. The portal allows administrators to manage service providers, residents, and transactions, providing insights and analytics for business operations.",
    viDescription:
      "Nền tảng quản lý nội bộ trên web dành cho IZIon24, một sàn dịch vụ bất động sản. Cổng quản trị giúp quản trị viên quản lý nhà cung cấp dịch vụ, cư dân và giao dịch, đồng thời cung cấp dữ liệu phân tích phục vụ hoạt động kinh doanh.",
    // businessValue:
    //   "Streamlines internal operations, enabling efficient management of service providers and residents. Provides data-driven insights for decision-making, enhancing the overall service quality and customer satisfaction.",
    role: "UI/UX Designer",
    viRole: "Nhà thiết kế UI/UX",
    team: "15 members",
    viTeam: "15 thành viên",
    skill: ["UI/UX Design", "Prototyping", "Figma", "Adobe Illustrator", "Adobe Photoshop"],
    githubUrl: "https://izion24.com.vn/",
  },
  {
    title: "PunchKicks",
    subtitle: "Design POD",
    viSubtitle: "Thiết kế sản phẩm in theo yêu cầu (POD)",
    period: "2021",
    description:
      "PunchKicks is a website selling custom-printed shirts for the US market.",
    viDescription:
      "PunchKicks là một trang web bán áo thun in theo yêu cầu cho thị trường Mỹ.",
    // businessValue:
    //   " Empowers creators and small businesses to monetize their designs through a user-friendly platform. Offers a seamless experience for product customization and order management, enhancing customer engagement and sales.",
    role: "Graphic Designer",
    viRole: "Nhà thiết kế đồ họa",
    team: "5 members",
    viTeam: "5 thành viên",
    skill: ["Graphic Design", "Trend Research", "Adobe Illustrator", "Adobe Photoshop"],
    githubUrl: "https://punchkicks.com/",
  },
];

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-6 reveal">
            {language === "en" ? "03 — Projects" : "03 — Dự án"}
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {language === "en" ? "Things I've" : "Những dự án mà tôi"}
            {/* <br /> */}
            <span className="italic text-blue-600 dark:text-blue-500">
              {language === "en" ? " shipped" : " đã tham gia"}
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="bg-white border border-[#E4E4E7] rounded-2xl overflow-hidden hover-lift reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="p-7 lg:p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* ── Main Info ── */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <div>
                        <div className="mb-1">
                          <h3
                            className="text-xl font-bold text-[#0F0F0E]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-blue-600 text-sm font-medium">
                          {language === "en" ? project.subtitle : project.viSubtitle}
                        </p>
                      </div>
                      <span
                        className="text-xs text-slate-400 whitespace-nowrap mt-0.5"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {project.period}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {language === "en" ? project.description : project.viDescription}
                    </p>

                    {/* Business value */}
                    {/* <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-lg p-4 mb-5">
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mb-1 uppercase tracking-wider">
                        Business Impact
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.businessValue}
                      </p>
                    </div> */}

                    {/* Project skills */}
                    <div className="flex flex-wrap gap-2">
                      {project.skill.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-0.5 rounded-full border font-mono bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/15 dark:text-blue-300 dark:border-blue-400/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ── Sidebar ── */}
                  <div className="border-t lg:border-t-0 lg:border-l border-[#E4E4E7] pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between gap-5">
                    <div>
                      <div className="mb-4">
                        <p className="text-xs text-slate-400 font-mono mb-1">
                          {language === "en" ? "Role" : "Vai trò"}
                        </p>
                        <p className="text-sm text-[#0F0F0E] leading-relaxed">
                          {language === "en" ? project.role : project.viRole}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-mono mb-1">
                          {language === "en" ? "Team" : "Nhóm"}
                        </p>
                        <p className="text-sm text-[#0F0F0E]">
                          {language === "en" ? project.team : project.viTeam}
                        </p>
                      </div>
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors font-mono"
                      >
                        {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg> */}
                        {language === "en" ? "View Project ↗" : "Xem Dự Án ↗"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

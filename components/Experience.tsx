type TimelineItem = {
  period: string;
  title: string;
  org: string;
  // type: "work" | "education";
  // tags?: string[];
  description?: string;
};

const renderDescription = (description: string) =>
  description.split("\n").filter(Boolean).map((line, index) => {
    const cleanedLine = line.replace(/^•\s*/, "");
    const [title, ...rest] = cleanedLine.split(":");

    if (rest.length > 0) {
      return (
        <div key={index} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
          <p>
            <span className="font-semibold text-slate-800">{title.trim()}</span>
            {": "}
            {rest.join(":").trim()}
          </p>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 shrink-0" />
        <p>{cleanedLine}</p>
      </div>
    );
  });

const ITEMS: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "Product Designer",
    org: "Hippo Technology",
    // type: "work",
    // tags: ["Manual Testing", "Front-end Dev", "Industry Experience"],
    description:
      "• Product & Design Leadership: Led end-to-end design initiatives from the company’s inception across Fintech, Crypto Exchange, and Logistics sectors. Collaborated with POs, Stakeholders, and Dev teams in an Agile environment to align design solutions with business goals.\n• Design Systems & Brand Strategy: Built and maintained comprehensive Design Systems and visual brand identities for an ecosystem of products (Katchy, PayAny, Hippo Supply Chain, ZebraLinks, etc.), ensuring cross-platform consistency and scalability.\n• End-to-End UX/UI Execution: Delivered intuitive Web and Mobile experiences by executing user flows, wireframes, high-fidelity prototypes, and user testing.\n• AI Integration: Applied modern AI tools to accelerate design UI, UX research, document analysis, and feature brainstorming, significantly streamlining the early discovery phase.",
  },
  {
    period: "2022",
    title: "UI/UX Designer",
    org: "ITC Group",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Internal Brand & Product UI Design: Partnered with the product team to conceptualize and design a cohesive brand identity and internal UI for the company's insurance product line.\n• Enterprise CRM (IZIon24): Designed user interfaces for an external CRM management system and the IZIon24 App, optimizing complex workflows for both internal teams and external client usability.\n• Cross-functional Collaboration: Worked closely with Business Analysts (BAs) and Quality Assurance QA teams to align and refine Business Requirement Documents (BRDs) and test cases, ensuring high design precision during development.",
  },
  {
    period: "2022",
    title: "UI Designer",
    org: "TTM68 Network",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Web & Brand Redesign (MKLabs): Spearheaded the visual redesign of the company's internal NFT game platform (MKLabs), including brand logo refresh, visual layout enhancement, and wireframing.\n• Visual & Layout Enhancement: Transformed complex Web3/NFT concepts into intuitive wireframes and modern visual interfaces, improving user navigation and engagement.",
  },
  {
    period: "2021",
    title: "Web Designer",
    org: "WOWCNS Vietnam",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Cross-Platform UI Design: Designed responsive Web and Mobile user interfaces focused on clean aesthetic appeal and functional user experience.\n• Front-End Development Support: Collaborated directly with Front-End Developers to adjust, fine-tune, and inspect HTML/CSS files, ensuring pixel-perfect implementation of designs.",
  },
  {
    period: "2021",
    title: "Graphic Designer",
    org: "4Bros Media",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Print-on-Demand POD Design: Designed custom graphics, apparel typography, and personalized artwork for print-ondemand products, including merchandise, apparel, and giftware.\n• Pre-press & Production Specs: Prepared print-ready files, managing color profiles, image resolution, and layout scale to ensure high-quality output across various printing techniques.\n• Trend Research & Asset Creation: Researched market trends and consumer preferences to create scalable visual assets and digital mockups for promotional and e-commerce displays.",
  },
  {
    period: "2020",
    title: "Staff",
    org: "Canadisign Home Solutions",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• AutoCAD drawing.\n• Statistical report.",
  },
  {
    period: "2020",
    title: "Staff",
    org: "Good Land Informatics",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Data processing.\n• Paperwork.\n• Statistical report.",
  },
  {
    period: "2018",
    title: "Technical Staff",
    org: "Gia Bao Trading Service Techniques",
    // type: "education",
    // tags: ["Capstone Project"],
    description:
      "• Construction and installation of electrical networks, water supply and drainage system for Canada preschool construction project.",
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
  return (
    <section id="experience" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-6 reveal">04 — Experience</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My
            {/* <br /> */}
            <span className="italic text-blue-600"> journey so far</span>
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
                      <h3 className="font-bold text-[#0F0F0E] text-lg mb-0.5">{item.title}</h3>
                      <p className="text-blue-600 text-sm font-medium">{item.org}</p>
                    </div>
                    <span
                      className="text-xs text-slate-400 whitespace-nowrap mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <div className="space-y-2 mb-2">{renderDescription(item.description)}</div>
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

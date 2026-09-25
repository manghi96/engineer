type EducationItem = {
  period: string;
  title: string;
  org: string;
};

const ITEMS: EducationItem[] = [
  {
    period: "2014 - 2019",
    title: "Bachelor of Environmental Engineering Technology",
    org: "Ton Duc Thang University",
  },
  {
    period: "2019 - 2022",
    title: "Advanced Diploma of Multimedia Specialist Program",
    org: "Arena Multimedia",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-6 reveal">02 — Education</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where I
            {/* <br /> */}
            <span className="italic text-blue-600"> learned to build</span>
          </h2>
        </div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-6 pl-8">
            {ITEMS.map((item, i) => (
              <div
                key={item.period}
                className="relative reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="timeline-dot" />

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover-lift">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-slate-400 text-lg -mt-1.3 flex-shrink-0">◈</span>
                      <div>
                        <h3 className="font-bold text-gray-700 text-lg mb-0.5">{item.title}</h3>
                        <p className="text-blue-600 text-base font-medium">{item.org}</p>
                      </div>
                    </div>
                    <span
                      className="text-sm text-slate-400 whitespace-nowrap mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

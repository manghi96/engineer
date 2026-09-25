type Certifications = {
  name: string;
  issuer: string;
  relevance: string;
  url: string;
};

const CERTS: Certifications[] = [
  {
    name: "BIM Revit MEPF Certificate",
    issuer: "RevitTech",
    relevance: "BIM MEPF",
    url: "#",
  },
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Coursera",
    relevance: "UX Design",
    url: "#",
  },
  {
    name: "Microsoft Office Specialist Certificate (MOS)",
    issuer: "Microsoft",
    relevance: "Office Productivity",
    url: "#",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="section-badge mb-6 reveal">05 — Certifications</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Continuous
            {/* <br /> */}
            <span className="italic text-blue-600"> learning</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white border border-[#E4E4E7] rounded-xl p-5 flex items-start gap-4 hover-lift reveal group`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#0F0F0E] text-sm leading-snug group-hover:text-blue-700 transition-colors">
                  {cert.name}
                </p>
                <p
                  className="text-xs text-slate-400 mt-1"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {cert.issuer}
                </p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full font-mono">
                  {cert.relevance}
                </span>
              </div>

              <svg className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div>
            <p className="section-badge mb-6 reveal">01 — About</p>
            <h2
              className="text-4xl lg:text-5xl font-bold leading-tight mb-8 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building things
              {/* <br /> */}
              <span className="italic text-blue-600"> that actually matter</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p className="reveal reveal-delay-2">
                I&apos;m an Environmental Engineering graduate from Ton Duc Thang University, 
                specializing in Water Supply & Drainage. I have built a strong technical foundation 
                in water and wastewater systems, alongside solid expertise in 3D visualization, 
                spatial design, and digital workflows.
              </p>
              <p className="reveal reveal-delay-3">
                I&apos;m actively seeking a position as a BIM Modeler (Plumbing/MEP) where I can apply my 
                engineering knowledge and digital modeling precision to create accurate, clash-free BIM models. 
                I am eager to contribute to efficient project delivery while continuously developing my technical 
                and coordination skills to achieve my long-term career goal of becoming a BIM Manager.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 flex flex-wrap gap-3 reveal reveal-delay-3">
              {[
                "HCMC · Vietnam",
                "English · Vietnamese",
                "Available for opportunities",
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
    </section>
  );
}
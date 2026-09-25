type SkillTag = { name: string; type: "software" | "soft" };

const SKILLS: { category: string; emoji: string; desc: string; tags: SkillTag[] }[] = [
  {
    category: "Software Skills",
    emoji: "◈",
    desc: "",
    tags: [
      { name: "AutoDesk Revit", type: "software" },
      { name: "AutoDesk AutoCAD", type: "software" },
      { name: "Navisworks Management", type: "software" },
      { name: "Microsoft Office", type: "software" },
      { name: "AutoDesk Maya", type: "software" },
      { name: "Blender", type: "software" },
      { name: "ZBrush", type: "software" },
      { name: "Adobe Substance 3D Painter", type: "software" },
      { name: "Adobe Photoshop", type: "software" },
      { name: "Adobe Illustrator", type: "software" },
      { name: "Adobe Premiere", type: "software" },
      { name: "Adobe After Effects", type: "software" },
      { name: "Figma", type: "software" },
    ],
  },
  {
    category: "Soft Skills",
    emoji: "◈",
    desc: "",
    tags: [
      { name: "Interdisciplinary Communication & Coordination", type: "soft" },
      { name: "Analytical Problem-Solving & Spatial Thinking", type: "soft" },
      { name: "Collaboration & Teamwork", type: "soft" },
      { name: "Time Management & Organization", type: "soft" },
      { name: "Adaptability & Continuous Learning", type: "soft" },
    ],
  },
];

const tagClass: Record<string, string> = {
  software: "tag-software",
  soft: "tag-soft",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-24 bg-white dot-texture">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="section-badge mb-6 reveal">03 — Skills</p>
          <h2
            className="text-4xl lg:text-5xl font-bold reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I bring
            {/* <br /> */}
            <span className="italic text-blue-600"> to the table</span>
          </h2>
        </div>

        <div className="space-y-6">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className="bg-white border border-[#E4E4E7] rounded-2xl overflow-hidden hover-lift reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="p-7 lg:p-8">
                <div>
                  <div>
                    <div className="flex items-start gap-3 mb-5">
                      <span className="text-blue-500 text-lg -mt-0.5">{group.emoji}</span>
                      <div>
                        <h3 className="text-xl font-bold text-[#0F0F0E]" style={{ fontFamily: "var(--font-display)" }}>
                          {group.category}
                        </h3>
                        {group.desc && <p className="text-xs text-slate-500 mt-0.5">{group.desc}</p>}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {group.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`skill-tag ${tagClass[tag.type]} text-xs px-3 py-1 rounded-full font-mono`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
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

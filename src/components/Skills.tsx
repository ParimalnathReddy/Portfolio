import { useMemo, useState, type ElementType } from "react";

import {
  Code2,
  Brain,
  Database,
  Cloud,
  Wrench,
  Blocks,
  Users,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SkillTag =
  | "Core"
  | "Data"
  | "ML"
  | "MLOps"
  | "Cloud"
  | "Tools"
  | "Collab";

type SkillItem = {
  name: string;
  tags: SkillTag[];
};

type Category = {
  title: string;
  icon: ElementType;
  accent: "primary" | "secondary";
  summary: string;
  skills: SkillItem[];
  proof: string[]; // short, evidence-style bullets
};

const filterTabs: { label: string; value: SkillTag | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Core", value: "Core" },
  { label: "Data", value: "Data" },
  { label: "ML", value: "ML" },
  { label: "MLOps", value: "MLOps" },
  { label: "Cloud", value: "Cloud" },
  { label: "Tools", value: "Tools" },
  { label: "Collab", value: "Collab" },
];

const categories: Category[] = [
  {
    title: "Core Engineering",
    icon: Code2,
    accent: "primary",
    summary: "Production-first coding, debugging, and data modeling fundamentals.",
    skills: [
      { name: "Python", tags: ["Core", "Data", "ML", "MLOps"] },
      { name: "SQL", tags: ["Core", "Data"] },
      { name: "TypeScript", tags: ["Core", "Tools"] },
      { name: "Git", tags: ["Core", "Tools", "Collab"] },
    ],
    proof: [
      "Built reusable ETL/analytics layers (clean → normalized → aggregated) for BI-ready datasets",
      "Designed modular scripts/utilities to reduce repeated data-wrangling and improve maintainability",
    ],
  },
  {
    title: "Data & Analytics",
    icon: Database,
    accent: "secondary",
    summary: "Transform messy sources into reliable metrics, tables, and dashboards.",
    skills: [
      { name: "pandas", tags: ["Data", "Core"] },
      { name: "Power BI", tags: ["Data", "Tools"] },
      { name: "Tableau", tags: ["Data", "Tools"] },
      { name: "Spark (basic)", tags: ["Data"] },
    ],
    proof: [
      "Country-wise revenue distribution, concentration risk, and temporal trend tables",
      "Designed stacked analytical datasets to plug into dashboards/forecasting pipelines",
    ],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    accent: "primary",
    summary: "Applied modeling with evaluation discipline (not just training notebooks).",
    skills: [
      { name: "scikit-learn", tags: ["ML", "Core"] },
      { name: "PyTorch", tags: ["ML"] },
      { name: "TensorFlow", tags: ["ML"] },
      { name: "Computer Vision", tags: ["ML"] },
    ],
    proof: [
      "Built models with clear train/val separation and repeatable evaluation runs",
      "Focused on practical model outputs usable in downstream reporting and decision flows",
    ],
  },
  {
    title: "MLOps & Deployment",
    icon: Blocks,
    accent: "secondary",
    summary: "Make ML reproducible: pipelines, versioning, tracking, deployment.",
    skills: [
      { name: "Docker", tags: ["MLOps", "Tools"] },
      { name: "MLflow", tags: ["MLOps", "Tools"] },
      { name: "DVC", tags: ["MLOps", "Tools"] },
      { name: "CI/CD (basic)", tags: ["MLOps"] },
    ],
    proof: [
      "Structured projects for experiment tracking + dataset versioning + reproducible runs",
      "Prepared model artifacts for integration into dashboards and lightweight interfaces",
    ],
  },
  {
    title: "Cloud & Platforms",
    icon: Cloud,
    accent: "primary",
    summary: "Comfortable deploying and operating on cloud tools/services.",
    skills: [
      { name: "AWS (basic)", tags: ["Cloud"] },
      { name: "Azure (basic)", tags: ["Cloud"] },
      { name: "Linux", tags: ["Cloud", "Core"] },
      { name: "APIs (REST)", tags: ["Cloud", "Core"] },
    ],
    proof: [
      "Deployed and tested apps/services locally and via cloud-friendly configs",
      "Worked with data flows that support BI refresh + model outputs",
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    accent: "secondary",
    summary: "Communication and execution habits that ship work in teams.",
    skills: [
      { name: "Technical writing", tags: ["Collab"] },
      { name: "Stakeholder communication", tags: ["Collab"] },
      { name: "Ownership & delivery", tags: ["Collab"] },
      { name: "Team coordination", tags: ["Collab"] },
    ],
    proof: [
      "Communicated results as decision-ready summaries, not raw charts",
      "Kept work organized with clear structure, naming conventions, and handoff docs",
    ],
  },
];

const certifications = [
  // Keep yours, but only if you actually have them.
  // If not, delete this section entirely.
  { name: "AWS Certified Machine Learning – Specialty", issuer: "AWS", year: "2024" },
  { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2023" },
  { name: "Microsoft Certified: Azure Data Scientist Associate", issuer: "Microsoft", year: "2023" },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const Skills = () => {
  const [active, setActive] = useState<SkillTag | "All">("All");

  const filtered = useMemo(() => {
    if (active === "All") return categories;

    return categories
      .map((c) => ({
        ...c,
        skills: c.skills.filter((s) => s.tags.includes(active)),
        proof: c.proof, // keep proof (still relevant)
      }))
      .filter((c) => c.skills.length > 0);
  }, [active]);

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            Skills & <span className="primary-gradient bg-clip-text text-transparent">Toolbox</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setActive(t.value)}
              className={cx(
                "px-4 py-2 rounded-full text-sm font-medium transition",
                "border border-primary/20 hover:border-primary/40",
                active === t.value
                  ? "primary-gradient text-white shadow"
                  : "bg-background/40 text-foreground"
              )}
              aria-pressed={active === t.value}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filtered.map((category) => {
            const Icon = category.icon;

            return (
              <Card key={category.title} className="glass-effect border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <div
                      className={cx(
                        "p-2 rounded-lg",
                        category.accent === "primary" ? "primary-gradient" : "secondary-gradient"
                      )}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xl">{category.title}</div>
                      <div className="text-sm text-muted-foreground font-normal">
                        {category.summary}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((s) => (
                      <span
                        key={s.name}
                        className={cx(
                          "px-3 py-1 rounded-full text-sm font-medium",
                          "bg-background/40 border border-muted/40"
                        )}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>

                  {/* Proof bullets */}
                  <div className="space-y-2">
                    {category.proof.map((p, idx) => (
                      <div key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications (only keep if real) */}
        {certifications.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">Certifications</h3>
              <p className="text-muted-foreground mt-2">
                Only included when verified/earned — remove if you don’t want this section.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.name} className="glass-effect border-secondary/20">
                  <CardContent className="p-6">
                    <div className="secondary-gradient w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <Award size={22} className="text-white" />
                    </div>
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-sm text-secondary font-medium mt-1">{cert.issuer}</div>
                    <div className="text-sm text-muted-foreground">{cert.year}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Small footer row (optional) */}
        <div className="mt-14 text-center text-sm text-muted-foreground">
          Tip: If you want this to feel even more “senior”, link each category to a real project section that proves it.
        </div>
      </div>
    </section>
  );
};

export default Skills;

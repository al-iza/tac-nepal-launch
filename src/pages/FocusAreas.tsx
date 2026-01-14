import { Layout } from "@/components/layout/Layout";
import { Leaf, Building2, Droplets, Sun, Factory, Recycle, Cpu, Wrench, FlaskConical, Settings, Zap } from "lucide-react";

const focusAreas = [
  {
    icon: Leaf,
    title: "Agriculture & Agro-Processing",
    description: "Modern farming technologies and value-added processing solutions for Nepal's agricultural sector, including post-harvest handling, food processing, and storage systems.",
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    description: "Innovative construction materials, techniques, and machinery for sustainable infrastructure development, including brick making, block production, and prefabrication.",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Technologies for clean water access, treatment systems, and sustainable sanitation solutions adapted for Nepal's diverse geographic conditions.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar, hydro, and biomass energy solutions adapted for Nepal's diverse geographic conditions, supporting rural electrification and energy independence.",
  },
  {
    icon: Factory,
    title: "Small-Scale Manufacturing",
    description: "Appropriate machinery and production systems for local manufacturing enterprises, enabling import substitution and local value addition.",
  },
  {
    icon: Recycle,
    title: "Waste Management & Recycling",
    description: "Technologies for waste processing, recycling, and circular economy solutions, addressing urban and industrial waste challenges.",
  },
];

const technologies = [
  {
    icon: Cpu,
    category: "Automation & Control Systems",
    items: [
      "Programmable Logic Controllers (PLCs)",
      "SCADA Systems",
      "Industrial IoT Solutions",
      "Process Automation",
      "Quality Control Systems",
    ],
  },
  {
    icon: Wrench,
    category: "Production & Manufacturing Equipment",
    items: [
      "CNC Machines",
      "Assembly Line Systems",
      "Packaging Equipment",
      "Material Handling Systems",
      "Testing & Inspection Equipment",
    ],
  },
  {
    icon: FlaskConical,
    category: "Processing Technologies",
    items: [
      "Food Processing Lines",
      "Chemical Processing Units",
      "Drying & Dehydration Systems",
      "Extraction & Distillation Equipment",
      "Mixing & Blending Systems",
    ],
  },
  {
    icon: Settings,
    category: "Mechanical Systems",
    items: [
      "Hydraulic & Pneumatic Systems",
      "Gear & Transmission Systems",
      "Pumps & Compressors",
      "Heat Exchangers",
      "Filtration Systems",
    ],
  },
  {
    icon: Zap,
    category: "Energy & Power Systems",
    items: [
      "Solar Power Systems",
      "Micro-Hydro Turbines",
      "Biogas Plants",
      "Battery Storage Systems",
      "Power Conditioning Equipment",
    ],
  },
];

const FocusAreas = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Focus
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Focus Areas & Technologies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Driving technology transfer and innovation across key sectors of Nepal's economy with proven, adaptable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Sectors
            </span>
            <h2 className="section-title font-serif">Focus Areas</h2>
            <p className="section-subtitle mx-auto">
              Strategic sectors where technology can drive sustainable development and economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-large"
              >
                <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <area.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-4 text-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Technologies
            </span>
            <h2 className="section-title font-serif">Technologies & Tools We Support</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive range of technologies adapted for Nepal's industrial development needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">
                    {tech.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {tech.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FocusAreas;

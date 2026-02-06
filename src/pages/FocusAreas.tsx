import { Layout } from "@/components/layout/Layout";
import { Sun, Factory, Leaf, Building2, Mountain, Lightbulb, Wrench, Settings, Cpu, Truck, FlaskConical } from "lucide-react";

const focusAreas = [
  {
    icon: Sun,
    title: "Renewable Energy & Clean Technologies",
    description: "Hydro, solar, waste-to-energy, energy efficiency solutions adapted for Nepal's diverse geographic conditions.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial Production",
    description: "Technology-enabled factories, value-added manufacturing facilities with globally proven production systems.",
  },
  {
    icon: Leaf,
    title: "Agro-Processing & Food Industries",
    description: "Processing, cold chain, agri-tech, export-oriented production linking local farmers with technology-enabled systems.",
  },
  {
    icon: Mountain,
    title: "Tourism, Hospitality & Experience Industries",
    description: "Eco-tourism, resorts, technology-enhanced hospitality solutions for Nepal's growing tourism sector.",
  },
  {
    icon: Building2,
    title: "Construction Materials & Infrastructure Solutions",
    description: "Green materials, modular systems, industrial inputs for sustainable infrastructure development.",
  },
  {
    icon: Lightbulb,
    title: "Technology-Driven SMEs & Startups",
    description: "Incubated ventures with scale-up potential, supported by advanced technologies and business models.",
  },
];

const technologies = [
  {
    icon: Wrench,
    category: "Industrial Machinery & Complete Production Lines",
    items: [
      "Metal cutting, woodworking, textile, pharmaceutical, plastics, packaging, printing machinery",
      "Food processing, rubber, chemical, forging and foundry machinery",
      "Complete production lines for light and medium industries",
    ],
  },
  {
    icon: Settings,
    category: "General & Small-Scale Machinery",
    items: [
      "Pumps, valves, compressors, draught fans",
      "Welding, gas cutting, grinding, drilling, machine tool accessories",
      "Small processing and fabrication machinery",
    ],
  },
  {
    icon: Cpu,
    category: "Industrial Components & Accessories",
    items: [
      "Bearings, gears, chains, springs, moulds",
      "Casting, forging, powder metallurgy products",
      "Pneumatic, hydraulic, sealing components and spare parts",
    ],
  },
  {
    icon: FlaskConical,
    category: "Instruments & Automation Systems",
    items: [
      "Electronic, electrical, optical and laboratory instruments",
      "Material testing, geological, hydrological and civil engineering instruments",
      "Automation, measurement, and quality-control systems",
    ],
  },
  {
    icon: Truck,
    category: "Transport & Specialized Equipment",
    items: [
      "Railway, ship, aeronautic and underwater equipment and spare parts",
      "Vehicle service and maintenance equipment (lifts, alignment, washing systems)",
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

      {/* Applied Technologies Header */}
      <section className="section-padding pb-0">
        <div className="container-wide">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Applied Technologies
            </span>
            <h2 className="section-title font-serif">Priority Sectors & Local Resource-Based Industries</h2>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif font-bold mb-4">Focus Areas</h3>
            <p className="section-subtitle mx-auto">
              Strategic sectors where technology can drive sustainable development and economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-card rounded-3xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-large"
              >
                <div className="w-16 h-16 bg-sage-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <area.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">
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
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
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

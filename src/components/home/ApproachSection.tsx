import { Globe, Settings, Link as LinkIcon, Rocket, MapPin, Factory, Cog } from "lucide-react";

const approaches = [
  {
    icon: Globe,
    title: "Global Technology Scouting",
    description: "Systematically identify, evaluate, and acquire innovative technologies, machinery, and production systems developed and proven globally, with strong potential for application in Nepal.",
  },
  {
    icon: Settings,
    title: "Localization & Technology Adaptation",
    description: "Adapt and integrate selected technologies with Nepal's local raw materials, skills, and environmental conditions to ensure technical feasibility, cost efficiency, and sustainability.",
  },
  {
    icon: LinkIcon,
    title: "Technology–Market Linkage",
    description: "Promote and position applicable technologies in the market by building strategic linkages with key stakeholders including investors, manufacturers, suppliers, government agencies, and development partners.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship Promotion",
    description: "Encourage and support local entrepreneurship by transferring technology, building capacity, and enabling access to technical and operational know-how for new and existing enterprises.",
  },
  {
    icon: MapPin,
    title: "Resource & Product Identification",
    description: "Identify and map local materials, products, and natural resources with industrial potential, focusing on value addition and import substitution opportunities.",
  },
  {
    icon: Factory,
    title: "Industry & Production Establishment",
    description: "Facilitate the establishment of factories, industries, and small-scale production units through technical design, machinery selection, process planning, and operational setup.",
  },
  {
    icon: Cog,
    title: "Operational Excellence & Sustainability",
    description: "Ensure smooth operation, effective maintenance, repair, and optimization of production systems to maximize efficiency, ensure optimal utilization of local resources, and deliver sustainable returns to promoters and long-term benefits to communities and stakeholders.",
  },
];

export function ApproachSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Approach
          </span>
          <h2 className="section-title font-serif">How We Work</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive seven-pillar approach to transforming global innovations into local solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((approach, index) => (
            <div
              key={approach.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <approach.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{approach.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

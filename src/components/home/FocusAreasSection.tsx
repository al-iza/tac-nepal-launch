import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Building2, Droplets, Sun, Factory, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: Leaf,
    title: "Agriculture & Agro-Processing",
    description: "Modern farming technologies and value-added processing solutions for Nepal's agricultural sector.",
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    description: "Innovative construction materials, techniques, and machinery for sustainable infrastructure development.",
  },
  {
    icon: Droplets,
    title: "Water & Sanitation",
    description: "Technologies for clean water access, treatment systems, and sustainable sanitation solutions.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Solar, hydro, and biomass energy solutions adapted for Nepal's diverse geographic conditions.",
  },
  {
    icon: Factory,
    title: "Small-Scale Manufacturing",
    description: "Appropriate machinery and production systems for local manufacturing enterprises.",
  },
  {
    icon: Recycle,
    title: "Waste Management & Recycling",
    description: "Technologies for waste processing, recycling, and circular economy solutions.",
  },
];

export function FocusAreasSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Focus Areas
            </span>
            <h2 className="section-title font-serif">Sectors We Support</h2>
            <p className="section-subtitle">
              Driving technology transfer and innovation across key sectors of Nepal's economy
            </p>
          </div>
          <Button asChild className="self-start lg:self-auto bg-[hsl(215,80%,50%)] hover:bg-[hsl(215,80%,40%)] text-white shadow-md hover:shadow-lg transition-all">
            <Link to="/focus-areas">
              View All Areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <Link
              key={area.title}
              to="/focus-areas"
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-large overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <area.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

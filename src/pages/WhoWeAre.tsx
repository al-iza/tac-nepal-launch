import { Layout } from "@/components/layout/Layout";
import { Globe, Settings, Link as LinkIcon, Rocket, MapPin, Factory, Cog, Quote } from "lucide-react";

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

const leadershipTeam = [
  { name: "Chairperson", role: "Board of Directors", image: null },
  { name: "Executive Director", role: "Operations", image: null },
  { name: "Technical Director", role: "Technology Transfer", image: null },
  { name: "Finance Director", role: "Finance & Admin", image: null },
];

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              About TAC Nepal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A forward-looking institution driving Nepal's sustainable development through technology transfer and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Technology Applied Centre (TAC Nepal) is a forward-looking institution registered under the Office of the Company Registrar, Government of Nepal (Reg. No. 267924/078/079).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are driven by a clear vision: to accelerate Nepal's sustainable development by transforming global technological innovations into practical, locally applicable solutions.
              </p>
            </div>
            <div className="bg-sage-light/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">Registration Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Registration Number</p>
                  <p className="font-semibold text-foreground">267924/078/079</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Registered Under</p>
                  <p className="font-semibold text-foreground">Office of the Company Registrar, Government of Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Vision & Mission</h2>
            <div className="relative">
              <Quote className="absolute -top-4 left-0 h-12 w-12 text-primary/20" />
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-serif italic px-8">
                TAC Nepal envisions a future where technology becomes a catalyst for inclusive growth, resilience, and national progress.
              </p>
            </div>
            <p className="text-lg text-muted-foreground mt-8 leading-relaxed">
              By bridging global expertise with local realities, we promote innovation that empowers communities, strengthens institutions, and supports Nepal's journey toward a knowledge-based and technology-driven economy.
            </p>
          </div>
        </div>
      </section>

      {/* Working Approach */}
      <section id="approach" className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Methodology
            </span>
            <h2 className="section-title font-serif">Working Approach</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive seven-pillar framework guiding our technology transfer initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approaches.map((approach, index) => (
              <div
                key={approach.title}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <approach.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-3xl font-serif font-bold text-primary/30">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">{approach.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairperson Message */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Leadership
              </span>
              <h2 className="section-title font-serif">Message from the Chairperson</h2>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium">
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                At TAC Nepal, we believe that technology is not just about innovation—it's about transformation. Our mission is to bridge the gap between global technological advancements and Nepal's local needs, creating opportunities for sustainable growth and prosperity.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                Together with our partners, investors, and communities, we are committed to building a knowledge-based economy that benefits all Nepalis.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">C</span>
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground">Chairperson</p>
                  <p className="text-sm text-muted-foreground">Technology Applied Centre Nepal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="section-title font-serif">Leadership & Management</h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals dedicated to driving technology transfer and sustainable development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large">
                <div className="aspect-square bg-sage-light/50 flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-primary/30">{member.name[0]}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Factory, Leaf, Search, Users, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectAreas = [
  {
    icon: Factory,
    title: "Technology-Enabled Local Resource Industries",
    description: "Identification and development of industries based on Nepal's local raw materials—agro-products, minerals, forest-based resources, and construction materials—using globally proven production technologies to enhance value addition and productivity.",
  },
  {
    icon: Factory,
    title: "Industrial & Factory Establishment Projects",
    description: "Support for the establishment of small, medium, and large-scale factories through technology selection, production line design, machinery sourcing, and operational setup, ensuring efficient and sustainable industrial operations.",
  },
  {
    icon: Leaf,
    title: "Agro-Processing & Food Industry Initiatives",
    description: "Development of agro-processing, storage, and value-addition projects including food processing, cold chain, and export-oriented production, linking local farmers with technology-enabled processing systems.",
  },
  {
    icon: Search,
    title: "Technology Scouting & Demonstration Projects",
    description: "Exploration and pilot demonstration of globally proven machinery, equipment, and production systems suitable for Nepal's industrial and resource conditions, reducing risk before full-scale investment.",
  },
  {
    icon: Users,
    title: "SME & Entrepreneurship Support Initiatives",
    description: "Support to technology-driven SMEs and startups through access to appropriate technologies, business planning, feasibility studies, and implementation guidance for scalable ventures.",
  },
  {
    icon: FileText,
    title: "Investment-Ready Project Development",
    description: "Preparation of bankable project concepts including technical, financial, and operational feasibility to support investors, financial institutions, and development partners in technology-backed ventures.",
  },
  {
    icon: Handshake,
    title: "Public–Private & Institutional Collaboration Projects",
    description: "Collaboration with government agencies, development partners, and private investors to promote technology adoption, industrial growth, and employment generation aligned with national priorities.",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Impact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Projects & Initiatives
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Technology Applied Centre (TAC Nepal) develops and supports technology-driven projects that transform local resources into productive industries.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our initiatives focus on deploying globally proven technologies to establish commercially viable factories, production units, and technology-enabled enterprises across Nepal. We bridge the gap between advanced technological solutions and local implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Key Project Areas */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Initiative Areas
            </span>
            <h2 className="section-title font-serif">Key Project & Initiative Areas</h2>
            <p className="section-subtitle mx-auto">
              Strategic areas where we develop and support technology-driven projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projectAreas.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-serif font-bold text-primary/30">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="font-serif font-bold text-lg text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-sage-light/30 rounded-3xl p-12">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-serif font-bold mb-4">Building the Future</h2>
              <p className="text-lg text-muted-foreground mb-8">
                TAC Nepal is actively developing and launching our portfolio of technology transfer projects. We are scouting global technologies, building partnerships, and planning implementation strategies to deliver commercial returns, operational sustainability, and measurable economic impact.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Have a Project Idea?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We're always looking for innovative technology transfer opportunities. If you have a project proposal or want to collaborate, get in touch with our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contact">
                  Submit Project Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/partners">View Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

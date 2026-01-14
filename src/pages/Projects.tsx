import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Clock, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingProjects = [
  {
    title: "Brick Interlocking Technology Transfer",
    sector: "Construction",
    location: "Kathmandu Valley",
    status: "In Planning",
    description: "Introduction of modern interlocking brick technology for sustainable construction with reduced cement usage and faster assembly.",
  },
  {
    title: "Agricultural Processing Hub",
    sector: "Agriculture",
    location: "Chitwan",
    status: "Concept Phase",
    description: "Establishment of a model agro-processing facility showcasing advanced drying, grading, and packaging technologies.",
  },
  {
    title: "Renewable Energy Solutions",
    sector: "Energy",
    location: "Multiple Locations",
    status: "Research Phase",
    description: "Pilot projects for solar and micro-hydro energy systems adapted for rural Nepal communities.",
  },
  {
    title: "Waste-to-Resource Initiative",
    sector: "Waste Management",
    location: "Urban Centers",
    status: "Planning",
    description: "Technology solutions for converting municipal and industrial waste into valuable resources and energy.",
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
              Transforming global technologies into local solutions through strategic projects and partnerships.
            </p>
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
                As a newly established institution, TAC Nepal is currently in the process of developing and launching our inaugural portfolio of technology transfer projects. We are actively scouting global technologies, building partnerships, and planning implementation strategies.
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

      {/* Upcoming Projects */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              In Development
            </span>
            <h2 className="section-title font-serif">Upcoming Initiatives</h2>
            <p className="section-subtitle mx-auto">
              Projects currently in various stages of planning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.sector}
                  </span>
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {project.status}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
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

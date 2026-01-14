import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Wrench, Tractor, Building, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const howWeDeliver = [
  "Bridging Global Expertise with Local Application: Our approach involves systematic scouting, evaluation, and acquisition of globally proven technologies. These innovations are then carefully adapted to suit Nepal's specific conditions—its natural resources, skilled workforce, infrastructure realities, and market needs.",
  "Facilitating Sustainable Industrial Ecosystems: Beyond technology acquisition, TAC Nepal is committed to technology–market integration. We actively support entrepreneurs in establishing production facilities and help connect them to essential networks—investors, suppliers, government programs, and development partners—ensuring lasting, sustainable impact.",
];

const whyPartner = [
  "Access to a curated portfolio of globally proven, locally adaptable technologies across diverse sectors.",
  "Technical expertise in localization, integration, and optimization of technologies for Nepal-specific conditions.",
  "Support in connecting with investors, government agencies, industry associations, and development organizations.",
  "Comprehensive end-to-end facilitation—from technology identification to production setup and operational sustainability.",
  "A mission-driven commitment to sustainable development, knowledge transfer, and empowering local entrepreneurs and communities.",
];

const indoorApplications = [
  "Brick Interlocking Machines",
  "Hollow Block Making Machines",
  "Paving Block Machines",
  "Cement Tile Machines",
  "Decorative Wall Panel Machines",
  "Pipe Manufacturing Machines",
  "AAC Block Plants",
  "Fly Ash Brick Machines",
  "Concrete Mixer Machines",
  "Stone Crusher Units",
  "TMT Bar Bending & Cutting Machines",
  "Shuttering & Formwork Systems",
];

const outdoorApplications = [
  "Excavators & Backhoe Loaders",
  "Wheel Loaders",
  "Motor Graders",
  "Road Rollers & Compactors",
  "Tower Cranes & Mobile Cranes",
  "Concrete Batch Mix Plants",
  "Asphalt Mixing Plants",
  "Bulldozers",
  "Drilling Rigs",
  "Tipper Trucks / Dump Trucks",
];

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              What We Do
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accelerating technology-driven investment and industrial growth across Nepal's key economic sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Technology Applied Centre (TAC Nepal) accelerates technology-driven investment and industrial growth in Nepal by identifying, adapting, and promoting innovative technologies, machinery, and production systems from around the world. We bridge the gap between advanced technological solutions and local implementation, working closely with entrepreneurs, investors, government agencies, and development partners.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Our focus spans agriculture, construction, manufacturing, energy, water, and waste management—sectors where technology can unlock productivity, create employment, support import substitution, and contribute to national development.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Whether it's a new machine for a small factory, a sustainable production method for a community enterprise, or a large-scale industrial system for a private investor, TAC Nepal helps make technology work for Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">How We Deliver</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our systematic approach ensures successful technology transfer from global sources to local applications.
              </p>
            </div>
            <div className="space-y-6">
              {howWeDeliver.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary-foreground font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Benefits
            </span>
            <h2 className="section-title font-serif">Why Partner with TAC Nepal</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive support for technology transfer and industrial development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyPartner.map((reason, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed">{reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Equipment & Machinery
            </span>
            <h2 className="section-title font-serif">Construction & Agriculture Machinery</h2>
            <p className="section-subtitle mx-auto">
              A comprehensive range of machinery and equipment for diverse industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Indoor Applications */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Factory className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl">Indoor / Semi-Industrial</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing & Production</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {indoorApplications.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Wrench className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outdoor Applications */}
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Tractor className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl">Outdoor / Heavy Applications</h3>
                  <p className="text-sm text-muted-foreground">Construction & Infrastructure</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3">
                {outdoorApplications.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Building className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/contact">
                Inquire About Equipment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;

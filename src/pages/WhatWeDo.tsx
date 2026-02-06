import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Wrench, Tractor, Building, Factory, Shield, LineChart, Globe, Settings, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const whyPartner = [
  {
    icon: Shield,
    title: "Technology-Led De-Risking",
    description: "We introduce globally tested technologies, reducing technical and operational risks for investors.",
  },
  {
    icon: LineChart,
    title: "Pipeline of Bankable Projects",
    description: "TAC Nepal develops investment-ready ventures—from SMEs to large industries—with clear business models and scalability.",
  },
  {
    icon: Globe,
    title: "Local Execution, Global Standards",
    description: "Strong local presence combined with international technology and best practices ensures efficient implementation.",
  },
  {
    icon: Settings,
    title: "End-to-End Support",
    description: "From technology selection and feasibility to establishment of factories and production houses, we support the full investment lifecycle.",
  },
  {
    icon: Target,
    title: "Alignment with National Priorities",
    description: "Our projects align with Nepal's industrialization, import substitution, export promotion, and job creation goals.",
  },
];

const indoorApplications = [
  "Small construction equipment (vibration rammers, brick cutters, platforms)",
  "Agricultural, irrigation, harvesting, livestock and forestry machinery",
  "Gardening, mowing, spraying and agri-processing equipment",
];

const outdoorApplications = [
  "Excavators, forklifts, cranes, concrete mixer trucks, compactors",
  "Mining, hoisting, fire-fighting, petroleum and geological machinery",
  "Agricultural transport vehicles, tractors, harvesters and land-improvement machinery",
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
              Technology Applied Centre (TAC Nepal) accelerates technology-driven investment and industrial growth in Nepal. We identify globally proven technologies and adapt them for local markets, enabling commercially viable ventures across sectors.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We support innovation hubs, incubators, and startups by providing access to advanced technologies, technical expertise, and scalable business models. From SMEs to large-scale industries, factories, and production houses, TAC Nepal facilitates end-to-end technology adoption to reduce risk, improve productivity, and maximize investment returns.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Through strategic partnerships with investors, institutions, and policymakers, we help transform innovation into sustainable, bankable enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">How We Deliver</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              TAC Nepal de-risks industrial investment by localizing proven global technologies into scalable, high-return ventures across Nepal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TAC Nepal enables technology-backed industrial investments through access to proven machinery, complete production systems, and end-to-end implementation support—accelerating returns while minimizing risk.
            </p>
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
            <h2 className="section-title font-serif">Why Partnership with TAC Nepal</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive support for technology transfer and industrial development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyPartner.map((reason) => (
              <div key={reason.title} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
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
                  <h3 className="font-serif font-bold text-xl">Indoor / Semi-Industrial Applications</h3>
                  <p className="text-sm text-muted-foreground">Manufacturing & Production</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {indoorApplications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <Wrench className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
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
              <ul className="grid grid-cols-1 gap-4">
                {outdoorApplications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <Building className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
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

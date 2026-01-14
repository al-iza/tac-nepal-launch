import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Users, Handshake, Globe, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerCategories = [
  {
    icon: Building,
    title: "Government Agencies",
    description: "Collaboration with ministries and government bodies supporting industrial development and technology transfer.",
  },
  {
    icon: Users,
    title: "Development Partners",
    description: "Working with international organizations and NGOs focused on sustainable development in Nepal.",
  },
  {
    icon: Globe,
    title: "Technology Providers",
    description: "Partnerships with global technology companies and equipment manufacturers.",
  },
  {
    icon: Handshake,
    title: "Industry Associations",
    description: "Engagement with business chambers and industry groups across various sectors.",
  },
  {
    icon: Award,
    title: "Academic Institutions",
    description: "Collaboration with universities and research centers for R&D and capacity building.",
  },
  {
    icon: Target,
    title: "Private Investors",
    description: "Connecting with investors interested in technology-driven industrial opportunities.",
  },
];

const investmentOpportunities = [
  {
    title: "Technology Import & Distribution",
    description: "Investment in importing and distributing proven industrial technologies and machinery.",
    potential: "High Growth",
  },
  {
    title: "Manufacturing Setup",
    description: "Establishment of production facilities using transferred technologies.",
    potential: "Medium-High",
  },
  {
    title: "Service & Maintenance",
    description: "Investment in after-sales service and maintenance networks.",
    potential: "Steady Returns",
  },
  {
    title: "Training & Capacity Building",
    description: "Investment in technical training centers and skill development programs.",
    potential: "Social Impact",
  },
];

const Partners = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Collaboration
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Investors & Partners
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building strategic partnerships to accelerate technology-driven development in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Partnership Network
            </span>
            <h2 className="section-title font-serif">Who We Work With</h2>
            <p className="section-subtitle mx-auto">
              We collaborate with diverse stakeholders to maximize our impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((category) => (
              <div
                key={category.title}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large"
              >
                <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <category.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Placeholder */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Network
            </span>
            <h2 className="section-title font-serif">Current Partners</h2>
            <p className="section-subtitle mx-auto">
              Organizations we are working with to drive technology transfer in Nepal
            </p>
          </div>

          {/* Partner logos placeholder grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[3/2] bg-card rounded-xl border border-border flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <span className="text-muted-foreground text-sm">Partner Logo</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8">
            Partnership announcements coming soon. Interested in partnering? Contact us below.
          </p>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              For Investors
            </span>
            <h2 className="section-title font-serif">Investment Opportunities</h2>
            <p className="section-subtitle mx-auto">
              Explore technology-driven investment opportunities in Nepal's growing economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {investmentOpportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-semibold text-xl text-foreground">
                    {opportunity.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {opportunity.potential}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Become a Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're an investor looking for opportunities, a technology provider seeking market entry, 
              or an organization interested in collaboration, we'd love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;

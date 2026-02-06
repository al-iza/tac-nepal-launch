import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Store, Factory, Landmark, Building, Globe, Target, FileText, Settings, Handshake, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerCategories = [
  {
    icon: Users,
    title: "Local Businesspersons & Entrepreneurs",
    items: [
      "Individual and family business owners seeking to establish industries, factories, or production units",
      "Traders and service-sector entrepreneurs transitioning into manufacturing and value-added production",
      "Business groups interested in product or semi-product development",
    ],
  },
  {
    icon: Store,
    title: "Traditional Product Producers & Local Enterprises",
    items: [
      "Producers of traditional, indigenous, and local products seeking modernization and scale-up",
      "Cottage and small industries aiming to improve productivity, quality, and market access through technology",
      "Community-based producers moving from manual to semi-industrial production systems",
    ],
  },
  {
    icon: Landmark,
    title: "Cooperatives",
    items: [
      "Savings and credit cooperatives with surplus liquidity",
      "Multi-purpose, agricultural, and producer cooperatives",
      "Cooperatives seeking productive investment avenues beyond lending and consumption-oriented uses",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Institutions & Investor Groups",
    items: [
      "Development banks, microfinance institutions, and financial intermediaries",
      "Private investment groups and consortiums",
      "Institutional investors interested in technology-backed industrial ventures",
    ],
  },
  {
    icon: Building,
    title: "Public & Semi-Public Institutions",
    items: [
      "Government and semi-government organizations",
      "Public enterprises and local government-linked investment initiatives",
      "Institutions promoting employment, industrialization, and local value chains",
    ],
  },
  {
    icon: Globe,
    title: "Technology & Implementation Partners",
    items: [
      "Global and regional technology providers",
      "Equipment and machinery manufacturers",
      "Engineering, technical service, and system integration partners",
    ],
  },
];

const tacRoles = [
  {
    icon: Target,
    text: "Identifying viable production-based business opportunities",
  },
  {
    icon: Globe,
    text: "Introducing globally proven and locally adaptable technologies",
  },
  {
    icon: FileText,
    text: "Developing bankable business and project models",
  },
  {
    icon: Factory,
    text: "Supporting factory establishment, operation, and scale-up",
  },
  {
    icon: TrendingUp,
    text: "Aligning investments with domestic demand, import substitution, and export potential",
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
              Technology Applied Centre (TAC Nepal) collaborates with a wide range of local investors and partners to promote production-oriented, technology-enabled industries in Nepal.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our primary focus is to support those who possess capital, local knowledge, or traditional production experience but require structured business ideas, technology support, and implementation guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding bg-secondary/30">
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
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large"
              >
                <div className="w-14 h-14 bg-sage-light rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
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

      {/* TAC Nepal's Role */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Value
            </span>
            <h2 className="section-title font-serif">TAC Nepal's Role for Investors & Partners</h2>
            <p className="section-subtitle mx-auto">
              How we support and enable technology-driven investments
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tacRoles.map((role, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <role.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{role.text}</p>
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

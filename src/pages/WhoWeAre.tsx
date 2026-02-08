import { Layout } from "@/components/layout/Layout";
import { Globe, Settings, Link as LinkIcon, Rocket, MapPin, Factory, Cog, Quote, User } from "lucide-react";
import drKushendraImage from "@/assets/dr-kushendra-mahat.jpg";

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
  { 
    name: "Dr. Kushendra Bahadur Mahat", 
    role: "Chairperson & Managing Director", 
    description: "Provides strategic direction, governance, and operational leadership with a strong conviction that technology-driven investment is central to Nepal's industrial growth.",
  },
  { 
    name: "Head – Finance, Business Planning & Investment", 
    role: "Finance & Investment", 
    description: "Leads business planning, financial modeling, and project feasibility. Focuses on developing bankable projects by aligning technology costs, operational assumptions, and market potential.",
  },
  { 
    name: "Head – Information & Technology", 
    role: "Technology", 
    description: "Responsible for identifying and evaluating globally proven technologies, machinery, and production systems relevant to Nepal's local resource-based industries.",
  },
  { 
    name: "Head – Legal, Administration & Government Affairs", 
    role: "Legal & Admin", 
    description: "Manages legal compliance, regulatory processes, and institutional administration. Supports company establishment, factory licensing, and government coordination.",
  },
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Leadership
              </span>
              <h2 className="section-title font-serif">Message from the Chairperson</h2>
            </div>
            
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-medium">
              <Quote className="h-10 w-10 text-primary/30 mb-6" />
              
              <div className="space-y-6 text-foreground leading-relaxed">
                <p className="text-lg">
                  At Technology Applied Centre (TAC Nepal), we operate with a clear conviction: capital delivers its highest returns when paired with the right technology, strong local execution, and a scalable market vision. Nepal today offers precisely this opportunity.
                </p>
                
                <p>
                  TAC Nepal was established to serve as a technology-to-investment bridge—connecting globally proven equipment, machinery, and production systems with Nepal's rapidly expanding industrial, infrastructure, energy, agro-processing, and service sectors. Our role goes beyond advisory; we act as enablers, de-riskers, and execution partners in technology-backed ventures.
                </p>
                
                <p>
                  For investors, Nepal represents an underpenetrated market with strong demand fundamentals, policy momentum toward industrialization, and significant potential for import substitution and export-led growth. For global technology and equipment providers, it is a market where localized application, structured deployment, and long-term partnerships are critical. TAC Nepal operates at this intersection—transforming opportunity into bankable reality.
                </p>
                
                <p>
                  What differentiates TAC Nepal is our technology-led investment framework. We work exclusively with globally tested and commercially proven technologies, adapting them into locally viable production systems supported by rigorous feasibility analysis, business structuring, and end-to-end implementation. This approach substantially reduces technical, operational, and market risks while accelerating time to revenue.
                </p>
                
                <p>
                  Our engagement spans the full lifecycle of technology-enabled ventures—from machinery and production line selection to factory establishment, commissioning, and scale-up. Whether supporting SMEs, industrial plants, or large production houses, TAC Nepal ensures that technology deployment meets global standards of performance, reliability, and efficiency, while remaining aligned with local operating conditions.
                </p>
                
                <p>
                  We actively collaborate with international equipment manufacturers, OEMs, technology licensors, and solution providers seeking structured and sustainable entry into Nepal. Through TAC Nepal, technology partners gain access to:
                </p>
                
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Investment-ready projects and credible local counterparts</li>
                  <li>Structured demand pipelines across priority growth sectors</li>
                  <li>Professional execution aligned with international best practices</li>
                  <li>Long-term market presence beyond transactional sales</li>
                </ul>
                
                <p>
                  Our sector focus—including renewable energy, manufacturing, agro-processing, construction materials, tourism infrastructure, and technology-driven SMEs—reflects Nepal's most promising growth corridors. Each initiative is designed to deliver commercial returns, operational sustainability, and measurable economic impact.
                </p>
                
                <p>
                  Equally important, our work is aligned with Nepal's national priorities—industrial growth, employment generation, environmental responsibility, and productivity through technology. This alignment strengthens project bankability, institutional support, and long-term viability.
                </p>
                
                <p className="italic">
                  As Chairman, I extend an open invitation to investors, financial institutions, equipment manufacturers, and technology innovators seeking a trusted and capable partner in Nepal. TAC Nepal offers more than market access—we offer execution certainty, investment discipline, and shared long-term value creation. Together, we can convert technology into industry, investment into impact, and opportunity into enduring success.
                </p>
              </div>
              
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
                <img 
                  src={drKushendraImage} 
                  alt="Dr. Kushendra Bahadur Mahat" 
                  className="w-20 h-20 rounded-full object-cover object-top border-2 border-primary/20 shadow-md"
                />
                <div>
                  <p className="font-serif font-semibold text-foreground text-lg">Dr. Kushendra Bahadur Mahat</p>
                  <p className="text-sm text-muted-foreground">Chairperson, Technology Applied Centre (TAC Nepal)</p>
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
            <h2 className="section-title font-serif">Leadership & Management Team</h2>
            <p className="section-subtitle mx-auto">
              Experienced professionals dedicated to driving technology transfer and sustainable development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div key={member.name} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large">
                <div className="p-8">
                  {index === 0 ? (
                    <img 
                      src={drKushendraImage} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover object-top border-2 border-primary/20 shadow-md mb-4"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                      <User className="h-10 w-10 text-primary/60" />
                    </div>
                  )}
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
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

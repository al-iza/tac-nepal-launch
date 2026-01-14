import { Check } from "lucide-react";

const reasons = [
  "Access to a curated portfolio of globally proven, locally adaptable technologies across diverse sectors.",
  "Technical expertise in localization, integration, and optimization of technologies for Nepal-specific conditions.",
  "Support in connecting with investors, government agencies, industry associations, and development organizations.",
  "Comprehensive end-to-end facilitation—from technology identification to production setup and operational sustainability.",
  "A mission-driven commitment to sustainable development, knowledge transfer, and empowering local entrepreneurs and communities.",
];

export function WhyPartnerSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Why Partner With Us
            </span>
            <h2 className="section-title font-serif mb-6">
              Your Trusted Partner for Technology Transfer
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              TAC Nepal brings together global expertise and local knowledge to deliver 
              meaningful, sustainable technology solutions for Nepal's development.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{reason}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sage-light to-primary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-serif font-bold text-primary mb-4">5+</div>
                  <p className="text-xl font-medium text-foreground mb-2">Key Benefits</p>
                  <p className="text-muted-foreground">of partnering with TAC Nepal</p>
                </div>
              </div>
            </div>
            
            {/* Decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-large max-w-xs">
              <p className="text-sm text-muted-foreground italic">
                "Mission-driven commitment to sustainable development and empowering local communities"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

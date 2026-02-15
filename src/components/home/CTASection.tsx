import { Link } from "react-router-dom";
import { ArrowRight, Building, Handshake, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-sage-dark/90 to-primary" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container-wide relative py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Ready to Transform Technology into Impact?
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
              Partner with TAC Nepal to bring proven global technologies to local markets, 
              support entrepreneurship, and drive sustainable industrial growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-[hsl(152,60%,40%)] hover:bg-[hsl(152,60%,32%)] text-white rounded-lg px-8 group shadow-lg hover:shadow-xl transition-all">
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(215,80%,50%)] hover:bg-[hsl(215,80%,40%)] text-white rounded-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <Link to="/partners">View Partners</Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Building, label: "Investors", desc: "Technology investment opportunities" },
              { icon: Users, label: "Entrepreneurs", desc: "Access to proven technologies" },
              { icon: Handshake, label: "Partners", desc: "Strategic collaborations" },
            ].map((item) => (
              <div key={item.label} className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-primary-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

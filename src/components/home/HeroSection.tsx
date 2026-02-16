import { Link } from "react-router-dom";
import { ArrowRight, Globe, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import digitalTransformationImage from "@/assets/digital-transformation.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sage/10 via-background to-sage-light/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage-light/30 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium animate-fade-up">
                <Globe className="h-4 w-4" />
                Registered under Government of Nepal
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-up stagger-1">
                Accelerating Nepal's{" "}
                <span className="text-primary">Sustainable Development</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-up stagger-2">
                Transforming global technological innovations into practical, locally applicable solutions for inclusive growth, resilience, and national progress.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
                <Button asChild size="lg" className="rounded-lg px-8 group">
                  <Link to="/what-we-do">
                    Explore Our Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="rounded-lg px-8">
                  <Link to="/contact">Partner With Us</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-up stagger-4">
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">7+</p>
                  <p className="text-sm text-muted-foreground">Working Approaches</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">6</p>
                  <p className="text-sm text-muted-foreground">Focus Areas</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Technology Categories</p>
                </div>
              </div>
            </div>

            {/* Visual - Digital Transformation Image */}
            <div className="relative hidden lg:block animate-fade-up stagger-2">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={digitalTransformationImage} 
                    alt="Digital Transformation - Innovation in Nepal" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-serif font-semibold text-xl drop-shadow-lg">Innovation for Nepal</p>
                    <p className="text-white/80 text-sm mt-1">Transformation Through Technology</p>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-large animate-fade-up stagger-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[hsl(215,80%,50%)]/10 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-[hsl(215,80%,50%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Global Tech</p>
                      <p className="text-xs text-muted-foreground">Scouting</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-large animate-fade-up stagger-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[hsl(152,60%,40%)]/10 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-[hsl(152,60%,40%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Local Adaptation</p>
                      <p className="text-xs text-muted-foreground">& Integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
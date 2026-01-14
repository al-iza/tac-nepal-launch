import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  about: [
    { label: "Who We Are", path: "/who-we-are" },
    { label: "Leadership Team", path: "/who-we-are#leadership" },
    { label: "Working Approach", path: "/who-we-are#approach" },
  ],
  services: [
    { label: "What We Do", path: "/what-we-do" },
    { label: "Focus Areas", path: "/focus-areas" },
    { label: "Technologies", path: "/focus-areas#technologies" },
  ],
  resources: [
    { label: "Projects & Initiatives", path: "/projects" },
    { label: "News & Insights", path: "/news" },
    { label: "Partners", path: "/partners" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">TAC</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-tight">Technology Applied Centre</p>
                <p className="text-xs text-primary-foreground/70">TAC Nepal</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm">
              Accelerating Nepal's sustainable development by transforming global technological innovations into practical, locally applicable solutions.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@tacnepal.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+977-1-XXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">About Us</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Our Work</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Technology Applied Centre (TAC Nepal). All rights reserved. Reg. No. 267924/078/079
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-primary-foreground/70 group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredArticle = {
  title: "TAC Nepal Launches Operations to Drive Technology Transfer",
  excerpt: "Technology Applied Centre officially begins its mission to accelerate sustainable development in Nepal through innovative technology solutions and strategic partnerships.",
  date: "January 2024",
  author: "TAC Nepal Team",
  category: "Announcement",
};

const articles = [
  {
    title: "Understanding Technology Transfer: A Primer for Nepal",
    excerpt: "An overview of how global technology transfer can benefit Nepal's industrial development and economic growth.",
    date: "Coming Soon",
    category: "Insights",
  },
  {
    title: "Focus on Construction Technology: Opportunities in Nepal",
    excerpt: "Exploring the potential for modern construction technologies in Nepal's infrastructure development.",
    date: "Coming Soon",
    category: "Technology",
  },
  {
    title: "Agricultural Innovation: From Field to Market",
    excerpt: "How agro-processing technologies can add value to Nepal's agricultural products.",
    date: "Coming Soon",
    category: "Agriculture",
  },
  {
    title: "Renewable Energy Solutions for Rural Nepal",
    excerpt: "Examining appropriate renewable energy technologies for off-grid communities.",
    date: "Coming Soon",
    category: "Energy",
  },
  {
    title: "Building Partnerships for Technology Development",
    excerpt: "The importance of multi-stakeholder partnerships in technology transfer success.",
    date: "Coming Soon",
    category: "Partnerships",
  },
  {
    title: "Capacity Building: Training the Next Generation",
    excerpt: "Developing local technical expertise for sustainable technology adoption.",
    date: "Coming Soon",
    category: "Training",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage/10 via-background to-sage-light/20 py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Stay Updated
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Latest updates, insights, and knowledge sharing from TAC Nepal's technology transfer initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-large">
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto bg-sage-light/50 flex items-center justify-center">
                <span className="text-primary font-serif text-2xl font-bold">Featured</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.date}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4 text-foreground">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {featuredArticle.author}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Articles
            </span>
            <h2 className="section-title font-serif">Latest Insights</h2>
            <p className="section-subtitle mx-auto">
              Exploring technology, innovation, and development in Nepal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-medium"
              >
                <div className="aspect-video bg-sage-light/30 flex items-center justify-center">
                  <Tag className="h-8 w-8 text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="bg-primary rounded-3xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest updates on technology transfer, 
              investment opportunities, and development insights from TAC Nepal.
            </p>
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/contact">
                Contact Us to Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;

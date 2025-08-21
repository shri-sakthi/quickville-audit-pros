import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AuditEvaluation from "@/components/AuditEvaluation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional accountants and auditors with extensive experience"
    },
    {
      icon: Award,
      title: "10+ Years",
      description: "Serving clients since 2013 with proven excellence"
    },
    {
      icon: TrendingUp,
      title: "500+ Clients",
      description: "Trusted by businesses across 50+ industries"
    }
  ];

  const keyServices = [
    "GST Registration & Filing",
    "Income Tax Returns",
    "Corporate Finance",
    "Auditing Services",
    "Business Registration",
    "Accounting Services"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Key Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Quickville Associates
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for comprehensive auditing and accounting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card key={index} className="text-center border-0 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="bg-primary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Services Overview */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Our Key Services
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {keyServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary group">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div>
                <div className="bg-muted/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Get Started Today
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Ready to streamline your accounting and auditing needs? Our expert team 
                    is here to provide personalized solutions for your business.
                  </p>
                  <div className="space-y-3">
                    <Link to="/contact" className="block">
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary">
                        Get Free Consultation
                      </Button>
                    </Link>
                    <Link to="/about" className="block">
                      <Button variant="outline" className="w-full">
                        Learn About Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuditEvaluation />
      <Footer />
    </div>
  );
};

export default Index;

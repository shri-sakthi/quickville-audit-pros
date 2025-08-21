import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Zap, Award } from "lucide-react";

const ThirdPartyAssurance = () => {
  const features = [
    {
      icon: Target,
      title: "Targeted Solutions",
      description: "Customized financial strategies for your unique situation"
    },
    {
      icon: Zap, 
      title: "Quick Response",
      description: "Rapid turnaround times for all your accounting needs"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning service quality and client satisfaction"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Results",
      description: "Reliable outcomes that drive business growth"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border"
                >
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Third Party Assurance
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Enabling Growth
            </h3>
            
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              No matter what type of financial situation you have, our team of experts 
              will provide the best course of action. We serve clients in the greater 
              Coimbatore area with both individual and business needs.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Personalized financial consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Comprehensive business solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Expert guidance at every step</span>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary font-semibold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPartyAssurance;
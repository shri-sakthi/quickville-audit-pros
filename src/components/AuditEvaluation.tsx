import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, FileCheck, Users } from "lucide-react";

const AuditEvaluation = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description: "Strategic financial planning to optimize your expenses"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "Stay updated with all regulatory requirements"
    },
    {
      icon: FileCheck,
      title: "Accuracy",
      description: "Precise auditing with attention to every detail"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals at your service"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Audit Evaluation
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-white/90">
              Saving You Money
            </h3>
            
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              We stay up-to-date on all the regulatory and legislative developments 
              so you don't waste time and energy trying to make sense of all the 
              auditing & accounting complexities. Contact us today and see how we can help you.
            </p>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-white/80">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditEvaluation;
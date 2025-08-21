import { Badge } from "@/components/ui/badge";
import { Factory, ShoppingBag, Car, Briefcase, Heart } from "lucide-react";

const IndustryExposure = () => {
  const industries = {
    manufacturing: [
      "Textile Spinning & Garments",
      "Textile Machinery & Accessories", 
      "Electronic Components",
      "Electronic Controls",
      "Light Engineering",
      "Wireless Products",
      "Textile Processing",
      "Food & Food Products",
      "Restaurant",
      "Mattresses",
      "Plastics",
      "Information Technology/Software",
      "Jewellery",
      "Real Estate & Construction",
      "Wires and Cables",
      "Electrical Appliances",
      "Pipes and Fittings",
      "Power Generation"
    ],
    commercial: [
      "Commercial Trading",
      "Large Marketing House",
      "Banking Sector - Statutory Branch Audits"
    ],
    automobile: [
      "Automobile Retailing & Service"
    ],
    service: [
      "Technical Services",
      "Architects & Engineers",
      "Retail",
      "Commission Agency", 
      "Research",
      "Legal Services",
      "Software Services"
    ],
    others: [
      "Salaried and Non Salaried",
      "Large Non Profit Organizations",
      "NGO's",
      "Trusts",
      "Educational & Medical Institutions"
    ]
  };

  const categoryIcons = {
    manufacturing: Factory,
    commercial: ShoppingBag,
    automobile: Car,
    service: Briefcase,
    others: Heart
  };

  const categoryTitles = {
    manufacturing: "Manufacturing",
    commercial: "Commercial Trading",
    automobile: "Automobile",
    service: "Service Sector", 
    others: "Others"
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Assignments —{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Industry Exposure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our extensive experience spans across diverse industries, providing specialized 
            auditing and accounting services tailored to each sector's unique requirements.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(industries).map(([category, items]) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            const title = categoryTitles[category as keyof typeof categoryTitles];
            
            return (
              <div key={category} className="bg-card rounded-2xl p-8 shadow-lg border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 rounded-full p-3">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {items.map((item, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-muted/50 hover:bg-muted transition-colors cursor-default"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExposure;
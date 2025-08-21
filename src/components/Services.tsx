import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import gstServicesImage from "@/assets/gst-services.jpg";
import corporateFinanceImage from "@/assets/corporate-finance.jpg";
import registrationServicesImage from "@/assets/registration-services.jpg";
import { 
  FileText, 
  Calculator, 
  Building2, 
  Users, 
  BarChart3, 
  Shield,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Goods and Service Tax (GST)",
      image: gstServicesImage,
      icon: Calculator,
      items: [
        "Registration under GST Act",
        "Consultancy for maintenance of proper records",
        "Consultancy for proper accounting for GST",
        "Consultancy on various issues relating to GST",
        "Computation of GST tax payable",
        "Preparation and filing Returns"
      ]
    },
    {
      title: "Corporate Finance",
      image: corporateFinanceImage,
      icon: BarChart3,
      items: [
        "Preparations of Project Reports",
        "Preparation of CMA data for bank loans"
      ]
    },
    {
      title: "Registration Services",
      image: registrationServicesImage,
      icon: Building2,
      items: [
        "Charitable Trust registration",
        "Partnership firm registration",
        "Society registration", 
        "GST registration",
        "MSMS registration",
        "12 AA registration under Income tax act"
      ]
    },
    {
      title: "Filing of Returns",
      image: gstServicesImage,
      icon: FileText,
      items: [
        "Income Tax returns for Individuals, Firm, AOP, HUF, Company, Trust etc.",
        "GST filling",
        "ROC filing",
        "TDS return filing"
      ]
    },
    {
      title: "Accounting Services",
      image: corporateFinanceImage,
      icon: Users,
      items: [
        "Accounting System Design & Implementation",
        "Financial Accounting",
        "Budgeting",
        "Financial Reporting",
        "MIS Reports",
        "Financial Analysis",
        "Asset Accounting Management",
        "Depreciation and Amortization Schedules"
      ]
    },
    {
      title: "Auditing & Advisory",
      image: registrationServicesImage,
      icon: Shield,
      items: [
        "Domestic Taxation",
        "International Taxation",
        "Transfer Pricing",
        "Management Consultancy",
        "Mergers & Acquisitions",
        "Business Valuations",
        "Advisory on Company & other Laws",
        "Corporate Restructuring",
        "Project Finance",
        "NGO/Trusts"
      ]
    }
  ];

  const corporateServices = [
    "Incorporation of company",
    "Consultancy on Company Law matters",
    "Planning for Mergers, Acquisitions, De-mergers, and Corporate re-organizations",
    "Filing of annual returns and various forms, documents",
    "Clause 49 review for compliance with fiscal, corporate and tax laws",
    "Secretarial Matters including share transfers",
    "Maintenance of Statutory records",
    "Consultancy on Public/Rights/Bonus Issue of shares",
    "Change of Name, Objects, Registered Office, etc.",
    "Appointment of Directors, Auditors and Creation and Modification of Charge"
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Services —{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              What You Need
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive accounting, auditing, and business services tailored to meet your specific requirements
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <IconComponent className="h-8 w-8 mb-2" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Corporate Services Section */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Corporate Services
            </h3>
            <p className="text-muted-foreground">
              Comprehensive corporate solutions for businesses of all sizes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {corporateServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
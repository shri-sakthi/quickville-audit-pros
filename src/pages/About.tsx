import Navigation from "@/components/Navigation";
import AuditingSupport from "@/components/AuditingSupport";
import IndustryExposure from "@/components/IndustryExposure";
import ThirdPartyAssurance from "@/components/ThirdPartyAssurance";
import Footer from "@/components/Footer";
import { Users, Award, Target, TrendingUp } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Target, value: "50+", label: "Industries" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" }
  ];

  const teamMembers = [
    {
      name: "Arun",
      role: "Senior Partner",
      phone: "+91 9003480035",
      expertise: "Corporate Finance & Tax Consultation"
    },
    {
      name: "Sakthi", 
      role: "Partner",
      phone: "+91 9500197938",
      expertise: "Auditing & Compliance Services"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted auditing professionals since 2013
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Our Story
            </h2>
            <div className="text-lg leading-relaxed text-muted-foreground space-y-6">
              <p>
                The firm 'Quickville Associates' was established in the year 2013 with a vision to provide 
                comprehensive financial and business solutions to individuals and organizations across various industries.
              </p>
              <p>
                It provides services in the fields of accounting, audit, management consultancy, tax consultancy, 
                Income tax return filing, Charitable Trust registration, Society registration, Firm registration, 
                services relating to DGFT, services relating to ROC i.e., Incorporation of companies and secretarial 
                services, accounting services and GST related service, financial consultancy and preparation of 
                project reports for banks and financial institutions.
              </p>
              <p>
                The firm is professionally managed and the team consists of distinguished accounting and management 
                skills representing a combination of specialized skills, which are geared to offer sound financial 
                advice and personalized proactive services. Those associated with the firm have regular interaction 
                with industry and other professionals which enables the firm to keep pace with contemporary 
                developments and to meet the needs of the clients.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
              Meet Our Team
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border text-center">
                  <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AuditingSupport />
      <IndustryExposure />
      <ThirdPartyAssurance />
      <Footer />
    </div>
  );
};

export default AboutPage;
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AuditingSupport from "@/components/AuditingSupport";
import Services from "@/components/Services";
import AuditEvaluation from "@/components/AuditEvaluation";
import IndustryExposure from "@/components/IndustryExposure";
import ThirdPartyAssurance from "@/components/ThirdPartyAssurance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AuditingSupport />
      <Services />
      <AuditEvaluation />
      <IndustryExposure />
      <ThirdPartyAssurance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

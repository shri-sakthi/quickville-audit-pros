import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-auditing.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional auditing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary-light/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Quickville Associates
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Your Auditing Professionals
          </p>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              The firm 'Quickville Associates' was established in the year 2013. 
              It provides services in the fields of accounting, audit, management consultancy, 
              tax consultancy, Income tax return filing, Charitable Trust registration, 
              Society registration, Firm registration, services relating to DGFT, 
              services relating to ROC i.e., Incorporation of companies and secretarial services, 
              accounting services and GST related service, financial consultancy and preparation 
              of project reports for banks and financial institutions.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The firm is a professionally managed and the team consists of distinguished 
              accounting and management skills represents a combination of specialized skills, 
              which are geared to offer sound financial advice and personalized proactive services.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
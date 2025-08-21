import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive accounting, auditing, and business services tailored to meet your specific requirements
          </p>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
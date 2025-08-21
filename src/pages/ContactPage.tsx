import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-primary-dark via-primary to-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our expert team for professional auditing and accounting services
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
import auditingSupportImage from "@/assets/auditing-support.jpg";

const AuditingSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src={auditingSupportImage} 
                alt="Professional auditing support services" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-lg lg:max-w-none">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Carefully Crafted{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Auditing Support
                </span>
              </h2>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
                'Quickville Associates' provides you with respectable and certified auditing & 
                accounting services that you demand. The services we offer meet a wide range of 
                both corporate and personal needs.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                After working with us, you'll be able to leave your auditing & accounting worries 
                behind and get back to focusing on the things that matter most in your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditingSupport;
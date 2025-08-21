import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "GST Services",
    "Corporate Finance",
    "Registration Services",
    "Filing of Returns",
    "Accounting Services",
    "Auditing & Advisory"
  ];

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Quickville Associates
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Established in 2013, Quickville Associates provides comprehensive auditing, 
              accounting, and business consultancy services. Our team of experts is dedicated 
              to delivering personalized solutions that drive your business growth.
            </p>
            
            <div className="space-y-2 text-sm text-white/70">
              <div>
                <strong className="text-white">Address:</strong><br />
                No.65, Muthu Towers, IInd Floor,<br />
                Bharathi Park Road no-2, 7th Cross,<br />
                Saibaba Colony, Coimbatore,<br />
                Tamil Nadu 641011, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div>Arun: +91 9003480035</div>
                <div>Sakthi: +91 9500197938</div>
                <div>quickvilleassociates@gmail.com</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
              <div className="space-y-1 text-sm text-white/70">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 9:00 AM - 2:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Quickville Associates. All rights reserved. 
            Established in 2013 - Your trusted auditing professionals.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
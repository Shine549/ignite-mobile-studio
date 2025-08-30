import { Link } from "react-router-dom";
import { Smartphone, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "Smartphones", href: "/products" },
        { name: "Accessories", href: "/products" },
        { name: "Compare", href: "/products" },
        { name: "Trade-in", href: "/products" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Contact Us", href: "/contact" },
        { name: "Warranty", href: "/support" },
        { name: "Repair", href: "/support" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/about" },
        { name: "Press", href: "/blog" },
        { name: "Investors", href: "/about" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/privacy" },
        { name: "Accessibility", href: "/support" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="gradient-primary p-2 rounded-lg">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  Ignite Mobile
                </span>
              </Link>
              <p className="text-white/80 mb-6 leading-relaxed">
                Never settle for ordinary. Experience premium mobile technology 
                that pushes boundaries and redefines possibilities.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth group"
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5 text-white/80 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-smooth"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              © 2024 Ignite Mobile. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-smooth">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-smooth">
                Terms
              </Link>
              <Link to="/support" className="text-white/60 hover:text-white transition-smooth">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
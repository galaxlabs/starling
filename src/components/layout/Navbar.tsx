import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn, formatWhatsAppLink } from "../../lib/utils";
import { SEO_KIT } from "../../constants/seo-kit";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-gray-900">
                STERLING<span className="text-blue-600">EDGE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                LTD • EST 2024
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600",
                  location.pathname === link.href ? "text-blue-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={formatWhatsAppLink(SEO_KIT.company.whatsapp, "Hi Sterling Edge, I'd like to enquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium border-b border-gray-50",
                  location.pathname === link.href ? "text-blue-600" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 p-3">
              <a
                href={`tel:${SEO_KIT.company.phone}`}
                className="flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-900 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
              <a
                href={formatWhatsAppLink(SEO_KIT.company.whatsapp)}
                className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-xl font-semibold"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

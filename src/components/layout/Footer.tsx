import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Facebook, Instagram } from "lucide-react";
import { SEO_KIT } from "../../constants/seo-kit";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-tighter text-white">
                STERLING<span className="text-blue-400">EDGE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                LTD • REG 17101002
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              A premier business platform based in Stockport, delivering excellence across multiple sectors from Cloud Kitchens to Digital Growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/cloud-kitchen" className="hover:text-white transition-colors">Cloud Kitchens</Link></li>
              <li><Link to="/services/cleaning" className="hover:text-white transition-colors">Cleaning Services</Link></li>
              <li><Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/substation-design" className="hover:text-white transition-colors">Substation P&C Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                <span>Stockport, Greater Manchester, UK</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                <a href={`tel:${SEO_KIT.company.phone}`} className="hover:text-white">{SEO_KIT.company.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400 shrink-0" />
                <a href={`mailto:${SEO_KIT.company.email}`} className="hover:text-white">{SEO_KIT.company.email}</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-green-400 shrink-0" />
                <a href={`https://wa.me/${SEO_KIT.company.whatsapp}`} className="hover:text-white">WhatsApp Support</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Sterling Edge Ltd. All rights reserved. Company No: 17101002.</p>
          <p className="mt-4 md:mt-0">Built for Stockport & Greater Manchester Business Growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

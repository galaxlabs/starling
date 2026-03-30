import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO_KIT } from "../constants/seo-kit";
import { formatWhatsAppLink } from "../lib/utils";
import ContactForm from "../components/forms/ContactForm";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ServiceDetail = ({ id, title, description, features, image }: ServiceDetailProps) => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>{title} | {SEO_KIT.company.name}</title>
        <meta name="description" content={description} />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="flex mb-6 text-sm font-medium text-gray-500">
                <Link to="/services" className="hover:text-blue-600">Services</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">{id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
              </nav>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>
              
              <div className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={formatWhatsAppLink(SEO_KIT.company.whatsapp, `Hi, I'm interested in your ${id} services.`)}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={image} alt={title} className="rounded-[2.5rem] shadow-2xl border-8 border-gray-50" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          <div id="quote" className="bg-gray-50 rounded-[3rem] p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get a Tailored Quote</h2>
                <p className="text-gray-600 mb-8">
                  Our team is ready to help you scale your business with our {id.replace('-', ' ')} solutions. Fill out the form and we'll get back to you with a personalized proposal.
                </p>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Why choose us?</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Local Stockport-based support</li>
                    <li>• Transparent UK pricing</li>
                    <li>• Fast turnaround times</li>
                    <li>• Dedicated account manager</li>
                  </ul>
                </div>
              </div>
              <div>
                <ContactForm defaultService={id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

import { Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import { SEO_KIT } from "./constants/seo-kit";

// Simple placeholders for remaining pages
const Services = () => (
  <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
    <div className="mb-16">
      <h1 className="text-5xl font-bold tracking-tighter mb-6">Our Business & Groups</h1>
      <p className="text-gray-500 text-lg max-w-2xl">Sterling Edge Ltd operates through strategic divisions to provide comprehensive technical and operational support for UK businesses.</p>
    </div>
    
    <div className="space-y-20">
      {/* Digital & Technical Group */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="w-8 h-[1px] bg-blue-600 mr-4" />
          Digital & Technical Group
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "ai-automation", name: "AI & Agentic Solutions" },
            { id: "erp-next", name: "ERPNext Implementation" },
            { id: "web-development", name: "Web Development" },
            { id: "it-support", name: "IT Growth Support" }
          ].map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
              <h3 className="font-bold mb-2">{s.name}</h3>
              <p className="text-xs text-gray-500">Expert technical solutions for modern business growth.</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Business Operations Group */}
      <div>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="w-8 h-[1px] bg-blue-600 mr-4" />
          Business Operations Group
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "cloud-kitchen", name: "Cloud Kitchens" },
            { id: "cleaning", name: "Cleaning Services" },
            { id: "seo", name: "Local SEO & GBP" },
            { id: "consultation", name: "Technical Consultation" }
          ].map(s => (
            <Link key={s.id} to={`/services/${s.id}`} className="p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
              <h3 className="font-bold mb-2">{s.name}</h3>
              <p className="text-xs text-gray-500">Essential infrastructure and local growth services.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="pt-32 pb-20 px-4 text-center max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
    <p className="text-gray-600 mb-12">Have a question? Our technical team is ready to help.</p>
    <div className="text-left bg-gray-50 p-8 rounded-3xl">
      <p className="mb-4"><strong>Address:</strong> Stockport, Greater Manchester, UK</p>
      <p className="mb-4"><strong>Email:</strong> {SEO_KIT.company.email}</p>
      <p className="mb-8"><strong>Phone:</strong> {SEO_KIT.company.phone}</p>
    </div>
  </div>
);

const ThankYou = () => <div className="pt-32 pb-20 px-4 text-center"><h1>Thank You</h1><p>We have received your message.</p></div>;
const Privacy = () => <div className="pt-32 pb-20 px-4 text-center"><h1>Privacy Policy</h1><p>Your data is safe with us.</p></div>;
const Terms = () => <div className="pt-32 pb-20 px-4 text-center"><h1>Terms & Conditions</h1><p>Our business terms.</p></div>;

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route 
              path="/services/cloud-kitchen" 
              element={<ServiceDetail 
                id="cloud-kitchen"
                title={SEO_KIT.services.cloudKitchen.title}
                description={SEO_KIT.services.cloudKitchen.description}
                features={["Fully Equipped Spaces", "Health & Safety Compliant", "Prime Stockport Location", "24/7 Access Available"]}
                image="https://picsum.photos/seed/kitchen/800/1000"
              />} 
            />
            <Route 
              path="/services/cleaning" 
              element={<ServiceDetail 
                id="cleaning"
                title={SEO_KIT.services.cleaning.title}
                description={SEO_KIT.services.cleaning.description}
                features={["Professional Staff", "Eco-friendly Products", "Flexible Scheduling", "Fully Insured Services"]}
                image="https://picsum.photos/seed/clean/800/1000"
              />} 
            />
            <Route 
              path="/services/web-development" 
              element={<ServiceDetail 
                id="web-development"
                title={SEO_KIT.services.webDev.title}
                description={SEO_KIT.services.webDev.description}
                features={["Custom React/Next.js Apps", "Responsive Design", "ERPNext Integration", "Ongoing Maintenance"]}
                image="https://picsum.photos/seed/web/800/1000"
              />} 
            />
            <Route 
              path="/services/seo" 
              element={<ServiceDetail 
                id="seo"
                title={SEO_KIT.services.seo.title}
                description={SEO_KIT.services.seo.description}
                features={["GBP Optimization", "Local Keyword Research", "Backlink Building", "Monthly Performance Reports"]}
                image="https://picsum.photos/seed/seo/800/1000"
              />} 
            />
            <Route 
              path="/services/ai-automation" 
              element={<ServiceDetail 
                id="ai-automation"
                title={SEO_KIT.services.aiAutomation.title}
                description={SEO_KIT.services.aiAutomation.description}
                features={["Custom AI Agents", "Workflow Automation", "LLM Integration", "Efficiency Audits"]}
                image="https://picsum.photos/seed/ai/800/1000"
              />} 
            />
            <Route 
              path="/services/erp-next" 
              element={<ServiceDetail 
                id="erp-next"
                title={SEO_KIT.services.erpNext.title}
                description={SEO_KIT.services.erpNext.description}
                features={["Custom Module Development", "POS Integration", "Data Migration", "Process Optimization"]}
                image="https://picsum.photos/seed/erp/800/1000"
              />} 
            />
            <Route 
              path="/services/it-support" 
              element={<ServiceDetail 
                id="it-support"
                title={SEO_KIT.services.itSupport.title}
                description={SEO_KIT.services.itSupport.description}
                features={["Infrastructure Management", "Cloud Migration", "Cybersecurity Audits", "Growth Strategy"]}
                image="https://picsum.photos/seed/it/800/1000"
              />} 
            />
            <Route 
              path="/services/consultation" 
              element={<ServiceDetail 
                id="consultation"
                title={SEO_KIT.services.consultation.title}
                description={SEO_KIT.services.consultation.description}
                features={["Solution Architecture", "Tech Stack Advisory", "Digital Transformation", "Feasibility Studies"]}
                image="https://picsum.photos/seed/consult/800/1000"
              />} 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
}

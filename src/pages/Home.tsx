import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { 
  ArrowRight, CheckCircle, Star, MessageCircle, Utensils, Sparkles, Globe, 
  Search, ShieldCheck, TrendingUp, Cpu, Bot, Zap, Database, Terminal, Settings,
  Layers, Code, BarChart
} from "lucide-react";
import { SEO_KIT } from "../constants/seo-kit";
import { generateLocalBusinessSchema } from "../lib/schema";
import ContactForm from "../components/forms/ContactForm";
import { formatWhatsAppLink, cn } from "../lib/utils";

const Home = () => {
  const divisions = [
    {
      name: "Digital & Technical Group",
      desc: "Expert-led development and automation for modern enterprises.",
      services: [
        {
          id: "ai-automation",
          title: "AI & Agentic Solutions",
          desc: "Custom AI agents and automated workflows built with LLM-orchestration to reduce manual overhead.",
          icon: Bot,
          color: "bg-blue-50 text-blue-600",
          link: "/services/ai-automation"
        },
        {
          id: "erp-next",
          title: "ERPNext Implementation",
          desc: "End-to-end ERPNext setup with custom doctypes, server scripts, and POS integration.",
          icon: Database,
          color: "bg-purple-50 text-purple-600",
          link: "/services/erp-next"
        },
        {
          id: "web-development",
          title: "Web Development",
          desc: "High-performance React/Next.js applications with robust backend integrations.",
          icon: Code,
          color: "bg-indigo-50 text-indigo-600",
          link: "/services/web-development"
        },
        {
          id: "it-support",
          title: "IT Growth Support",
          desc: "Strategic IT infrastructure management and technical scaling for UK businesses.",
          icon: Zap,
          color: "bg-yellow-50 text-yellow-600",
          link: "/services/it-support"
        }
      ]
    },
    {
      name: "Business Operations Group",
      desc: "Physical infrastructure and essential services for local growth.",
      services: [
        {
          id: "cloud-kitchen",
          title: "Cloud Kitchens",
          desc: "Premium delivery-first kitchen spaces in Stockport for growing food brands.",
          icon: Utensils,
          color: "bg-orange-50 text-orange-600",
          link: "/services/cloud-kitchen"
        },
        {
          id: "cleaning",
          title: "Cleaning Services",
          desc: "Reliable commercial and domestic cleaning across Greater Manchester.",
          icon: Sparkles,
          color: "bg-cyan-50 text-cyan-600",
          link: "/services/cleaning"
        },
        {
          id: "seo",
          title: "Local SEO & GBP",
          desc: "Dominate local search results and capture more leads in your area.",
          icon: Search,
          color: "bg-green-50 text-green-600",
          link: "/services/seo"
        },
        {
          id: "consultation",
          title: "Technical Consultation",
          desc: "Expert-led solution architecture and strategic digital transformation advisory.",
          icon: Settings,
          color: "bg-gray-50 text-gray-600",
          link: "/services/consultation"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>{SEO_KIT.homepage.title}</title>
        <meta name="description" content={SEO_KIT.homepage.description} />
        <script type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </script>
      </Helmet>

      {/* Hero Section - Modern Technical Aesthetic */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <Terminal className="w-3 h-3 mr-2" />
                Expert-Led Development & Operations
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-[0.9] mb-8">
                Sterling <span className="text-blue-600 italic">Edge</span>
              </h1>
              <p className="text-xl font-mono text-gray-500 mb-10 max-w-lg leading-relaxed">
                // Strategic business platform delivering technical excellence across UK infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href={formatWhatsAppLink(SEO_KIT.company.whatsapp)}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Support
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-gray-900 p-8 rounded-[2.5rem] shadow-2xl border border-gray-800">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Status: Optimal</div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-blue-400">const sterlingEdge = {"{"}</div>
                  <div className="pl-4 text-gray-400">location: "Stockport, UK",</div>
                  <div className="pl-4 text-gray-400">focus: ["AI", "ERPNext", "Growth"],</div>
                  <div className="pl-4 text-gray-400">mission: "Empower UK Business"</div>
                  <div className="text-blue-400">{"}"};</div>
                  <div className="pt-4 text-green-400 animate-pulse">{">"} Initializing growth protocols...</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl shadow-xl z-20 text-white">
                <div className="flex items-center space-x-4">
                  <Cpu className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold leading-none">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">Technical Edge</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Business & Groups Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Our Business & Groups</h2>
            <h3 className="text-5xl font-bold text-gray-900 tracking-tighter">Strategic Divisions</h3>
          </div>

          <div className="space-y-24">
            {divisions.map((division, dIdx) => (
              <div key={dIdx} className="relative">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                  <div className="max-w-xl">
                    <div className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                      <Layers className="w-8 h-8 mr-4 text-blue-600" />
                      {division.name}
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed">{division.desc}</p>
                  </div>
                  <div className="h-[1px] flex-grow bg-gray-100 mx-8 hidden lg:block" />
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Group ID: 0{dIdx + 1}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {division.services.map((service) => (
                    <Link
                      key={service.id}
                      to={service.link}
                      className="group relative bg-white p-8 border border-gray-100 hover:border-blue-600 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:bg-blue-600 group-hover:text-white", service.color)}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">{service.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      <div className="text-[10px] font-mono text-gray-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                        View Service Detail
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Development Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] mb-6">Expert Background</h2>
              <h3 className="text-5xl font-bold mb-8 tracking-tighter leading-none">Built by Developers, <br />For Business.</h3>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We don't just provide services; we build solutions. Our team comes from a deep technical background in full-stack development, ERP orchestration, and AI research.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">Next.js</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">Frontend Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Python</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">ERP & AI Core</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gray-800 p-6 rounded-3xl border border-gray-700">
                    <BarChart className="w-8 h-8 text-blue-400 mb-4" />
                    <div className="font-bold">Data Driven</div>
                  </div>
                  <div className="bg-blue-600 p-6 rounded-3xl">
                    <Settings className="w-8 h-8 text-white mb-4" />
                    <div className="font-bold">Custom Logic</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-800 p-6 rounded-3xl border border-gray-700">
                    <ShieldCheck className="w-8 h-8 text-green-400 mb-4" />
                    <div className="font-bold">Secure Ops</div>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-3xl border border-gray-700">
                    <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                    <div className="font-bold">Fast Scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="enquiry" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Get in Touch</h2>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Ready to Start Your Next Project?</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form and our technical team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <MessageCircle className="w-6 h-6 text-green-500 mr-4" />
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Direct Line</div>
                    <div className="font-bold text-gray-900">WhatsApp Support</div>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <Database className="w-6 h-6 text-purple-500 mr-4" />
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ERP Support</div>
                    <div className="font-bold text-gray-900">ERPNext Specialists</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

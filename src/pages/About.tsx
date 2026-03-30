import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Shield, Target, Users, Award } from "lucide-react";
import { SEO_KIT } from "../constants/seo-kit";

const About = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>About Us | {SEO_KIT.company.name}</title>
        <meta name="description" content="Learn about Sterling Edge Ltd, our mission, and our commitment to business growth in Stockport and beyond." />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story & Mission</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sterling Edge Ltd was founded with a clear vision: to provide a robust platform for UK businesses to scale efficiently. Based in Stockport, we combine local knowledge with modern technology to deliver services that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src="https://picsum.photos/seed/office/800/600" alt="Our Office" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-blue-50 rounded-2xl mr-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">To be the most trusted business platform in the North West, enabling sustainable growth through innovation and excellence.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-green-50 rounded-2xl mr-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">Integrity, precision, and a relentless focus on our clients' success are at the heart of everything we do.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sterling Edge by the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Founded", value: "2024" },
                { label: "Services", value: "6+" },
                { label: "Local Focus", value: "100%" },
                { label: "Support", value: "24/7" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

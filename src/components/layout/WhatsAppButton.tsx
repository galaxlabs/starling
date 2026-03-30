import { MessageCircle } from "lucide-react";
import { formatWhatsAppLink } from "../../lib/utils";
import { SEO_KIT } from "../../constants/seo-kit";

const WhatsAppButton = () => {
  return (
    <a
      href={formatWhatsAppLink(SEO_KIT.company.whatsapp, "Hello Sterling Edge, I'm visiting your website and have a question.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-900 text-xs font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;

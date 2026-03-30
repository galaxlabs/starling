import { SEO_KIT } from "../constants/seo-kit";

export interface LeadData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  source?: string;
  utm?: Record<string, string>;
}

export const erpService = {
  async createLead(data: LeadData) {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        source: data.source || window.location.pathname,
        utm: {
          source: new URLSearchParams(window.location.search).get("utm_source") || "direct",
          medium: new URLSearchParams(window.location.search).get("utm_medium") || "website",
          campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "general"
        }
      }),
    });
    return response.json();
  },

  async submitEnquiry(data: any) {
    const response = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
};

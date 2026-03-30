import { SEO_KIT } from "../constants/seo-kit";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_KIT.company.name,
    "image": "https://picsum.photos/seed/sterling/800/600",
    "@id": "https://sterlingedge.co.uk",
    "url": "https://sterlingedge.co.uk",
    "telephone": SEO_KIT.company.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stockport Business Park",
      "addressLocality": "Stockport",
      "addressRegion": "Greater Manchester",
      "postalCode": "SK1",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.4106,
      "longitude": -2.1575
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:30"
    },
    "sameAs": [
      "https://www.facebook.com/sterlingedgeltd",
      "https://www.linkedin.com/company/sterlingedgeltd"
    ]
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
}

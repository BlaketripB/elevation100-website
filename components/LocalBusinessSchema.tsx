export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://elevation100.com/#organization",
    name: "Elevation 100 LLC",
    legalName: "Elevation 100 LLC",
    url: "https://elevation100.com",
    telephone: "+1-801-830-5884",
    email: "ryan@elevation100.com",
    image: "https://elevation100.com/images/logo.png",
    logo: "https://elevation100.com/images/logo.png",
    slogan: "Where Building Begins",
    description:
      "Elevation 100 LLC builds custom homes, handles architectural design, framing, remodels, and steel installation across Utah.",
    priceRange: "$$-$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Utah",
      addressRegion: "UT",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Utah",
    },
    serviceArea: {
      "@type": "State",
      name: "Utah",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        "Custom Home Building",
        "Architectural Plan Design",
        "Custom Home Framing",
        "Remodeling",
        "Steel Installation",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    knowsAbout: [
      "Custom Home Building",
      "Architectural Plan Design",
      "Custom Home Framing",
      "Remodeling",
      "Steel Installation",
    ],
    sameAs: ["https://elevation100.com"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

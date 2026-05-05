const SITE_URL = "https://elevation100.com";

const SERVICE_AREAS = [
  "Park City",
  "Deer Valley",
  "Heber City",
  "Midway",
  "Holladay",
  "Alpine",
  "Highland",
  "Draper",
  "Sandy",
  "Santaquin",
  "Utah County",
];

const SERVICES = [
  "Custom Home Building",
  "Architectural Plan Design",
  "Custom Home Framing",
  "Remodeling",
  "Steel Installation",
];

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#organization`,
    name: "Elevation 100 LLC",
    legalName: "Elevation 100 LLC",
    url: SITE_URL,
    telephone: "+1-801-830-5884",
    email: "ryan@elevation100.com",
    image: `${SITE_URL}/images/logo.png`,
    logo: `${SITE_URL}/images/logo.png`,
    slogan: "Where Building Begins",
    description:
      "Elevation 100 LLC is a Utah custom home builder serving Park City, Deer Valley, Heber Valley, and Utah County. Custom homes, architectural plans, framing, remodels, and steel installation.",
    priceRange: "$$$",
    founder: {
      "@type": "Person",
      name: "Ryan Bowles",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santaquin",
      addressRegion: "UT",
      postalCode: "84655",
      addressCountry: "US",
    },
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Utah",
      },
    })),
    serviceArea: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: SERVICES,
    knowsAbout: SERVICES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: {
            "@type": "State",
            name: "Utah",
          },
        },
      })),
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    openingHours: "Mo-Fr 08:00-18:00",
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

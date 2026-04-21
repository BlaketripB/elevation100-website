import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Elevation 100 LLC Custom Home Construction",
  description:
    "View our latest custom home builds, framing projects, remodels, and steel installations. Real client reviews and project photos from Elevation 100 LLC.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Project Gallery | Elevation 100 LLC Custom Home Construction",
    description:
      "View our latest custom home builds, framing projects, remodels, and steel installations.",
    url: "/gallery",
  },
};

type Photo = {
  src: string;
  category: string;
  comment: string;
  client: string;
};

const recentWork: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    category: "Recent Work",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
    category: "Recent Work",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
];

const pastProjects: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
    category: "Past Projects",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&q=80",
    category: "Past Projects",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
];

const services: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&q=80",
    category: "Custom Home Building",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80",
    category: "Architectural Plan Design",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1400&q=80",
    category: "Custom Home Framing",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80",
    category: "Remodeling",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    category: "Steel Installation",
    comment:
      "Elevation 100 exceeded every expectation. The craftsmanship is unmatched.",
    client: "John D.",
  },
];

export default function GalleryPage() {
  const sections: { title: string; photos: Photo[] }[] = [
    { title: "Recent Work", photos: recentWork },
    { title: "Past Projects", photos: pastProjects },
    { title: "Services", photos: services },
  ];

  return (
    <section className="relative bg-brand-black text-white" aria-labelledby="gallery-heading">
      {/* Concrete background layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-black/70"
        aria-hidden
      />

      <div className="relative container-pad py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="section-label">OUR WORK</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              id="gallery-heading"
              className="heading-lg mt-4 max-w-3xl"
            >
              Built With Precision. Finished With Pride.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 h-px w-20 bg-brand-gold" />
          </Reveal>
        </div>

        <div className="mt-16 space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <Reveal>
                <h2 className="font-heading uppercase tracking-[0.3em] text-brand-gold text-lg md:text-xl mb-6">
                  {section.title}
                </h2>
              </Reveal>
              <GalleryGrid photos={section.photos} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

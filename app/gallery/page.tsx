import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery | Elevation 100 LLC Custom Home Construction",
  description:
    "View our latest custom home builds, framing projects, remodels, and steel installations from Elevation 100 LLC.",
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
  caption: string;
  priority?: boolean;
};

const recentWork: Photo[] = [
  {
    src: "/gallery/framing-current-trusses.jpg",
    category: "Recent Work",
    caption: "Current Framing Project",
    priority: true,
  },
  {
    src: "/gallery/remodel-current-project.jpg",
    category: "Recent Work",
    caption: "Current Remodel Project",
  },
  {
    src: "/gallery/framing-mountain-view.jpg",
    category: "Recent Work",
    caption: "Recent Project",
  },
  {
    src: "/gallery/custom-metal-install.jpg",
    category: "Recent Work",
    caption: "Custom Steel Install",
  },
];

const pastProjects: Photo[] = [
  {
    src: "/gallery/framing-past-winter-build.jpg",
    category: "Past Projects",
    caption: "Past Framing Project",
  },
  {
    src: "/gallery/framing-past-drone-view.jpg",
    category: "Past Projects",
    caption: "Past Framing Project",
  },
  {
    src: "/gallery/finishes-elegant-exterior.jpg",
    category: "Past Projects",
    caption: "Elegant Exterior Finishes",
  },
  {
    src: "/gallery/custom-metal-fabrication.jpg",
    category: "Past Projects",
    caption: "Custom Steel Build",
  },
];

export default function GalleryPage() {
  const sections: { title: string; photos: Photo[] }[] = [
    { title: "Recent Work", photos: recentWork },
    { title: "Past Projects", photos: pastProjects },
  ];

  return (
    <section className="relative bg-brand-black text-white" aria-labelledby="gallery-heading">
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

import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Home Gallery Utah | Park City Home Builder Portfolio",
  description:
    "Browse Elevation 100's portfolio of custom homes, framing, remodels, and steel installations across Park City, Deer Valley, Heber Valley, and Utah County.",
  keywords: [
    "custom home gallery Utah",
    "Park City home builder portfolio",
    "Deer Valley custom home photos",
    "Utah framing project portfolio",
    "Utah remodel gallery",
  ],
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Custom Home Gallery Utah | Park City Home Builder Portfolio",
    description:
      "Browse Elevation 100's portfolio of custom homes, framing, remodels, and steel installations across Park City, Deer Valley, and Utah County.",
    url: "/gallery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Home Gallery Utah | Park City Home Builder Portfolio",
    description:
      "Custom homes, framing, remodels, and steel installations across Park City, Deer Valley, and Utah County.",
  },
};

type Photo = {
  src: string;
  category: string;
  caption: string;
  alt: string;
  priority?: boolean;
};

const recentWork: Photo[] = [
  {
    src: "/gallery/framing-current-trusses.jpg",
    category: "Recent Work",
    caption: "Current Framing Project",
    alt: "Custom home framing with roof trusses in progress by Elevation 100, Utah custom home builder",
    priority: true,
  },
  {
    src: "/gallery/remodel-current-project.jpg",
    category: "Recent Work",
    caption: "Current Remodel Project",
    alt: "Active home remodel project by Elevation 100 in Utah County",
  },
  {
    src: "/gallery/framing-mountain-view.jpg",
    category: "Recent Work",
    caption: "Recent Project",
    alt: "Custom home framing with mountain backdrop, Park City and Heber Valley custom home builder",
  },
  {
    src: "/gallery/custom-metal-install.jpg",
    category: "Recent Work",
    caption: "Custom Steel Install",
    alt: "Structural steel installation on a custom home build by Elevation 100 in Utah",
  },
];

const pastProjects: Photo[] = [
  {
    src: "/gallery/framing-past-winter-build.jpg",
    category: "Past Projects",
    caption: "Past Framing Project",
    alt: "Custom home framing project during a Utah winter build by Elevation 100",
  },
  {
    src: "/gallery/framing-past-drone-view.jpg",
    category: "Past Projects",
    caption: "Past Framing Project",
    alt: "Aerial drone view of a completed framing project, Utah custom home builder",
  },
  {
    src: "/gallery/finishes-elegant-exterior.jpg",
    category: "Past Projects",
    caption: "Elegant Exterior Finishes",
    alt: "Elegant exterior finishes on a high-end custom home in Park City / Deer Valley",
  },
  {
    src: "/gallery/custom-metal-fabrication.jpg",
    category: "Past Projects",
    caption: "Custom Steel Build",
    alt: "Custom steel fabrication and structural metalwork by Elevation 100 in Utah",
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
              <span className="sr-only">
                Custom Home Builder Portfolio in Park City, Deer Valley, and
                Utah —{" "}
              </span>
              Built With Precision. Finished With Pride.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 h-px w-20 bg-brand-gold" />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-sm md:text-base text-white/75">
              A portfolio of custom homes, framing, remodels, and steel
              installations from across Park City, Deer Valley, Heber Valley,
              and Utah County.
            </p>
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

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Booking } from "@/components/site/Booking";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INTER Barbershop Kraków — Premium Barber & Grooming" },
      {
        name: "description",
        content:
          "INTER Barbershop w Krakowie — premium strzyżenie męskie, golenie brzytwą i pielęgnacja brody. Rezerwacja online. Walerego Sławka 15/U1.",
      },
      { property: "og:title", content: "INTER Barbershop Kraków — Premium Barber" },
      {
        property: "og:description",
        content: "Miejsce, gdzie styl spotyka precyzję. Rezerwacja online.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarberShop",
          name: "INTER Barbershop",
          image: "/og-image.jpg",
          telephone: "+48572909261",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Walerego Sławka 15/U1",
            addressLocality: "Kraków",
            postalCode: "30-633",
            addressCountry: "PL",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "21:00",
            },
          ],
          sameAs: [
            "https://www.instagram.com/inter_barbershop/",
            "https://www.facebook.com/interbarbershoppl",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Booking />
        <Gallery />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

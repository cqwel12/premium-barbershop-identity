import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g4, alt: "Wnętrze INTER Barbershop", span: "md:row-span-2" },
  { src: g2, alt: "Nowoczesna fryzura męska", span: "" },
  { src: g1, alt: "Golenie brzytwą", span: "" },
  { src: g3, alt: "Narzędzia barberskie", span: "md:col-span-2" },
  { src: g5, alt: "Stylizacja brody", span: "" },
  { src: g6, alt: "Fade haircut" , span: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-32 md:py-40 bg-card/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Galeria</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Nasza <span className="italic gradient-text">praca</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 auto-rows-[260px] md:auto-rows-[320px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${it.span} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-gold/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

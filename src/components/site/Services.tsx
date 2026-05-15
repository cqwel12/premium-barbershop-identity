import { useState } from "react";

const BOOKSY = "https://booksy.com/pl-pl/126977_inter-barbershop_barber-shop_8820_krakow";

type Service = { name: string; desc: string; price: string; duration: string };

const categories: Record<string, Service[]> = {
  Strzyżenie: [
    { name: "Strzyżenie męskie", desc: "Klasyczne lub nowoczesne strzyżenie maszynką i nożyczkami.", price: "70 zł", duration: "45 min" },
    { name: "Strzyżenie nożyczkami", desc: "Pełna stylizacja realizowana wyłącznie nożyczkami.", price: "90 zł", duration: "60 min" },
    { name: "Strzyżenie maszynką", desc: "Szybkie i precyzyjne cięcie na jedną długość.", price: "50 zł", duration: "30 min" },
    { name: "Strzyżenie dziecięce", desc: "Dla młodych dżentelmenów do 12 roku życia.", price: "60 zł", duration: "30 min" },
  ],
  Broda: [
    { name: "Trymowanie brody", desc: "Modelowanie i wyrównanie linii brody.", price: "50 zł", duration: "30 min" },
    { name: "Klasyczne golenie brzytwą", desc: "Golenie z gorącym ręcznikiem i pielęgnacją skóry.", price: "70 zł", duration: "40 min" },
    { name: "Pielęgnacja brody", desc: "Olejki, balsamy i finalne wykończenie.", price: "60 zł", duration: "30 min" },
  ],
  Pakiety: [
    { name: "Strzyżenie + Broda", desc: "Kompleksowa metamorfoza w jednej wizycie.", price: "110 zł", duration: "75 min" },
    { name: "Pakiet Premium", desc: "Strzyżenie, broda, peeling i pielęgnacja twarzy.", price: "150 zł", duration: "90 min" },
    { name: "Ojciec & Syn", desc: "Strzyżenie dla taty i syna we wspólnej atmosferze.", price: "120 zł", duration: "75 min" },
  ],
  Stylizacja: [
    { name: "Stylizacja włosów", desc: "Modelowanie, pomada, finishing.", price: "30 zł", duration: "15 min" },
    { name: "Mycie + masaż głowy", desc: "Relaksujący rytuał przed cięciem.", price: "20 zł", duration: "15 min" },
    { name: "Koloryzacja brody", desc: "Subtelne wyrównanie koloru zarostu.", price: "60 zł", duration: "30 min" },
  ],
};

const tabs = Object.keys(categories);

export function Services() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="oferta" className="relative py-32 md:py-40 bg-card/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Oferta</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Usługi <span className="italic gradient-text">premium</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Wybierz kategorię i zarezerwuj wizytę dopasowaną do swoich potrzeb.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-2 md:gap-4 reveal">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-6 md:px-8 py-3 text-xs uppercase tracking-[0.25em] border transition-all duration-300 ${
                active === t
                  ? "border-gold bg-gold text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {categories[active].map((s) => (
            <article
              key={s.name}
              className="group bg-background p-10 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-hover:w-full" />
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl text-foreground">{s.name}</h3>
                <span className="text-gold font-display text-2xl whitespace-nowrap">{s.price}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{s.duration}</span>
                <a
                  href={BOOKSY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline underline-offset-4"
                >
                  Rezerwuj →
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10">
          * Ceny mogą się różnić w zależności od długości włosów i barbera. Aktualny cennik znajdziesz na Booksy.
        </p>
      </div>
    </section>
  );
}

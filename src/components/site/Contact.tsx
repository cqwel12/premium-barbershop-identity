import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Poniedziałek", h: "09:00 – 21:00" },
  { day: "Wtorek", h: "09:00 – 21:00" },
  { day: "Środa", h: "09:00 – 21:00" },
  { day: "Czwartek", h: "09:00 – 21:00" },
  { day: "Piątek", h: "09:00 – 21:00" },
  { day: "Sobota", h: "09:00 – 21:00" },
  { day: "Niedziela", h: "Zamknięte" },
];

export function Contact() {
  return (
    <section id="kontakt" className="py-32 md:py-40 bg-card/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Kontakt</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Odwiedź <span className="italic gradient-text">nas</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          <div className="space-y-8 reveal">
            <div className="flex gap-5 p-8 border border-border bg-background hover-lift">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-xl mb-2">Adres</h3>
                <p className="text-muted-foreground">
                  Walerego Sławka 15/U1<br />30-633 Kraków
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 border border-border bg-background hover-lift">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.4} />
              <div>
                <h3 className="font-display text-xl mb-2">Telefon</h3>
                <a href="tel:572909261" className="text-muted-foreground hover:text-gold transition">
                  +48 572 909 261
                </a>
              </div>
            </div>

            <div className="p-8 border border-border bg-background">
              <div className="flex gap-5 mb-6">
                <Clock className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.4} />
                <h3 className="font-display text-xl">Godziny otwarcia</h3>
              </div>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between items-center text-sm border-b border-border/60 pb-2 last:border-0"
                  >
                    <span className="uppercase tracking-[0.18em] text-foreground/80">{h.day}</span>
                    <span className={h.h === "Zamknięte" ? "text-destructive/80" : "text-gold"}>
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal">
            <div className="relative h-full min-h-[500px] border border-border overflow-hidden">
              <iframe
                title="Mapa INTER Barbershop Kraków"
                src="https://www.google.com/maps?q=Walerego+S%C5%82awka+15,+30-633+Krak%C3%B3w&output=embed"
                className="absolute inset-0 w-full h-full grayscale contrast-125 brightness-75"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

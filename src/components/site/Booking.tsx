import { Calendar } from "lucide-react";

const BOOKSY = "https://booksy.com/pl-pl/126977_inter-barbershop_barber-shop_8820_krakow";

export function Booking() {
  return (
    <section id="rezerwacja" className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <Calendar className="w-10 h-10 text-gold mx-auto mb-8" strokeWidth={1.2} />
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Rezerwacja</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-tight">
            Zarezerwuj <span className="italic gradient-text">online</span>
          </h2>
          <p className="mt-8 text-lg text-foreground/80 max-w-xl mx-auto font-light">
            Wybierz dogodny termin u naszego barbera w kilka sekund.
            Rezerwacja online dostępna 24/7 przez Booksy.
          </p>

          <div className="mt-12">
            <a
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-14 py-6 bg-gold text-primary-foreground text-sm uppercase tracking-[0.3em] font-medium hover:shadow-[0_0_60px_var(--gold)] transition-all duration-500"
            >
              <span className="relative z-10">Umów wizytę online</span>
              <span className="ml-4 relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Lub zadzwoń: <a href="tel:572909261" className="text-gold hover:underline">572 909 261</a>
          </p>
        </div>
      </div>
    </section>
  );
}

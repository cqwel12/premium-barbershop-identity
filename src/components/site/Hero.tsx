import hero from "@/assets/hero.jpg";

const BOOKSY = "https://booksy.com/pl-pl/126977_inter-barbershop_barber-shop_8820_krakow";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Wnętrze INTER Barbershop w Krakowie"
          width={1920}
          height={1280}
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container-x relative z-10 pt-28">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8 reveal visible">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">
              Kraków · Premium Grooming
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight">
            <span className="block">INTER</span>
            <span className="block gradient-text italic font-medium">Barbershop</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-xl font-light leading-relaxed">
            Miejsce, gdzie styl spotyka precyzję. Klasyczne rzemiosło barberskie
            w nowoczesnej, męskiej oprawie.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-10 py-5 bg-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium hover:shadow-[0_0_40px_var(--gold)] transition-all duration-500"
            >
              Zarezerwuj wizytę
              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#oferta"
              className="inline-flex items-center justify-center px-10 py-5 border border-foreground/30 text-foreground text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-all duration-500"
            >
              Zobacz ofertę
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}

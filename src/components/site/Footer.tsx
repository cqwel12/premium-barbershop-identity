import { Instagram, Facebook } from "lucide-react";

const BOOKSY = "https://booksy.com/pl-pl/126977_inter-barbershop_barber-shop_8820_krakow";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="container-x py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-4xl gradient-text">INTER</div>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground mt-2">
              Barbershop · Kraków
            </div>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Miejsce, gdzie styl spotyka precyzję. Premium grooming dla mężczyzn,
              którzy cenią detal.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/inter_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Instagram size={18} strokeWidth={1.4} />
              </a>
              <a
                href="https://www.facebook.com/interbarbershoppl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-all duration-300"
              >
                <Facebook size={18} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Nawigacja</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#o-nas" className="hover:text-gold transition">O nas</a></li>
              <li><a href="#oferta" className="hover:text-gold transition">Oferta</a></li>
              <li><a href="#galeria" className="hover:text-gold transition">Galeria</a></li>
              <li><a href="#opinie" className="hover:text-gold transition">Opinie</a></li>
              <li><a href="#faq" className="hover:text-gold transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Walerego Sławka 15/U1</li>
              <li>30-633 Kraków</li>
              <li><a href="tel:572909261" className="hover:text-gold transition">+48 572 909 261</a></li>
              <li>
                <a href={BOOKSY} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                  Rezerwacja Booksy →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground uppercase tracking-[0.2em]">
          <div>© {new Date().getFullYear()} INTER Barbershop · Wszelkie prawa zastrzeżone</div>
          <div>Kraków · Premium Grooming</div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Jak mogę zarezerwować wizytę?", a: "Najwygodniej online przez Booksy — przycisk „Umów wizytę online” przekieruje Cię do kalendarza. Możesz też zadzwonić pod numer 572 909 261." },
  { q: "Czy przyjmujecie bez rezerwacji?", a: "Staramy się przyjmować klientów bez rezerwacji w miarę dostępności, jednak zalecamy wcześniejsze umówienie wizyty, by uniknąć oczekiwania." },
  { q: "Jakie metody płatności akceptujecie?", a: "Akceptujemy gotówkę, karty płatnicze oraz BLIK." },
  { q: "Czy strzyżecie dzieci?", a: "Tak, oferujemy specjalne strzyżenie dla dzieci do 12 roku życia w przyjaznej atmosferze." },
  { q: "Ile trwa standardowa wizyta?", a: "Strzyżenie męskie zajmuje około 45 minut, pakiet strzyżenie + broda około 75 minut. Pełen zakres czasu znajdziesz przy każdej usłudze." },
  { q: "Gdzie się znajdujecie?", a: "Walerego Sławka 15/U1, 30-633 Kraków. W pobliżu dostępne miejsca parkingowe." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 md:py-40">
      <div className="container-x grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 reveal">
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">FAQ</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Częste <span className="italic gradient-text">pytania</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Wszystko, co warto wiedzieć przed pierwszą wizytą w INTER Barbershop.
          </p>
        </div>

        <div className="lg:col-span-8 reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className={`font-display text-xl md:text-2xl transition-colors duration-300 ${isOpen ? "text-gold" : "text-foreground group-hover:text-gold"}`}>
                    {f.q}
                  </span>
                  <Plus
                    className={`w-5 h-5 shrink-0 text-gold transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed pr-10">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

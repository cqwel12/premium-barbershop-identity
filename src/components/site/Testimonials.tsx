import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Marcin K.", text: "Najlepszy barber w Krakowie. Atmosfera, profesjonalizm i efekt — bezkonkurencyjne. Wracam co miesiąc.", role: "Klient od 2 lat" },
  { name: "Tomasz W.", text: "Precyzja i dbałość o detal. Czuję się tu jak w prawdziwym męskim klubie. Pełen relaks.", role: "Stały klient" },
  { name: "Łukasz P.", text: "Świetne strzyżenie i golenie brzytwą. Obsługa na najwyższym poziomie, polecam każdemu.", role: "Klient" },
  { name: "Adam J.", text: "Zawsze profesjonalnie, zawsze na czas, zawsze idealnie. INTER to klasa sama w sobie.", role: "Klient od 3 lat" },
  { name: "Krzysztof M.", text: "Klimat premium i ekipa, która zna się na rzeczy. Pakiet broda + włosy to mój rytuał.", role: "Stały klient" },
  { name: "Paweł S.", text: "Profesjonalne podejście od pierwszej minuty. Wnętrze robi wrażenie, a efekt jeszcze większe.", role: "Klient" },
];

export function Testimonials() {
  return (
    <section id="opinie" className="py-32 md:py-40">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Opinie</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Co mówią <span className="italic gradient-text">klienci</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="relative p-10 border border-border bg-card hover-lift reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" strokeWidth={1} />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed font-light italic">
                „{r.text}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {r.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

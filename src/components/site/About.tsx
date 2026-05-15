import { Scissors, Award, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Scissors, title: "Rzemiosło", text: "Precyzja w każdym ruchu nożyczek i brzytwy." },
  { icon: Award, title: "Doświadczenie", text: "Lata praktyki i pasji do męskiego stylu." },
  { icon: Users, title: "Indywidualnie", text: "Każda wizyta dopasowana do Twojego charakteru." },
  { icon: Sparkles, title: "Premium", text: "Atmosfera, której szukałeś — bez kompromisów." },
];

export function About() {
  return (
    <section id="o-nas" className="relative py-32 md:py-40">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 reveal">
          <div className="flex items-center gap-4 mb-6">
            <span className="hairline" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">O nas</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Sztuka męskiej <span className="italic gradient-text">elegancji</span>
          </h2>
        </div>

        <div className="lg:col-span-7 reveal">
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            INTER Barbershop to miejsce stworzone z myślą o mężczyznach, którzy
            cenią detal, atmosferę i jakość. Łączymy tradycyjne techniki barberskie
            z nowoczesnym podejściem, by każda wizyta stała się rytuałem.
          </p>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Nasi barberzy to profesjonaliści z pasją — słuchają, doradzają i wykonują
            usługę z uwagą do najmniejszego detalu. Skóra, broda, włosy. Każdy element
            otrzymuje odpowiednią troskę.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-background p-8 hover-lift group cursor-default"
              >
                <Icon className="w-7 h-7 text-gold mb-4 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

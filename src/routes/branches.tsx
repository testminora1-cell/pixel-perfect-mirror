import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { branches } from "@/lib/data";
import { PageHero } from "@/components/site/Chrome";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/branches")({
  head: () => seo("Салбарууд", "Улаанбаатар дахь Gelato Mongolia салбаруудын хаяг, цагийн хуваарь."),
  component: Branches,
});

const pins = [{ x: 42, y: 48 }, { x: 46, y: 74 }, { x: 68, y: 40 }];

function Branches() {
  const [active, setActive] = useState(0);
  return (
    <div className="pb-24">
      <PageHero eyebrow="Le nostre gelaterie" title="Салбарууд" sub="Улаанбаатар хотод гурван салбартай." />
      <section className="container-x grid gap-10 lg:grid-cols-12">
        <ul className="divide-y divide-border border-y border-border lg:col-span-6">
          {branches.map((b, i) => (
            <li key={b.name} onMouseEnter={() => setActive(i)} className={`flex gap-5 py-6 transition-colors ${active === i ? "" : "opacity-70"}`}>
              <img src={b.image} alt={b.name} loading="lazy" className="h-28 w-28 shrink-0 object-cover md:h-36 md:w-36" />
              <div className="flex-1">
                <h2 className="text-3xl">{b.name}</h2>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />{b.address}</p>
                <p className="mt-1 flex items-center gap-2 text-sm"><Clock className="h-4 w-4" strokeWidth={1.5} />{b.hours}</p>
                <p className="mt-1 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" strokeWidth={1.5} />{b.phone}</p>
                <button className="link-u mt-3 text-[12px] font-semibold uppercase tracking-[0.14em]">Газрын зураг →</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="relative aspect-square overflow-hidden bg-vanilla lg:sticky lg:top-24 lg:col-span-6 lg:self-start">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-border" preserveAspectRatio="none">
            {[15, 30, 45, 60, 75, 90].map((v) => <g key={v}><line x1={v} y1="0" x2={v} y2="100" stroke="currentColor" strokeWidth="0.2" /><line x1="0" y1={v} x2="100" y2={v} stroke="currentColor" strokeWidth="0.2" /></g>)}
            <path d="M0 62 C 25 58, 40 66, 60 60 S 90 55, 100 58" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-pistachio-soft" />
            <path d="M10 0 L 30 100 M 55 0 L 50 100 M 0 35 L 100 30" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          {pins.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ left: `${p.x}%`, top: `${p.y}%` }} className="absolute -translate-x-1/2 -translate-y-full">
              <span className={`flex items-center gap-2 whitespace-nowrap px-3 py-1.5 text-xs font-semibold transition-colors ${active === i ? "bg-espresso text-espresso-foreground" : "bg-background text-foreground"}`}>
                <MapPin className="h-3.5 w-3.5" />{branches[i].name}
              </span>
            </button>
          ))}
          <p className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Улаанбаатар</p>
        </div>
      </section>
    </div>
  );
}

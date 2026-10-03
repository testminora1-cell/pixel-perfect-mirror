import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { products, sizes, fmt } from "@/lib/data";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/menu/$slug")({
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} gelato — Gelato Mongolia` },
      { name: "description", content: loaderData.desc },
      { property: "og:title", content: `${loaderData.name} — Gelato Mongolia` },
      { property: "og:description", content: loaderData.desc },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [],
  }),
  notFoundComponent: () => <div className="container-x py-32 text-center font-serif text-4xl">Амт олдсонгүй. <Link to="/menu" className="underline">Цэс рүү</Link></div>,
  component: Detail,
});

function Detail() {
  const p = Route.useLoaderData();
  const { add } = useCart();
  const [size, setSize] = useState("cup");
  const [qty, setQty] = useState(1);
  const mult = sizes.find((s) => s.id === size)!.mult;
  const total = p.price * mult * qty;
  const onAdd = () => { add(p.slug, size, qty); toast(`${p.name} сагсанд нэмэгдлээ`); };

  return (
    <div className="pb-32 md:pb-0">
      <section className="container-x grid gap-10 pt-6 md:grid-cols-12 md:gap-16 md:pt-12">
        <div className="md:col-span-7">
          <img src={p.image} alt={p.name} width={1024} height={1024} className="aspect-square w-full bg-vanilla object-cover" />
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[p.image, p.image, p.image, p.image].map((src, i) => (
              <img key={i} src={src} alt="" className={`aspect-square w-full object-cover ${i === 0 ? "ring-1 ring-espresso" : "opacity-60"}`} style={{ objectPosition: `${30 + i * 15}% ${40 + i * 10}%` }} />
            ))}
          </div>
        </div>
        <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
          <p className="eyebrow">{p.it}</p>
          <h1 className="mt-3 font-serif text-6xl md:text-7xl">{p.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.desc} Италийн уламжлалт аргаар бага хэмжээгээр, өдөр бүр шинээр бүтээдэг.</p>
          <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
            {[["Амт", p.category], ["Орц", p.ingredients], ["Харшил", p.allergens]].map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 py-3"><dt className="text-muted-foreground">{k}</dt><dd className="col-span-2">{v}</dd></div>
            ))}
          </dl>
          <p className="field-label mt-8">Хэмжээ</p>
          <div className="seg grid grid-cols-2 sm:grid-cols-4">
            {sizes.map((s) => (
              <button key={s.id} data-active={size === s.id} onClick={() => setSize(s.id)}>
                <span className="block font-semibold">{s.label}</span>
                <span className="block text-xs opacity-70">{s.note}</span>
              </button>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center border border-border">
              <button aria-label="Хасах" onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-12 w-12 items-center justify-center"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-semibold">{qty}</span>
              <button aria-label="Нэмэх" onClick={() => setQty(qty + 1)} className="flex h-12 w-12 items-center justify-center"><Plus className="h-4 w-4" /></button>
            </div>
            <p className="font-serif text-4xl">{fmt(total)}</p>
          </div>
          <button onClick={onAdd} className="btn-primary mt-6 hidden w-full md:flex">Сагсанд нэмэх</button>
        </div>
      </section>

      <section className="container-x py-20 md:py-28">
        <h2 className="h-section mb-10">Төстэй амтууд</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {products.filter((x) => x.slug !== p.slug).slice(0, 4).map((x) => <ProductCard key={x.slug} p={x} />)}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-[60px] z-30 border-t border-border bg-background p-3 md:hidden">
        <button onClick={onAdd} className="btn-primary w-full">Сагсанд нэмэх · {fmt(total)}</button>
      </div>
    </div>
  );
}

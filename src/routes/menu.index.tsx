import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/site/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/menu/")({
  head: () => seo("Gelato цэс", "Пистачио, шоколад, жимсний сорбет — бүх амтаа сонгоорой."),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState(categories[0]);
  const list = cat === categories[0] ? products : products.filter((p) => p.category === cat);
  return (
    <div className="pb-24">
      <section className="container-x pb-8 pt-14 md:pt-24">
        <h1 className="font-serif text-7xl italic md:text-[9rem]">Gelato</h1>
        <p className="mt-2 text-lg text-muted-foreground">Өөрийн дуртай амтаа сонгоорой.</p>
      </section>
      <div className="sticky top-[72px] z-30 border-y border-border bg-background/95 backdrop-blur">
        <div className="container-x no-scrollbar flex gap-7 overflow-x-auto">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`shrink-0 border-b-2 py-4 text-sm font-medium transition-colors ${cat === c ? "border-espresso text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>{c}</button>
          ))}
        </div>
      </div>
      <section className="container-x pt-12">
        <p className="mb-8 text-sm text-muted-foreground">{list.length} амт</p>
        {list.length ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {list.map((p) => <ProductCard key={p.slug} p={p} />)}
          </div>
        ) : (
          <p className="py-20 text-center font-serif text-3xl italic text-muted-foreground">Энэ ангилалд удахгүй шинэ амт нэмэгдэнэ.</p>
        )}
      </section>
    </div>
  );
}

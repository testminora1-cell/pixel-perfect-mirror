import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { useCart, linePrice } from "@/lib/cart";
import { fmt, sizes } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cart")({
  head: () => seo("Сагс", "Таны сонгосон gelato амтууд."),
  component: CartPage,
});

export const DELIVERY = 5000;

function CartPage() {
  const { lines, setQty, remove, subtotal } = useCart();
  if (!lines.length)
    return (
      <div className="container-x flex flex-col items-center py-32 text-center">
        <p className="eyebrow">Il carrello</p>
        <h1 className="mt-4 font-serif text-5xl md:text-6xl">Таны сагс хоосон байна</h1>
        <p className="mt-4 max-w-sm text-muted-foreground">Өнөөдрийн дуртай амтаа олоод сагсандаа нэмээрэй.</p>
        <Link to="/menu" className="btn-primary mt-10">Амтуудыг үзэх</Link>
      </div>
    );
  return (
    <div className="container-x pb-28 pt-14 md:pt-20">
      <h1 className="font-serif text-6xl">Сагс</h1>
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <ul className="divide-y divide-border border-y border-border lg:col-span-8">
          {lines.map((l, i) => (
            <li key={i} className="flex gap-5 py-6">
              <img src={l.product.image} alt={l.product.name} className="h-28 w-24 shrink-0 object-cover md:h-32 md:w-28" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl">{l.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{sizes.find((s) => s.id === l.size)?.label}</p>
                  </div>
                  <button aria-label="Устгах" onClick={() => remove(i)} className="text-muted-foreground hover:text-berry"><X className="h-4 w-4" /></button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-border">
                    <button aria-label="Хасах" onClick={() => setQty(i, l.qty - 1)} className="flex h-9 w-9 items-center justify-center"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{l.qty}</span>
                    <button aria-label="Нэмэх" onClick={() => setQty(i, l.qty + 1)} className="flex h-9 w-9 items-center justify-center"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <span className="font-semibold">{fmt(linePrice(l))}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <aside className="h-fit bg-secondary p-8 lg:col-span-4">
          <h2 className="font-serif text-3xl">Захиалгын дүн</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Дүн</dt><dd>{fmt(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Хүргэлт</dt><dd>{fmt(DELIVERY)}</dd></div>
            <div className="flex justify-between border-t border-border pt-4 text-base font-semibold"><dt>Нийт</dt><dd>{fmt(subtotal + DELIVERY)}</dd></div>
          </dl>
          <Link to="/checkout" className="btn-primary mt-8 w-full">Захиалга үргэлжлүүлэх</Link>
          <Link to="/menu" className="link-u mt-5 inline-block text-sm">← Үргэлжлүүлэн сонгох</Link>
        </aside>
      </div>
    </div>
  );
}

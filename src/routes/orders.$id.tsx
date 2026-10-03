import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { orders, orderSteps, products, fmt } from "@/lib/data";

export const Route = createFileRoute("/orders/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Захиалга ${params.id} — Gelato Mongolia` },
      { name: "description", content: "Захиалгын явцыг хянах." },
      { property: "og:title", content: `Захиалга ${params.id}` },
      { property: "og:description", content: "Захиалгын явцыг хянах." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: OrderDetail,
});

function OrderDetail() {
  const { id } = Route.useParams();
  const o = orders.find((x) => x.id === id) ?? orders[1];
  const items = [products[0], products[6]];
  return (
    <div className="container-x pb-28 pt-14 md:pt-20">
      <Link to="/orders" className="link-u text-sm text-muted-foreground">← Захиалгууд</Link>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl">Захиалга {o.id}</h1>
      <p className="mt-2 text-muted-foreground">{o.date}</p>
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <ol className="lg:col-span-5">
          {orderSteps.map((s, i) => {
            const done = i <= o.step;
            return (
              <li key={s} className="relative flex gap-5 pb-10 last:pb-0">
                {i < orderSteps.length - 1 && <span className={`absolute left-[13px] top-7 h-full w-px ${i < o.step ? "bg-pistachio" : "bg-border"}`} />}
                <span className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${done ? "border-pistachio bg-pistachio text-espresso" : "border-border bg-background"}`}>{done && <Check className="h-3.5 w-3.5" />}</span>
                <div><p className={`font-serif text-2xl ${done ? "" : "text-muted-foreground"}`}>{s}</p>{i === o.step && <p className="text-sm text-pistachio">Одоогийн төлөв</p>}</div>
              </li>
            );
          })}
        </ol>
        <div className="space-y-6 lg:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {items.map((p) => (
              <li key={p.slug} className="flex items-center gap-4 py-4"><img src={p.image} alt="" className="h-16 w-16 object-cover" /><span className="flex-1 font-serif text-xl">{p.name}</span><span className="text-sm font-semibold">{fmt(p.price)}</span></li>
            ))}
          </ul>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[["Нийт", fmt(o.total)], ["Хүргэх хаяг", "СБД, Олимпийн 19"], ["Төлбөр", "Төлөгдсөн · QPay"]].map(([k, v]) => (
              <div key={k} className="bg-background p-5"><p className="field-label">{k}</p><p className="mt-1">{v}</p></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { AccountShell, statusTone } from "@/components/site/AccountShell";
import { orders, fmt } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/orders/")({
  head: () => seo("Миний захиалгууд", "Захиалгын түүх ба төлөв."),
  component: () => (
    <AccountShell title="Миний захиалгууд">
      <div className="hidden grid-cols-5 border-b border-border pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground md:grid">
        <span>Дугаар</span><span>Огноо</span><span>Бүтээгдэхүүн</span><span>Нийт</span><span className="text-right">Төлөв</span>
      </div>
      <ul className="divide-y divide-border">
        {orders.map((o) => (
          <li key={o.id}>
            <Link to="/orders/$id" params={{ id: o.id }} className="grid grid-cols-2 gap-y-1 py-5 hover:bg-secondary/60 md:grid-cols-5 md:items-center">
              <span className="font-semibold">{o.id}</span>
              <span className="text-right text-sm text-muted-foreground md:text-left">{o.date}</span>
              <span className="text-sm">{o.items} ширхэг</span>
              <span className="text-right text-sm font-semibold md:text-left">{fmt(o.total)}</span>
              <span className="col-span-2 md:col-span-1 md:text-right"><span className={`pill ${statusTone(o.status)}`}>{o.status}</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </AccountShell>
  ),
});

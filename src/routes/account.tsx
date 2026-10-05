import { createFileRoute, Link } from "@tanstack/react-router";
import { AccountShell, statusTone } from "@/components/site/AccountShell";
import { orders, fmt } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/account")({
  head: () => seo("Миний бүртгэл", "Профайл, захиалга, хаяг, төлбөр."),
  component: Account,
});

function Account() {
  return (
    <AccountShell title="Миний бүртгэл">
      <div className="grid gap-px bg-border sm:grid-cols-3">
        {[["Нийт захиалга", "12"], ["Дуртай амт", "Pistachio"], ["Урамшууллын оноо", "1,240"]].map(([k, v]) => (
          <div key={k} className="bg-background p-6"><p className="field-label">{k}</p><p className="mt-2 font-serif text-4xl">{v}</p></div>
        ))}
      </div>
      <section className="mt-12">
        <div className="flex items-end justify-between"><h2 className="font-serif text-3xl">Сүүлийн захиалга</h2><Link to="/orders" className="link-u text-sm">Бүгд →</Link></div>
        <Link to="/orders/$id" params={{ id: orders[1]!.id }} className="mt-5 flex items-center justify-between border border-border p-5 hover:border-espresso">
          <div><p className="font-semibold">{orders[1]!.id}</p><p className="text-sm text-muted-foreground">{orders[1]!.date} · {fmt(orders[1]!.total)}</p></div>
          <span className={`pill ${statusTone(orders[1]!.status)}`}>{orders[1]!.status}</span>
        </Link>
      </section>
      <section id="address" className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="border border-border p-6"><p className="field-label">Профайл</p><p className="mt-2">Болор Бат</p><p className="text-sm text-muted-foreground">9911 2233 · bolor@mail.mn</p></div>
        <div className="border border-border p-6"><p className="field-label">Хүргэлтийн хаяг</p><p className="mt-2">Гэр</p><p className="text-sm text-muted-foreground">СБД, 1-р хороо, Олимпийн гудамж 19</p></div>
      </section>
      <section id="payments" className="mt-6 border border-border p-6"><p className="field-label">Төлбөрүүд</p><p className="mt-2 text-sm text-muted-foreground">QPay-ээр хийсэн сүүлийн төлбөр: 2026.10.02 · {fmt(30800)}</p></section>
    </AccountShell>
  );
}

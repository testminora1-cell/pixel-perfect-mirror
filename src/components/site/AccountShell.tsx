import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const items = [
  { to: "/account", label: "Профайл" },
  { to: "/orders", label: "Миний захиалгууд" },
  { to: "/account", label: "Хүргэлтийн хаяг", hash: "address" },
  { to: "/account", label: "Төлбөрүүд", hash: "payments" },
] as const;

export function AccountShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="container-x pb-28 pt-14 md:pt-20">
      <p className="eyebrow">Сайн байна уу, Болор</p>
      <h1 className="mt-3 font-serif text-5xl md:text-6xl">{title}</h1>
      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <nav className="no-scrollbar flex gap-6 overflow-x-auto border-b border-border md:col-span-3 md:flex-col md:gap-0 md:border-b-0 md:border-r">
          {items.map((it) => (
            <Link key={it.label} to={it.to} hash={"hash" in it ? it.hash : undefined} activeOptions={{ exact: true, includeHash: true }} className="shrink-0 py-3 text-sm text-muted-foreground hover:text-foreground md:border-l-2 md:border-transparent md:pl-4" activeProps={{ className: "!text-foreground md:!border-espresso font-semibold" }}>{it.label}</Link>
          ))}
          <Link to="/login" className="shrink-0 py-3 text-sm text-berry md:pl-4">Гарах</Link>
        </nav>
        <div className="md:col-span-9">{children}</div>
      </div>
    </div>
  );
}

export const statusTone = (s: string) =>
  s === "Хүргэгдсэн" ? "bg-pistachio-soft text-foreground" : s === "Цуцлагдсан" ? "bg-berry/10 text-berry" : "bg-vanilla text-foreground";

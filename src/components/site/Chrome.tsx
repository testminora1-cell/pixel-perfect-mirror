import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X, Home, IceCreamCone, Package, Instagram, Facebook } from "lucide-react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Нүүр" },
  { to: "/menu", label: "Амтууд" },
  { to: "/cart", label: "Захиалах" },
  { to: "/about", label: "Бидний тухай" },
  { to: "/branches", label: "Салбарууд" },
  { to: "/contact", label: "Холбоо барих" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex flex-col leading-none">
      <span className={`font-serif text-2xl italic tracking-tight ${light ? "text-espresso-foreground" : "text-foreground"}`}>Gelato Mongolia</span>
      <span className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] ${light ? "text-espresso-foreground/60" : "text-muted-foreground"}`}>Итали Зайрмаг</span>
    </Link>
  );
}

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="link-u text-[13px] font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button aria-label="Хайх" className="hidden h-10 w-10 items-center justify-center hover:text-pistachio md:flex"><Search className="h-[18px] w-[18px]" strokeWidth={1.5} /></button>
          <Link to="/account" aria-label="Профайл" className="hidden h-10 w-10 items-center justify-center hover:text-pistachio md:flex"><User className="h-[18px] w-[18px]" strokeWidth={1.5} /></Link>
          <Link to="/cart" aria-label="Сагс" className="relative flex h-10 w-10 items-center justify-center hover:text-pistachio">
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {count > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-berry px-1 text-[10px] font-bold text-primary-foreground">{count}</span>}
          </Link>
          <button aria-label="Цэс" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center lg:hidden"><Menu className="h-5 w-5" strokeWidth={1.5} /></button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background animate-rise">
          <div className="container-x flex h-[72px] items-center justify-between border-b border-border">
            <Logo />
            <button aria-label="Хаах" onClick={() => setOpen(false)}><X className="h-6 w-6" strokeWidth={1.5} /></button>
          </div>
          <nav className="container-x flex flex-col gap-1 py-8">
            {[...nav, { to: "/story", label: "Бидний түүх" }, { to: "/quality", label: "Чанар" }, { to: "/faq", label: "Түгээмэл асуулт" }, { to: "/login", label: "Нэвтрэх" }].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border/60 py-4 font-serif text-3xl">{n.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function BottomNav() {
  const { count } = useCart();
  const items = [
    { to: "/", label: "Нүүр", icon: Home },
    { to: "/menu", label: "Амтууд", icon: IceCreamCone },
    { to: "/cart", label: "Сагс", icon: ShoppingBag, badge: count },
    { to: "/orders", label: "Захиалга", icon: Package },
    { to: "/account", label: "Профайл", icon: User },
  ] as const;
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      {items.map((it) => (
        <Link key={it.to} to={it.to} activeOptions={{ exact: it.to === "/" }} className="relative flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium text-muted-foreground" activeProps={{ className: "text-foreground" }}>
          <it.icon className="h-5 w-5" strokeWidth={1.5} />
          {it.label}
          {"badge" in it && it.badge > 0 && <span className="absolute right-[28%] top-1.5 h-2 w-2 rounded-full bg-berry" />}
        </Link>
      ))}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso pb-24 text-espresso-foreground md:pb-0">
      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-xs font-serif text-xl italic leading-snug text-espresso-foreground/80">Италийн уламжлалаар, өдөр бүр шинээр бүтээсэн gelato.</p>
          <div className="mt-8 flex gap-3">
            {[Instagram, Facebook].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center border border-espresso-foreground/25 hover:bg-pistachio hover:text-espresso"><I className="h-4 w-4" strokeWidth={1.5} /></a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso-foreground/50">Цэс</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/menu" className="link-u">Амтууд</Link></li>
            <li><Link to="/about" className="link-u">Бидний тухай</Link></li>
            <li><Link to="/branches" className="link-u">Салбарууд</Link></li>
            <li><Link to="/contact" className="link-u">Холбоо барих</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso-foreground/50">Брэнд</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/story" className="link-u">Бидний түүх</Link></li>
            <li><Link to="/quality" className="link-u">Чанар & стандарт</Link></li>
            <li><Link to="/faq" className="link-u">Түгээмэл асуулт</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso-foreground/50">Холбоо барих</p>
          <ul className="space-y-3 text-sm text-espresso-foreground/85">
            <li>+976 7700 1000</li>
            <li>hello@gelato.mn</li>
            <li>Олимпийн гудамж 19, Улаанбаатар</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-espresso-foreground/10">
        <div className="container-x flex flex-col justify-between gap-3 py-6 text-xs text-espresso-foreground/50 md:flex-row">
          <span>© 2026 Gelato Mongolia. Бүх эрх хуулиар хамгаалагдсан.</span>
          <span className="flex gap-6"><a href="#">Үйлчилгээний нөхцөл</a><a href="#">Нууцлалын бодлого</a></span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="container-x pb-10 pt-14 md:pb-16 md:pt-24">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="display mt-4 animate-rise">{title}</h1>
      {sub && <p className="mt-5 max-w-xl text-lg text-muted-foreground animate-rise">{sub}</p>}
    </section>
  );
}

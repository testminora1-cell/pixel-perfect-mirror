import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";
import { fmt, type Product } from "@/lib/data";

export function ProductCard({ p, large }: { p: Product; large?: boolean }) {
  const { add } = useCart();
  return (
    <article className="group">
      <Link to="/menu/$slug" params={{ slug: p.slug }} className="block overflow-hidden bg-vanilla">
        <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${large ? "aspect-[4/5]" : "aspect-square"}`} />
      </Link>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{p.it}</p>
          <Link to="/menu/$slug" params={{ slug: p.slug }}><h3 className="mt-1 font-serif text-2xl md:text-[1.7rem]">{p.name}</h3></Link>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
          <p className="mt-2 text-sm font-semibold">{fmt(p.price)}</p>
        </div>
        <button
          aria-label={`${p.name} сагсанд нэмэх`}
          onClick={() => { add(p.slug); toast(`${p.name} сагсанд нэмэгдлээ`); }}
          className="mt-5 flex h-11 w-11 shrink-0 items-center justify-center border border-foreground/30 transition-colors group-hover:border-espresso group-hover:bg-espresso group-hover:text-espresso-foreground hover:!bg-pistachio hover:!text-espresso"
        >
          <Plus className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}

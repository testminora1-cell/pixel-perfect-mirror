import { createContext, useContext, useState, type ReactNode } from "react";
import { products, sizes, type Product } from "./data";

export type CartLine = { product: Product; size: string; qty: number };

type Ctx = {
  lines: CartLine[];
  add: (slug: string, size?: string, qty?: number) => void;
  setQty: (i: number, qty: number) => void;
  remove: (i: number) => void;
  count: number;
  subtotal: number;
};

const CartCtx = createContext<Ctx | null>(null);

export const linePrice = (l: CartLine) =>
  l.product.price * (sizes.find((s) => s.id === l.size)?.mult ?? 1) * l.qty;

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => [
    { product: products[0], size: "cup", qty: 2 },
    { product: products[6], size: "500", qty: 1 },
  ]);
  const add = (slug: string, size = "cup", qty = 1) =>
    setLines((ls) => {
      const p = products.find((x) => x.slug === slug)!;
      const i = ls.findIndex((l) => l.product.slug === slug && l.size === size);
      if (i >= 0) return ls.map((l, j) => (j === i ? { ...l, qty: l.qty + qty } : l));
      return [...ls, { product: p, size, qty }];
    });
  const setQty = (i: number, qty: number) =>
    setLines((ls) => (qty <= 0 ? ls.filter((_, j) => j !== i) : ls.map((l, j) => (j === i ? { ...l, qty } : l))));
  const remove = (i: number) => setLines((ls) => ls.filter((_, j) => j !== i));
  const count = lines.reduce((a, l) => a + l.qty, 0);
  const subtotal = lines.reduce((a, l) => a + linePrice(l), 0);
  return <CartCtx.Provider value={{ lines, add, setQty, remove, count, subtotal }}>{children}</CartCtx.Provider>;
}

export function useCart() {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}

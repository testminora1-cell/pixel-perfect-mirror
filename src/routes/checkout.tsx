import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, QrCode } from "lucide-react";
import { useCart, linePrice } from "@/lib/cart";
import { fmt, sizes } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/checkout")({
  head: () => seo("Захиалга баталгаажуулах", "Хүргэлтийн мэдээлэл, захиалга шалгах, төлбөр."),
  component: Checkout,
});

const steps = ["Хүргэлтийн мэдээлэл", "Захиалга шалгах", "Төлбөр"];

function Checkout() {
  const [step, setStep] = useState(0);
  const { lines, subtotal } = useCart();
  const total = subtotal + 5000;
  return (
    <div className="container-x pb-28 pt-14 md:pt-20">
      <h1 className="font-serif text-5xl md:text-6xl">Захиалга</h1>
      <ol className="mt-10 grid grid-cols-3 border-t border-border">
        {steps.map((s, i) => (
          <li key={s} className={`-mt-px border-t-2 pt-4 ${i <= step ? "border-espresso" : "border-transparent"}`}>
            <span className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>
              <span className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${i < step ? "border-pistachio bg-pistachio text-espresso" : i === step ? "border-espresso" : "border-border"}`}>{i < step ? <Check className="h-3 w-3" /> : i + 1}</span>
              <span className="hidden sm:inline">{s}</span>
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {step === 0 && (
            <form className="grid gap-8 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setStep(1); }}>
              <label className="sm:col-span-1"><span className="field-label">Нэр</span><input className="field" placeholder="Болор" /></label>
              <label><span className="field-label">Утас</span><input className="field" placeholder="9911 2233" /></label>
              <label className="sm:col-span-2"><span className="field-label">И-мэйл</span><input className="field" placeholder="bolor@mail.mn" /></label>
              <label className="sm:col-span-2"><span className="field-label">Хүргэлтийн хаяг</span><input className="field" placeholder="Дүүрэг, хороо, байр, тоот" /></label>
              <label className="sm:col-span-2"><span className="field-label">Нэмэлт тэмдэглэл</span><textarea rows={3} className="field h-auto py-3" placeholder="Орцны код, хүргэх цаг..." /></label>
              <button className="btn-primary sm:col-span-2 sm:w-fit">Үргэлжлүүлэх</button>
            </form>
          )}
          {step === 1 && (
            <div>
              <ul className="divide-y divide-border border-y border-border">
                {lines.map((l, i) => (
                  <li key={i} className="flex items-center gap-4 py-4">
                    <img src={l.product.image} alt="" className="h-16 w-16 object-cover" />
                    <div className="flex-1"><p className="font-serif text-xl">{l.product.name}</p><p className="text-xs text-muted-foreground">{sizes.find((s) => s.id === l.size)?.label} × {l.qty}</p></div>
                    <span className="text-sm font-semibold">{fmt(linePrice(l))}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-secondary p-6 text-sm"><p className="field-label">Хүргэх хаяг</p><p>Болор · 9911 2233</p><p className="text-muted-foreground">СБД, 1-р хороо, Олимпийн гудамж 19</p></div>
              <div className="mt-8 flex gap-3"><button onClick={() => setStep(0)} className="btn-outline">Буцах</button><button onClick={() => setStep(2)} className="btn-primary">Төлбөр рүү</button></div>
            </div>
          )}
          {step === 2 && (
            <div className="border border-border p-8 text-center md:p-12">
              <p className="eyebrow">QPay</p>
              <h2 className="mt-3 font-serif text-4xl">QR кодоор төлөх</h2>
              <div className="mx-auto mt-8 flex aspect-square w-56 flex-col items-center justify-center gap-3 border-2 border-dashed border-input bg-muted text-muted-foreground">
                <QrCode className="h-14 w-14" strokeWidth={1} />
                <span className="text-xs uppercase tracking-[0.14em]">QR код энд гарна</span>
              </div>
              <p className="mt-6 font-serif text-3xl">{fmt(total)}</p>
              <p className="mt-2 text-sm text-muted-foreground">Банкны аппаараа QR кодыг уншуулна уу.</p>
              <div className="mt-8 flex justify-center gap-3"><button onClick={() => setStep(1)} className="btn-outline">Буцах</button><Link to="/orders/$id" params={{ id: "GM-24117" }} className="btn-pistachio">Төлбөр шалгах</Link></div>
            </div>
          )}
        </div>
        <aside className="h-fit bg-secondary p-8 lg:col-span-5">
          <h2 className="font-serif text-3xl">Захиалгын дүн</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {lines.map((l, i) => <li key={i} className="flex justify-between"><span>{l.product.name} × {l.qty}</span><span>{fmt(linePrice(l))}</span></li>)}
          </ul>
          <dl className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><dt className="text-muted-foreground">Хүргэлт</dt><dd>{fmt(5000)}</dd></div>
            <div className="flex justify-between text-base font-semibold"><dt>Нийт</dt><dd>{fmt(total)}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

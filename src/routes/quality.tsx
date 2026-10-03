import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2 } from "lucide-react";
import { images } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/quality")({
  head: () => seo("Чанар & стандарт", "Түүхий эд, үйлдвэрлэл, технологи, эрүүл ахуй ба стандарт."),
  component: Quality,
});

const pillars = [
  ["Түүхий эд", "Италийн пистачио, хушга, Мадагаскарын ваниль, шинэхэн жимс — эх үүсвэр бүрийг шалгадаг."],
  ["Үйлдвэрлэл", "Өдөр бүр бага хэмжээгээр, уламжлалт аргаар бэлтгэнэ."],
  ["Технологи", "Италийн мэргэжлийн gelato машин, температурын нарийн хяналт."],
  ["Чанар", "Багц бүрийн амт, бүтцийг мастер биечлэн шалгана."],
  ["Эрүүл ахуй", "Өдөр тутмын ариутгал, хамгаалалтын стандарт журам."],
  ["Стандарт", "Хүнсний аюулгүй байдлын шаардлагыг бүрэн мөрдөнө."],
];

function Quality() {
  return (
    <>
      <section className="grid lg:grid-cols-2">
        <div className="container-x flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
          <p className="eyebrow">Qualità</p>
          <h1 className="display mt-5">Чанар бол бидний <em>үндэс.</em></h1>
        </div>
        <img src={images.craft} alt="" className="h-[50vh] w-full object-cover lg:h-[80vh]" />
      </section>
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-px bg-border md:grid-cols-3">
          {pillars.map(([t, d], i) => (
            <div key={t} className="bg-background p-8 md:p-10">
              <span className="font-serif text-lg italic text-pistachio">0{i + 1}</span>
              <h2 className="mt-4 text-3xl">{t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x">
          <h2 className="h-section">Гэрчилгээ</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">Баталгаажсан гэрчилгээнүүд энд байршина.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex aspect-[3/4] flex-col items-center justify-center gap-3 border border-dashed border-input bg-background text-muted-foreground">
                <FileCheck2 className="h-8 w-8" strokeWidth={1} />
                <span className="text-xs uppercase tracking-[0.14em]">Гэрчилгээ</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

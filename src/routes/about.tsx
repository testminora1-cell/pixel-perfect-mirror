import { createFileRoute, Link } from "@tanstack/react-router";
import { images, products } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("Бидний тухай", "Италийн уламжлал, Монгол дахь gelato, чанар ба бидний хүмүүс."),
  component: About,
});

const chapters = [
  { k: "Үүсэл", t: "Нэг аяга gelato-гаас эхэлсэн", d: "Флоренцын гудамжинд амссан нэг аяга пистачио gelato бидний замыг өөрчилсөн. Тэр мэдрэмжийг Улаанбаатарт авчрахаар шийдсэн юм.", img: images.hero },
  { k: "Италийн уламжлал", t: "Мастеруудаас суралцсан", d: "Болонья дахь gelato академид суралцаж, уламжлалт жор, тэнцвэр, температурын нарийн ухааныг эзэмшсэн.", img: images.craft },
  { k: "Монгол дахь Gelato", t: "Монголын сүү, Италийн арга", d: "Орон нутгийн шинэхэн сүүг Италийн шилдэг түүхий эдтэй хослуулж, өөрийн гэсэн амтыг бүтээдэг.", img: images.shop },
];

function About() {
  return (
    <>
      <section className="relative">
        <img src={images.shop} alt="Gelato Mongolia салбар" className="h-[70vh] w-full object-cover" />
        <div className="container-x -mt-24 relative">
          <div className="max-w-2xl bg-background p-8 md:p-12">
            <p className="eyebrow">Chi siamo</p>
            <h1 className="display mt-4">Бидний түүх</h1>
          </div>
        </div>
      </section>
      {chapters.map((c, i) => (
        <section key={c.k} className="container-x grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className={`md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}><img src={c.img} alt="" loading="lazy" className="aspect-[4/5] w-full object-cover md:aspect-[5/6]" /></div>
          <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
            <p className="eyebrow">0{i + 1} — {c.k}</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">{c.t}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.d}</p>
          </div>
        </section>
      ))}
      <section className="bg-espresso py-24 text-espresso-foreground">
        <div className="container-x text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso-foreground/60">04 — Чанар</p>
          <p className="mx-auto mt-6 max-w-3xl font-serif text-4xl italic leading-tight md:text-6xl">“Бид амтыг хэзээ ч хялбарчлахгүй.”</p>
          <Link to="/quality" className="btn-pistachio mt-10">Чанарын стандарт</Link>
        </div>
      </section>
      <section className="container-x py-20 md:py-28">
        <p className="eyebrow">05 — Бидний хүмүүс</p>
        <h2 className="h-section mt-3">Гар бүрийн ард хүн бий</h2>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {["Мастер gelatiere", "Үйлдвэрлэлийн ахлагч", "Салбарын менежер", "Barista"].map((r, i) => (
            <div key={r}><img src={products[i + 3]!.image} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover grayscale-[30%]" /><p className="mt-3 font-serif text-xl">{r}</p><p className="text-xs text-muted-foreground">Нэр удахгүй</p></div>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { products, branches, images } from "@/lib/data";
import { ProductCard } from "@/components/site/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Жинхэнэ Италийн амт", "Италийн уламжлалаар өдөр бүр шинээр бүтээсэн кремлэг gelato. Онлайнаар захиалж, салбараас аваарай."),
  component: Home,
});

const features = [
  { n: "01", t: "Жинхэнэ Italian-style", d: "Италийн мастеруудын жор, аргачлалаар." },
  { n: "02", t: "Чанартай түүхий эд", d: "Bronte пистачио, Piemonte хушга, шинэхэн жимс." },
  { n: "03", t: "Өдөр бүр шинэхэн", d: "Бага хэмжээгээр, өглөө бүр шинээр хийнэ." },
  { n: "04", t: "Зөөлөн, кремлэг бүтэц", d: "Агаар бага, амт ихтэй — жинхэнэ gelato." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-12">
          <div className="container-x order-2 flex flex-col justify-center py-14 lg:order-1 lg:col-span-5 lg:py-20 lg:pr-0">
            <p className="eyebrow animate-rise">Gelato artigianale · Ulaanbaatar</p>
            <h1 className="display mt-6 animate-rise">Жинхэнэ Италийн амтыг <em className="text-pistachio">Монголд.</em></h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground animate-rise">Өдөр бүрийн аз жаргалыг зөөлөн, кремлэг Italian-style gelato-гоор.</p>
            <div className="mt-10 flex flex-wrap gap-3 animate-rise">
              <Link to="/menu" className="btn-primary">Захиалах <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/menu" className="btn-outline">Амтуудыг үзэх</Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <img src={images.hero} alt="Пистачио gelato" width={1600} height={1200} className="h-[58vh] w-full object-cover lg:h-full" />
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Gusti del giorno</p>
            <h2 className="h-section mt-3">Өнөөдрийн дуртай амт</h2>
          </div>
          <Link to="/menu" className="link-u hidden text-sm font-semibold md:inline">Бүх амт →</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {products.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5 md:col-start-1">
            <img src={images.craft} alt="Gelato бүтээж буй мастер" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow">La nostra storia</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] md:text-6xl">Италийн уламжлал. <br /><em>Монголын дуртай амт.</em></h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">Флоренцын жижиг гелатериагаас санаа авч, бид Улаанбаатарт жинхэнэ gelato-г авчирсан. Сүүнээс эхлээд самар хүртэл — түүхий эд бүрийг анхааралтай сонгож, өдөр бүр гараар бүтээдэг.</p>
            <Link to="/story" className="btn-outline mt-10">Бидний түүх</Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container-x py-20 md:py-28">
        <h2 className="h-section max-w-2xl">Яагаад <em>gelato</em> гэж?</h2>
        <div className="mt-14 grid border-t border-border md:grid-cols-4">
          {features.map((f) => (
            <div key={f.n} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <span className="font-serif text-lg italic text-pistachio">{f.n}</span>
              <h3 className="mt-4 text-2xl">{f.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular carousel */}
      <section className="py-20 md:py-24">
        <div className="container-x mb-10 flex items-end justify-between">
          <h2 className="h-section">Хамгийн их захиалдаг</h2>
          <span className="hidden text-sm text-muted-foreground md:block">Гүйлгэж үзнэ үү →</span>
        </div>
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 md:px-10 lg:px-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
          {[...products].reverse().map((p) => (
            <div key={p.slug} className="w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-[340px]">
              <ProductCard p={p} large />
            </div>
          ))}
        </div>
      </section>

      {/* Branches */}
      <section className="bg-vanilla py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between">
            <div><p className="eyebrow">Le nostre gelaterie</p><h2 className="h-section mt-3">Салбарууд</h2></div>
            <Link to="/branches" className="link-u hidden text-sm font-semibold md:inline">Бүгдийг харах →</Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {branches.map((b) => (
              <Link to="/branches" key={b.name} className="group block">
                <div className="overflow-hidden"><img src={b.image} alt={b.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div>
                <h3 className="mt-5 text-3xl">{b.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.address}</p>
                <p className="mt-1 text-sm">{b.hours}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.14em]">Салбар харах <ArrowUpRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-10 text-center">
          <p className="eyebrow">@gelato.mongolia</p>
          <h2 className="h-section mt-3"><em>Momenti</em> dolci</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <img src={images.shop} alt="" loading="lazy" className="col-span-2 aspect-[4/3] h-full w-full object-cover md:row-span-2 md:aspect-auto" />
          {[products[2], products[5], products[7], products[1]].map((p) => (
            <img key={p.slug} src={p.image} alt={p.name} loading="lazy" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/story")({
  head: () => seo("Бидний түүх", "Флоренцаас Улаанбаатар хүртэлх Gelato Mongolia-гийн аялал."),
  component: Story,
});

const timeline = [
  ["2019", "Флоренц", "Анхны санаа төрсөн нь."],
  ["2021", "Болонья", "Gelato академид суралцсан."],
  ["2023", "Улаанбаатар", "Анхны салбар нээгдсэн."],
  ["2026", "Өнөөдөр", "Гурван салбар, 40+ амт."],
];

function Story() {
  return (
    <>
      <section className="container-x pb-16 pt-14 md:pt-24">
        <p className="eyebrow">La nostra storia</p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-[1.02] md:text-8xl">Флоренцаас <em className="text-pistachio">Улаанбаатар</em> хүртэл.</h1>
      </section>
      <img src={images.craft} alt="" className="h-[60vh] w-full object-cover" />
      <section className="container-x grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <p className="font-serif text-3xl leading-snug md:col-span-5 md:text-4xl"><em>Gelato</em> бол зүгээр нэг амттан биш — энэ бол өдөр тутмын жижиг баяр.</p>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
          <p>Бид жижиг багаас эхэлсэн. Италийн гэр бүлийн gelateria-уудаар аялж, мастеруудын гарыг ажиглан, амт бүрийн тэнцвэрийг суралцсан.</p>
          <p>Өнөөдөр ч бид мөн л бага хэмжээгээр, өглөө бүр шинээр хийдэг. Учир нь жинхэнэ gelato хэзээ ч удаан хадгалагддаггүй.</p>
        </div>
      </section>
      <section className="border-t border-border">
        <div className="container-x grid md:grid-cols-4">
          {timeline.map(([y, p, d]) => (
            <div key={y} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
              <p className="font-serif text-6xl italic text-pistachio">{y}</p>
              <p className="mt-4 font-semibold">{p}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

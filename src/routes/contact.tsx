import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHero } from "@/components/site/Chrome";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Холбоо барих", "Gelato Mongolia-тай холбогдох утас, и-мэйл, хаяг."),
  component: Contact,
});

function Contact() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Contatti" title="Холбоо барих" sub="Асуулт, санал, захиалгат gelato — бидэнтэй холбогдоорой." />
      <section className="container-x grid gap-16 md:grid-cols-12">
        <div className="space-y-10 md:col-span-5">
          {[["Утас", "+976 7700 1000"], ["И-мэйл", "hello@gelato.mn"], ["Хаяг", "Олимпийн гудамж 19, Сүхбаатар дүүрэг, Улаанбаатар"], ["Сошиал", "Instagram · Facebook"]].map(([k, v]) => (
            <div key={k} className="border-t border-border pt-5"><p className="field-label">{k}</p><p className="mt-2 font-serif text-3xl">{v}</p></div>
          ))}
        </div>
        <form className="grid gap-8 bg-secondary p-8 md:col-span-6 md:col-start-7 md:p-12 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); toast("Мессеж илгээгдлээ. Баярлалаа!"); }}>
          <label><span className="field-label">Нэр</span><input className="field" /></label>
          <label><span className="field-label">Утас</span><input className="field" /></label>
          <label className="sm:col-span-2"><span className="field-label">И-мэйл</span><input className="field" /></label>
          <label className="sm:col-span-2"><span className="field-label">Мессеж</span><textarea rows={4} className="field h-auto py-3" /></label>
          <button className="btn-primary sm:col-span-2 sm:w-fit">Илгээх</button>
        </form>
      </section>
    </div>
  );
}

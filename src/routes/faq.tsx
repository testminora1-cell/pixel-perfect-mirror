import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero } from "@/components/site/Chrome";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("Түгээмэл асуулт", "Захиалга, хүргэлт, төлбөр, орцын талаарх түгээмэл асуултууд."),
  component: Faq,
});

const qa = [
  ["Gelato болон зайрмаг юугаараа ялгаатай вэ?", "Gelato нь цөцгий бага, агаар бага агуулдаг тул илүү нягт, амт нь илүү тод байдаг."],
  ["Хүргэлт хэр удаан үргэлжлэх вэ?", "Улаанбаатар хотод ихэвчлэн 45–90 минутад хүргэнэ."],
  ["Ямар төлбөрийн хэлбэр байдаг вэ?", "QPay-ээр болон банкны аппаар QR код уншуулж төлнө."],
  ["Сүүгүй амт байдаг уу?", "Тийм, жимсний сорбетууд (гүзээлзгэнэ, нимбэг, манго) сүүгүй."],
  ["Gelato-г хэр удаан хадгалах вэ?", "-18°C-д 2 долоо хоног хүртэл. Хамгийн сайхан нь — шууд идэх."],
];

function Faq() {
  return (
    <div className="pb-24">
      <PageHero eyebrow="Domande" title="Түгээмэл асуулт" />
      <section className="container-x max-w-3xl md:ml-[max(2.5rem,calc((100vw-1320px)/2+2.5rem))]">
        <Accordion type="single" collapsible className="border-t border-border">
          {qa.map(([q, a], i) => (
            <AccordionItem key={i} value={`q${i}`}>
              <AccordionTrigger className="py-6 text-left font-serif text-2xl hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

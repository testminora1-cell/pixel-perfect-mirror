import hero from "@/assets/hero.jpg";
import chocolate from "@/assets/chocolate.jpg";
import strawberry from "@/assets/strawberry.jpg";
import vanilla from "@/assets/vanilla.jpg";
import mango from "@/assets/mango.jpg";
import coffee from "@/assets/coffee.jpg";
import hazelnut from "@/assets/hazelnut.jpg";
import lemon from "@/assets/lemon.jpg";
import shop from "@/assets/shop.jpg";
import craft from "@/assets/craft.jpg";

export const images = { hero, shop, craft };

export type Product = {
  slug: string;
  name: string;
  it: string;
  desc: string;
  price: number;
  image: string;
  category: string;
  ingredients: string;
  allergens: string;
};

export const categories = ["Бүх амт", "Шоколад", "Жимс", "Самар", "Кофе", "Сонгодог", "Онцгой", "Улирлын"];

export const products: Product[] = [
  { slug: "pistachio", name: "Pistachio", it: "Pistacchio di Bronte", desc: "Шарсан пистачио, зөөлөн кремлэг бүтэц.", price: 12900, image: hero, category: "Самар", ingredients: "Сүү, цөцгий, пистачио, элсэн чихэр", allergens: "Сүү, самар" },
  { slug: "chocolate", name: "Chocolate", it: "Cioccolato Fondente", desc: "70% хар шоколадын гүн амт.", price: 11900, image: chocolate, category: "Шоколад", ingredients: "Сүү, какао, хар шоколад, элсэн чихэр", allergens: "Сүү, шар буурцаг" },
  { slug: "strawberry", name: "Strawberry", it: "Fragola", desc: "Шинэхэн гүзээлзгэнэтэй жимсний сорбет.", price: 10900, image: strawberry, category: "Жимс", ingredients: "Гүзээлзгэнэ, ус, элсэн чихэр, нимбэг", allergens: "—" },
  { slug: "vanilla", name: "Vanilla", it: "Fior di Vaniglia", desc: "Мадагаскарын ванилийн сонгодог амт.", price: 10900, image: vanilla, category: "Сонгодог", ingredients: "Сүү, цөцгий, ванилийн үр, элсэн чихэр", allergens: "Сүү" },
  { slug: "mango", name: "Mango", it: "Mango Alphonso", desc: "Халуун орны боловсорсон манго.", price: 11500, image: mango, category: "Улирлын", ingredients: "Манго, ус, элсэн чихэр", allergens: "—" },
  { slug: "coffee", name: "Coffee", it: "Caffè Espresso", desc: "Италийн эспрессогийн зөөлөн гашуун амт.", price: 11900, image: coffee, category: "Кофе", ingredients: "Сүү, цөцгий, эспрессо, элсэн чихэр", allergens: "Сүү" },
  { slug: "hazelnut", name: "Hazelnut", it: "Nocciola Piemonte", desc: "Пьемонтын шарсан хушга.", price: 12900, image: hazelnut, category: "Онцгой", ingredients: "Сүү, цөцгий, хушга, элсэн чихэр", allergens: "Сүү, самар" },
  { slug: "lemon", name: "Lemon", it: "Limone di Amalfi", desc: "Амальфийн нимбэгний сэргэг сорбет.", price: 10500, image: lemon, category: "Жимс", ingredients: "Нимбэг, ус, элсэн чихэр", allergens: "—" },
];

export const sizes = [
  { id: "cup", label: "Cup", note: "1 scoop", mult: 1 },
  { id: "cone", label: "Cone", note: "1 scoop", mult: 1.05 },
  { id: "500", label: "500 ml", note: "Гэрт", mult: 2.6 },
  { id: "1l", label: "1 L", note: "Гэр бүл", mult: 4.8 },
];

export const branches = [
  { name: "Шангри-Ла", address: "Олимпийн гудамж 19, Сүхбаатар дүүрэг", hours: "10:00 – 22:00", phone: "7700 1001", image: shop },
  { name: "Зайсан", address: "Зайсан Хилл, Хан-Уул дүүрэг", hours: "11:00 – 23:00", phone: "7700 1002", image: craft },
  { name: "Сансар", address: "Токиогийн гудамж 4, Баянзүрх дүүрэг", hours: "10:00 – 21:00", phone: "7700 1003", image: hero },
];

export const orders = [
  { id: "GM-24081", date: "2026.09.28", items: 3, total: 41700, status: "Хүргэгдсэн", step: 4 },
  { id: "GM-24117", date: "2026.10.02", items: 2, total: 25800, status: "Бэлтгэж байна", step: 2 },
  { id: "GM-23990", date: "2026.09.14", items: 1, total: 52000, status: "Хүргэгдсэн", step: 4 },
];

export const orderSteps = ["Захиалга хүлээн авсан", "Төлбөр баталгаажсан", "Бэлтгэж байна", "Хүргэлтэнд гарсан", "Хүргэгдсэн"];

export const fmt = (n: number) => `₮${Math.round(n).toLocaleString("en-US")}`;

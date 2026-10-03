import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/site/AuthShell";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  head: () => seo("Нэвтрэх", "Gelato Mongolia бүртгэлдээ нэвтрэх."),
  component: () => (
    <AuthShell title="Тавтай морил" sub="Бүртгэлдээ нэвтэрч захиалгаа хянаарай.">
      <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
        <label className="block"><span className="field-label">И-мэйл эсвэл утас</span><input className="field" /></label>
        <label className="block"><span className="field-label">Нууц үг</span><input type="password" className="field" /></label>
        <div className="text-right"><a href="#" className="link-u text-sm text-muted-foreground">Нууц үг мартсан?</a></div>
        <Link to="/account" className="btn-primary w-full">Нэвтрэх</Link>
        <p className="text-center text-sm text-muted-foreground">Бүртгэл байхгүй юу? <Link to="/register" className="link-u font-semibold text-foreground">Бүртгүүлэх</Link></p>
      </form>
    </AuthShell>
  ),
});

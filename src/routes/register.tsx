import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthShell } from "@/components/site/AuthShell";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/register")({
  head: () => seo("Бүртгүүлэх", "Gelato Mongolia-д шинээр бүртгүүлэх."),
  component: () => (
    <AuthShell title="Бүртгүүлэх" sub="Захиалгаа хурдан хийж, урамшуулал аваарай.">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {["Нэр", "Утас", "И-мэйл"].map((l) => <label key={l} className="block"><span className="field-label">{l}</span><input className="field" /></label>)}
        <label className="block"><span className="field-label">Нууц үг</span><input type="password" className="field" /></label>
        <label className="block"><span className="field-label">Нууц үг давтах</span><input type="password" className="field" /></label>
        <Link to="/account" className="btn-primary w-full">Бүртгүүлэх</Link>
        <p className="text-center text-sm text-muted-foreground">Бүртгэлтэй юу? <Link to="/login" className="link-u font-semibold text-foreground">Нэвтрэх</Link></p>
      </form>
    </AuthShell>
  ),
});

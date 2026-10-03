import type { ReactNode } from "react";
import { images } from "@/lib/data";

export function AuthShell({ title, sub, children }: { title: string; sub: string; children: ReactNode }) {
  return (
    <div className="grid lg:min-h-[calc(100vh-72px)] lg:grid-cols-2">
      <img src={images.shop} alt="" className="hidden h-full w-full object-cover lg:block" />
      <div className="flex items-center justify-center px-5 py-16 md:py-24">
        <div className="w-full max-w-sm">
          <h1 className="font-serif text-5xl">{title}</h1>
          <p className="mt-3 text-muted-foreground">{sub}</p>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}

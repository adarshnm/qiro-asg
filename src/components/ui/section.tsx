import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h2 className="text-heading-text text-2xl font-semibold">{title}</h2>
      <div className="w-full">{children}</div>
    </section>
  );
}

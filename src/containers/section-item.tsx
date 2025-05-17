import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

type Props = {
  title: string;
  className?: ClassValue;
};

function SectionItem({
  title,
  className,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="w-full">{children}</div>
    </section>
  );
}

export default SectionItem;

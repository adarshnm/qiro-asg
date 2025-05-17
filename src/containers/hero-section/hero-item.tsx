import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React from "react";

type HeroItemProps = {
  title: string;
  value: string;
  className?: ClassValue;
};
function HeroItem({ title, value, className }: HeroItemProps) {
  return (
    <div
      className={cn(
        "flex h-[80px] min-w-[162px] flex-col gap-1 rounded-[18px] bg-[#fefeff]/10 px-[18px] py-2",
        className,
      )}
    >
      <p className="text-sm text-white">{title}</p>
      <p className="text-[28px] font-medium text-white">{value}</p>
    </div>
  );
}

export default HeroItem;

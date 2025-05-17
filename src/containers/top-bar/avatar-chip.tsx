import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarChipProps {
  initials: string;
  className?: string;
}

export function AvatarChip({ initials, className }: AvatarChipProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-[#6C76F8] text-white text-base font-bold tracking-widest",
        className
      )}
    >
      {initials}
    </div>
  );
}

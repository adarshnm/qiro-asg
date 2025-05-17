import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BellButtonProps {
  className?: string;
  onClick?: () => void;
}

export function BellButton({ className, onClick }: BellButtonProps) {
  return (
    <button
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full border",
        className,
      )}
      onClick={onClick}
    >
      <Image
        src="/figma-images/bell-icon.svg"
        alt="Notifications"
        width={16}
        height={20}
      />
    </button>
  );
}

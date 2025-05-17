import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AddressButtonProps {
  address: string;
  className?: string;
  onClick?: () => void;
}

export function AddressButton({
  address,
  className,
  onClick,
}: AddressButtonProps) {
  const formatAddress = (address: string) => {
    if (!address) return "";
    if (address.length < 10) return address;

    return `${address.slice(0, 4)}....${address.slice(-4)}`;
  };

  return (
    <Button
      variant="outline"
      className={cn(
        "h-10 rounded-full border px-6 py-2.5 text-[#49454F]",
        className,
      )}
      onClick={onClick}
    >
      {formatAddress(address)}
    </Button>
  );
}

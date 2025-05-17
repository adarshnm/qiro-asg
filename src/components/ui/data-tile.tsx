import { cn } from "@/lib/utils";
import Image from "next/image";

export type DataTileProps = {
  label: string;
  value: string;
  infoTooltip?: string;
  className?: string;
  valueClassName?: string;
  tileClassName?: string;
};

export function DataTile({
  label,
  value,
  infoTooltip,
  className,
  valueClassName,
}: DataTileProps) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col gap-3 rounded-[18px] p-7",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-1.5">
        <span className="text-sm font-normal text-[#3D3D3D]">{label}</span>
        {infoTooltip && (
          <span title={infoTooltip}>
            <Image
              src="/figma-images/info-icon.svg"
              alt="Info"
              width={16}
              height={16}
            />
          </span>
        )}
      </div>
      <span
        className={cn("text-2xl font-medium text-[#090A0B]", valueClassName)}
      >
        {value}
      </span>
    </div>
  );
}

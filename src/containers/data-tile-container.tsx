import { DataTile, DataTileProps } from "@/components/ui/data-tile"
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"
import React from "react"

type Props = {
  className?: ClassValue
  items: DataTileProps[]
  tileClassName?: ClassValue
  valueClassName?: string
}

function DataTileContainer({
  items,
  className,
  tileClassName,
  valueClassName,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-row gap-4 rounded-[18px] border border-[#e4e4e4]",
        className,
      )}
    >
      {items.map((item, index) => (
        <DataTile
          key={item.label}
          {...item}
          className={cn(
            "flex-1",
            index === items.length - 1
              ? ""
              : "rounded-r-none border-r border-r-[#e4e4e4]",
            tileClassName,
          )}
          valueClassName={cn(valueClassName)}
        />
      ))}
    </div>
  )
}

export default DataTileContainer

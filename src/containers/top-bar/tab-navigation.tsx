"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import JoinLeftIcon from "@/icons/join-left"
import JoinInnerIcon from "@/icons/join-inner"

export interface TabItem {
  label: string
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
  isActive?: boolean
}

interface TabNavigationProps {
  onTabChange?: (index: number) => void
  className?: string
}

const tabs: TabItem[] = [
  {
    label: "Pools",
    Icon: JoinLeftIcon,
    isActive: true,
  },
  {
    label: "Position",
    Icon: JoinInnerIcon,
  },
]

export function TabNavigation({ onTabChange, className }: TabNavigationProps) {
  const [activeTab, setActiveTab] = React.useState(
    tabs.findIndex((tab) => tab.isActive) || 0,
  )

  const handleTabClick = (index: number) => {
    setActiveTab(index)
    onTabChange?.(index)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={cn(
              "relative flex cursor-pointer items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all",
              activeTab === index
                ? "font-semibold text-[#1D1B20]"
                : "font-medium text-[#938B9E]",
            )}
          >
            {
              <tab.Icon
                className="h-6 w-6"
                color={
                  activeTab === index
                    ? "var(--color-primary)"
                    : "var(--muted-foreground)"
                }
              />
            }
            <span>{tab.label}</span>
            {activeTab === index && (
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#732EFE]" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

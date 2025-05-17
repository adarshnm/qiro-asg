import * as React from "react"
import { cn } from "@/lib/utils"
import { QiroLogo } from "./qiro-logo"
import { TabNavigation } from "./tab-navigation"
import { BellButton } from "./bell-button"
import { AddressButton } from "./address-button"
import { AvatarChip } from "./avatar-chip"

interface TopAppBarProps {
  className?: string
  walletAddress?: string
  userInitials?: string
}

export function TopAppBar({
  className,
  walletAddress = "0x48ce....ht56",
  userInitials = "TH",
}: TopAppBarProps) {
  return (
    <header className={cn("flex w-full flex-col bg-white", className)}>
      <div className="flex items-center justify-between px-10 pt-2">
        <div className="flex items-center gap-10">
          <QiroLogo />
          <TabNavigation />
        </div>

        <div className="flex items-center gap-4">
          <BellButton />
          <AddressButton address={walletAddress} />
          <AvatarChip initials={userInitials} />
        </div>
      </div>
    </header>
  )
}

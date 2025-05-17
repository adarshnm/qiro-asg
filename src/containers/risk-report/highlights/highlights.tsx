import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

interface HighlightCardProps {
  icon: string
  title: string
  description: string
  className?: string
}

export function HighlightCard({
  icon,
  title,
  description,
}: HighlightCardProps) {
  return (
    <Card className="rounded-[18px]">
      <CardContent>
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md">
          <Image src={icon} alt={title} width={24} height={24} />
        </div>
        <h3 className="text-title-text text-lg font-semibold text-[#3C3753]">
          {title}
        </h3>
        <p className="text-body-text text-sm/7 text-[#756F8B]">{description}</p>
      </CardContent>
    </Card>
  )
}

interface HighlightsProps {
  className?: string
}

const highlights: HighlightCardProps[] = [
  {
    icon: "/figma-images/secure-icon.svg",
    title: "Secure & Collateralized",
    description:
      "The pool is overcollateralized with real-world assets, ensuring risk protection. Assets include commercial real estate, SME loans, and structured finance products.",
  },
  {
    icon: "/figma-images/investor-protection-icon.svg",
    title: "Investor Protection",
    description:
      "20-25% first-loss capital ensures investors are protected from defaults. Senior tranche structure prioritizes investor repayments.",
  },
  {
    icon: "/figma-images/global-icon.svg",
    title: "Global & Diversified",
    description:
      "Borrowers span 15+ countries across multiple sectors. Industries include supply chain financing, renewable energy, and fintech lending.",
  },
  {
    icon: "/figma-images/transparency-icon.svg",
    title: "Transparent & Monitored",
    description:
      "Investors receive quarterly financial reports and real-time loan tracking. Data rooms provide access to borrower financials and risk metrics.",
  },
]

export function Highlights({ className }: HighlightsProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", className)}>
      {highlights.map((highlight, index) => (
        <HighlightCard
          key={index}
          icon={highlight.icon}
          title={highlight.title}
          description={highlight.description}
        />
      ))}
    </div>
  )
}

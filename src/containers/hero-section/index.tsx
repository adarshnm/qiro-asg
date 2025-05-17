import Image from "next/image"
import React from "react"
import HeroItem from "./hero-item"

function LinkItem({ icon, label }: { label: string; icon: string }) {
  return (
    <div className="flex min-w-24 flex-row items-center justify-center gap-1 rounded-4xl bg-[#F7F7F7]/74 p-3">
      <Image src={`/figma-images/${icon}`} alt={label} width={16} height={16} />

      <p className="text-xs font-medium">{label}</p>
    </div>
  )
}

function Hero() {
  return (
    <div className="flex h-[352px] flex-row justify-between bg-[url(/figma-images/hero.jpg)] px-11 py-9">
      <div className="flex flex-col">
        <Image src="/figma-images/back.svg" alt="Back" width={16} height={16} />
        <h4 className="pt-2 text-xl font-medium text-white">Featured Loan</h4>
        <div className="flex flex-row items-end gap-4 pt-3">
          <h1 className="text-[42px] font-semibold text-white">
            Fintech Agency LLC
          </h1>
          <p className="pb-2 text-white underline">Contract</p>
        </div>
        <p className="max-w-[600px] text-sm text-white">
          Helo Finance specialises in offering liquidity services tailored for
          Small and Medium Businesses (SMBs) with an annual revenue threshold of
          at least $50 million.
        </p>
        <div className="flex max-w-[600px] flex-row items-center gap-2 pt-4">
          <HeroItem title="Estimated APY" value="14%" />
          <HeroItem
            title="Minimum Investment"
            value="$100K"
            className="flex-1"
          />
          <HeroItem title="Total Value Locked" value="$5M" className="flex-1" />
        </div>
      </div>
      <div className="flex items-end">
        <div className="flex flex-row gap-4">
          <LinkItem label="Website" icon="world.svg" />
          <LinkItem label="LinkedIn" icon="linkedin.svg" />
          <LinkItem label="Twitter" icon="x.svg" />
        </div>
      </div>
    </div>
  )
}

export default Hero

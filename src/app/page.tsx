import Deposit from "@/containers/deposit/deposit"
import Hero from "@/containers/hero-section"
import RiskReportMarketplace from "@/containers/risk-report/risk-report-marketplace"
import { TopAppBar } from "@/containers/top-bar/top-app-bar"

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] font-[family-name:var(--font-inter)]">
      <TopAppBar />
      <Hero />
      <div className="flex flex-row flex-wrap-reverse pt-6 pl-6">
        <RiskReportMarketplace />
        <div className="mb-6 flex-2/5">
          <Deposit />
        </div>
      </div>
    </main>
  )
}

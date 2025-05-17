import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"
import SectionItem from "../section-item"
import OverviewContent from "./overview/overview-content"
import { Highlights } from "./highlights/highlights"
import { Repayments } from "../repayments/repayments"
import Assets from "../assets/assets"
import { Structure } from "@/containers/structure/structure"
import Underwriters from "../underwriters/underwriters"
import { PoolActivity } from "@/containers/pool-activity/pool-activity"

function RiskReportMarketplace() {
  return (
    <main className="flex flex-3/5 flex-col gap-14">
      <Tabs defaultValue="overview">
        <TabsList className="gap-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="highlights">Highlights</TabsTrigger>
          <TabsTrigger value="repayment">Repayment</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="underwriters">Underwriters</TabsTrigger>
          <TabsTrigger value="pool-activity">Pool Activity</TabsTrigger>
        </TabsList>
        <div className="pt-6">
          <TabsContent value="overview">
            <SectionItem title="Overview">
              <OverviewContent />
            </SectionItem>
          </TabsContent>
          <TabsContent value="highlights">
            <SectionItem title="Highlights">
              <Highlights />
            </SectionItem>
          </TabsContent>
          <TabsContent value="repayment">
            <SectionItem title="Repayment">
              <Repayments />
            </SectionItem>
          </TabsContent>
          <TabsContent value="assets">
            <SectionItem title="Assets">
              <Assets />
            </SectionItem>
          </TabsContent>
          <TabsContent value="structure">
            <SectionItem title="Structure">
              <Structure />
            </SectionItem>
          </TabsContent>
          <TabsContent value="underwriters">
            <SectionItem title="Underwriters">
              <Underwriters />
            </SectionItem>
          </TabsContent>
          <TabsContent value="pool-activity">
            <SectionItem title="Pool Activity">
              <PoolActivity />
            </SectionItem>
          </TabsContent>
        </div>
      </Tabs>
    </main>
  )
}

export default RiskReportMarketplace

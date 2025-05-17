import { Card, CardContent } from "@/components/ui/card";
import { PoolOverview } from "@/containers/risk-report/overview/pool-overview";
import React from "react";

function OverviewContent() {
  const poolData = {
    capacity: "$28,493,949",
    capacityFilledPercentage: 40,
    estimatedApy: "14%",
    capitalFormation: "30 Days",
    loanTerm: "4 Days",
  };

  return (
    <Card className="overflow-hidden rounded-[18px] bg-white p-0">
      <CardContent className="p-0">
        <PoolOverview data={poolData} className="border-0 p-[27px_32px]" />
      </CardContent>
    </Card>
  );
}

export default OverviewContent;

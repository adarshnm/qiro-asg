import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import DataTileContainer from "../data-tile-container";
import { DataTileProps } from "@/components/ui/data-tile";
const items: DataTileProps[] = [
  {
    label: "Asset Value",
    value: "$25M",
    infoTooltip: "The total value of the assets held by Fintech Agency LLC.",
  },
  {
    label: "Asset Type",
    value: "Invoice",
    infoTooltip: "The type of asset held by Fintech Agency LLC.",
  },
  {
    label: "Maturity Date",
    value: "Apr 06, 2025",
    infoTooltip: "The date when the asset matures.",
  },
];
function Assets() {
  return (
    <Card>
      <CardHeader className="text-2xl font-bold">Fintech Agency LLC</CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p className="font-normal text-[#4f4f4f]">
            Fintech Agency LLC Finance specialises in offering liquidity
            services tailored for Small and Medium Businesses (SMBs) with an
            annual revenue threshold of at least $50 million.
          </p>
          <DataTileContainer items={items} />
        </div>
      </CardContent>
    </Card>
  );
}

export default Assets;

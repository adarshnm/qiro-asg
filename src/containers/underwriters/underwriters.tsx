import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import DataTileContainer from "../data-tile-container"

function Underwriters() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row items-end justify-between">
          <div>
            <h3 className="text-2xl font-bold">Qiro Underwriting Partners</h3>
            <p className="text-sm text-[#3D3D3D]">
              Powering Smarter Credit Decisions with Trusted Underwriting
              Partners
            </p>
          </div>
          <Button
            variant="link"
            className="bg-linear-[178deg,#FFFFFF_5%,#FBFAFF_40%,#DED9FD_100%] text-xs text-black underline"
          >
            View Detailed Report
          </Button>
        </div>
        <DataTileContainer
          items={[
            {
              label: "Risk Score",
              value: "8.9/10",
              infoTooltip:
                "The risk score is a measure of the creditworthiness of the borrower, with a higher score indicating lower risk.",
            },
            {
              label: "Default Probability",
              value: "Low",
              infoTooltip:
                "The default probability is the likelihood that the borrower will default on their loan, with a lower probability indicating lower risk.",
            },
          ]}
        />
      </CardContent>
    </Card>
  )
}

export default Underwriters

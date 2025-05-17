"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import DataTileContainer from "../data-tile-container";

interface TrancheSummaryProps {
  type: "senior" | "junior";
  yield: string;
  allocation: string;
  apy: string;
  tvl: string;
  className?: string;
}

export function TrancheSummary({
  type,
  yield: yieldType,
  allocation,
  apy,
  tvl,
  className,
}: TrancheSummaryProps) {
  return (
    <div className={cn("flex flex-col gap-4 rounded-lg p-4", className)}>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded",
              type === "senior" ? "bg-[#CCB3E6]" : "bg-accent",
            )}
          ></div>
          <h4 className="text-body-text text-sm">
            {type === "senior" ? "Senior" : "Junior"} Tranche Details
          </h4>
        </div>
        <div className="rounded bg-[#E1E1E1]/20 px-2 py-1 text-xs text-gray-800 shadow-sm">
          {yieldType}
        </div>
      </div>

      <DataTileContainer
        items={[
          { label: "Allocation", value: allocation },
          { label: "APY", value: apy },
          { label: "TVL", value: tvl },
        ]}
        tileClassName="p-3 gap-1"
        valueClassName="text-base"
      />
    </div>
  );
}

interface StructureDetailsProps {
  rows: {
    label: string;
    value: string | React.ReactNode;
    underline?: boolean;
  }[];
  className?: string;
}

export function StructureDetails({ rows, className }: StructureDetailsProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[#E7E7E7]",
        className,
      )}
    >
      <table className="w-full">
        <thead className="bg-[#FDFCFC]">
          <tr className="border-b border-[#E5E7EB]">
            <th className="px-4 py-3 text-left text-sm font-medium text-[#3D3D3D]">
              Details
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-[#3D3D3D]">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-[#F3F3F3] text-xs text-[#44403C]"
            >
              <td className="px-4 py-3 text-left">{row.label}</td>
              <td
                className={cn(
                  "px-4 py-3 text-left",
                  row.underline ? "underline" : "",
                )}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface StructureProps {
  className?: string;
}

const chartConfig = {
  value: {
    color: "#7052E7",
  },
} satisfies ChartConfig;

const data = [
  {
    name: "Senior Tranche",
    value: 80,
    fill: "#7052E7",
  },
  {
    name: "Junior Tranche",
    value: 20,
    fill: "#CCB3E6",
  },
];

export function Structure({ className }: StructureProps) {
  return (
    <div className={cn("flex flex-col gap-7", className)}>
      <div className="flex gap-6 rounded-[36px] border border-[#EEEEEE] bg-white p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-[300px] w-[300px]">
            <ChartContainer config={chartConfig} className="flex h-full w-full">
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  data={data}
                  innerRadius={70}
                  outerRadius={100}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="block text-2xl font-bold text-gray-900">
                14%
              </span>
              <span className="text-sm text-gray-900">APR</span>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <TrancheSummary
            type="senior"
            yield="Fixed Yield"
            allocation="80%"
            apy="14%"
            tvl="336K USD"
          />
          <TrancheSummary
            type="junior"
            yield="Variable Yield"
            allocation="20%"
            apy="19%"
            tvl="5M USD"
          />
        </div>
      </div>

      <StructureDetails
        rows={[
          { label: "Pool Type", value: "Senior Tranche" },
          {
            label: "Investor Protections",
            value: "20-25% first-loss coverage",
          },
          {
            label: "Collateralization",
            value:
              "Yes, This loan is secured with real-world, off-chain assets as collateral.",
          },
          {
            label: "Legal Documents",
            value: "📜 Senior Pool Agreement",
            underline: true,
          },
        ]}
      />
    </div>
  );
}

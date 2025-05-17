import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PoolOverviewCardProps {
  label: string;
  value: string;
  infoTooltip?: string;
  className?: string;
}

export function PoolOverviewCard({
  label,
  value,
  infoTooltip,
  className,
}: PoolOverviewCardProps) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col gap-3 rounded-[18px] p-7",
        className,
      )}
    >
      <div className="flex flex-row items-center gap-1.5">
        <span className="text-sm font-normal text-[#3D3D3D]">{label}</span>
        {infoTooltip && (
          <span title={infoTooltip}>
            <Image
              src="/figma-images/info-icon.svg"
              alt="Info"
              width={16}
              height={16}
            />
          </span>
        )}
      </div>
      <span className="text-2xl font-medium text-[#090A0B]">{value}</span>
    </div>
  );
}

interface ProgressBarProps {
  progress: number;
  className?: string;
}

export function ProgressBar({ progress, className }: ProgressBarProps) {
  return (
    <div
      className={cn(
        "relative inline-flex w-full flex-row items-center",
        className,
      )}
    >
      {/* <div
        className="absolute top-0 left-0 h-1 rounded-full bg-[#732EFE]"
        style={{ width: `${progress}%` }}
      ></div> */}
      <div className="flex flex-1 flex-row gap-1">
        <div
          className={cn("h-1 rounded-full bg-[#732EFE]")}
          style={{
            flex: `${progress}%`,
          }}
        />
        <div
          className={cn("h-1 flex-[20%] rounded-full bg-[#E8DEF8]")}
          style={{
            flex: `${100 - progress}%`,
          }}
        />
      </div>

      <div className="rounded-md px-2 py-1">
        <span className="text-xs font-bold text-[#732EFE]">
          {progress}% Filled
        </span>
      </div>
    </div>
  );
}

interface PoolOverviewProps {
  data: {
    capacity: string;
    capacityFilledPercentage: number;
    estimatedApy: string;
    capitalFormation: string;
    loanTerm: string;
  };
  className?: string;
}

export function PoolOverview({ data, className }: PoolOverviewProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 rounded-lg bg-white p-8 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-3.5">
        <PoolOverviewCard
          label="Pool Capacity"
          value={data.capacity}
          infoTooltip="The total amount that can be invested in this pool"
          className="border-none p-0"
        />
        <ProgressBar progress={data.capacityFilledPercentage} />
      </div>

      <div className="grid grid-cols-3 gap-0 rounded-[18px] border border-[#e4e4e4]">
        <PoolOverviewCard
          label="Estimated APY"
          value={data.estimatedApy}
          infoTooltip="Annual Percentage Yield"
          className="rounded-r-none border-r border-r-[#e4e4e4]"
        />
        <PoolOverviewCard
          label="Capital Formation"
          value={data.capitalFormation}
          infoTooltip="Time period for capital formation"
          className="rounded-r-none border-r border-r-[#e4e4e4]"
        />
        <PoolOverviewCard
          label="Loan Term"
          value={data.loanTerm}
          infoTooltip="Duration of the loan"
        />
      </div>
    </div>
  );
}

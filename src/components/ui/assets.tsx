import { cn } from "@/lib/utils";
import React from "react";

interface AssetCardProps {
  name: string;
  description: string;
  assetValue: string;
  assetType: string;
  maturityDate: string;
  className?: string;
}

export function AssetCard({
  name,
  description,
  assetValue,
  assetType,
  maturityDate,
  className,
}: AssetCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-heading-text text-xl font-bold">{name}</h3>
        <hr className="border-[#E5E7EB]" />
        <p className="text-body-text text-sm">{description}</p>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2 rounded-lg bg-[#FEFEFF] p-4 shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="text-body-text text-sm">Asset Value</span>
          <span className="text-heading-text text-xl font-medium">
            {assetValue}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-body-text text-sm">Asset Type</span>
          <span className="text-heading-text text-xl font-medium">
            {assetType}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-body-text text-sm">Maturity Date</span>
          <span className="text-heading-text text-xl font-medium">
            {maturityDate}
          </span>
        </div>
      </div>
    </div>
  );
}

interface AssetsProps {
  assets: AssetCardProps[];
  className?: string;
}

const assetsData = [
  {
    image: "/figma-images/asset-1.jpg",
    title: "Commercial Building A",
    location: "New York, NY",
    value: "$2.5M",
    type: "Commercial Real Estate",
    collateral: "Yes",
  },
  {
    image: "/figma-images/asset-2.jpg",
    title: "Residential Complex B",
    location: "Miami, FL",
    value: "$1.8M",
    type: "Residential Real Estate",
    collateral: "Yes",
  },
  {
    image: "/figma-images/asset-3.jpg",
    title: "Industrial Warehouse C",
    location: "Chicago, IL",
    value: "$3.2M",
    type: "Industrial Real Estate",
    collateral: "Yes",
  },
];

export function Assets({ assets, className }: AssetsProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {assets.map((asset, index) => (
        <AssetCard
          key={index}
          name={asset.name}
          description={asset.description}
          assetValue={asset.assetValue}
          assetType={asset.assetType}
          maturityDate={asset.maturityDate}
        />
      ))}
    </div>
  );
}

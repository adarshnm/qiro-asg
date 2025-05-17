import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./button";

interface UnderwritersCardProps {
  name: string;
  description: string;
  riskScore: string;
  defaultProbability: string;
  className?: string;
}

export function UnderwritersCard({
  name,
  description,
  riskScore,
  defaultProbability,
  className,
}: UnderwritersCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg bg-white p-6 shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-heading-text">{name}</h3>
        <p className="text-sm text-body-text">{description}</p>
      </div>

      <div className="rounded-lg bg-[#EBEBEB]/50 p-4">
        <Button
          variant="default"
          className="flex flex-row items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900"
        >
          📄 View Detailed Report
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
              stroke="black"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 2H14V6"
              stroke="black"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66699 9.33333L14.0003 2"
              stroke="black"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 rounded-lg">
        <div className="flex flex-col gap-1 rounded-lg bg-[#FEFEFF] p-4 shadow-sm">
          <span className="text-sm text-body-text">Risk Score</span>
          <span className="text-xl font-medium text-heading-text">
            {riskScore}
          </span>
        </div>
        <div className="flex flex-col gap-1 rounded-lg bg-[#FEFEFF] p-4 shadow-sm">
          <span className="text-sm text-body-text">Default Probability</span>
          <span className="text-xl font-medium text-heading-text">
            {defaultProbability}
          </span>
        </div>
      </div>
    </div>
  );
}

interface UnderwritersProps {
  underwriters: UnderwritersCardProps[];
  className?: string;
}

export function Underwriters({ underwriters, className }: UnderwritersProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {underwriters.map((underwriter, index) => (
        <UnderwritersCard
          key={index}
          name={underwriter.name}
          description={underwriter.description}
          riskScore={underwriter.riskScore}
          defaultProbability={underwriter.defaultProbability}
        />
      ))}
    </div>
  );
}

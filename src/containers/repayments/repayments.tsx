"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import React, { SVGProps } from "react"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  Bar,
  YAxis,
  Rectangle,
  RectangleProps,
} from "recharts"

interface RepaymentTimelineProps {
  className?: string
}

const timelineChartData = [
  { date: "11 Jan", completed: true, value: 8 },
  { date: "26 Jan", completed: true, value: 4 },
  { date: "11 Feb", completed: true, value: 2 },
  { date: "26 Feb", completed: true, value: 3.2 },
  { date: "11 Mar", completed: true, value: 3.5 },
  { date: "26 Mar", completed: true, value: 3 },
  { date: "11 Apr", completed: true, value: 6.1 },
  { date: "26 Apr", completed: true, value: 5 },
  { date: "11 May", completed: false, value: 2 },
  { date: "26 May", completed: false, value: 4 },
  { date: "11 Jun", completed: false, value: 4 },
]

const chartConfig = {
  value: {
    color: "#7052E7",
  },
} satisfies ChartConfig

type ChartDataShape = Partial<(typeof timelineChartData)[0]>

const CustomBarShape = (
  props: Omit<SVGProps<SVGPathElement>, "radius"> &
    RectangleProps &
    ChartDataShape,
) => {
  return (
    <Rectangle
      {...props}
      radius={6}
      fill={props.completed ? props.fill : "#C8BAFF"}
    />
  )
}

export function RepaymentTimeline({ className }: RepaymentTimelineProps) {
  return (
    <div className={cn("flex flex-row items-end gap-6", className)}>
      <ChartContainer config={chartConfig} className="h-[200px] w-full">
        <BarChart accessibilityLayer data={timelineChartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            dataKey="value"
            tickFormatter={(value) => (value ? `${value}M` : value)}
            tickLine={false}
            axisLine={false}
            minTickGap={3}
            ticks={[0, 3, 6, 9, 12]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="value"
            fill="var(--color-value)"
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

interface RepaymentTableProps {
  className?: string
}

export function RepaymentTable({ className }: RepaymentTableProps) {
  const paymentsData = [
    {
      id: 1,
      dueDate: "1 Dec 2024",
      amount: "$10,000",
      status: "Paid",
    },
    {
      id: 2,
      dueDate: "1 Jan 2025",
      amount: "$10,000",
      status: "Paid",
    },
    {
      id: 3,
      dueDate: "1 Feb 2025",
      amount: "$10,000",
      status: "Pending",
    },
    {
      id: 4,
      dueDate: "1 Mar 2025",
      amount: "$10,000",
      status: "Upcoming",
    },
  ]

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
              Payments
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-[#3D3D3D]">
              Due date
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-[#3D3D3D]">
              Amount
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium text-[#3D3D3D]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {paymentsData.map((payment) => (
            <tr
              key={payment.id}
              className="border-b border-[#F3F3F3] text-xs text-[#44403C]"
            >
              <td className="px-4 py-3 text-left">{payment.id}</td>
              <td className="px-4 py-3 text-right">{payment.dueDate}</td>
              <td className="px-4 py-3 text-right">{payment.amount}</td>
              <td className="px-4 py-3 text-right">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Repayments() {
  return (
    <Card className="border">
      <CardContent className="flex flex-col gap-4">
        <RepaymentTimeline />
        <RepaymentTable />
      </CardContent>
    </Card>
  )
}

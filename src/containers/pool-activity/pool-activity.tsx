"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface PoolActivityProps {
  className?: string
}

const poolActivityData = [
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
    txHash: "0xabc...def",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
    txHash: "0xghi...jkl",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
    txHash: "0xmno...pqr",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
    txHash: "0xstu...vwx",
  },
]

export function PoolActivity({ className }: PoolActivityProps) {
  const [rowsPerPage, setRowsPerPage] = useState("15")

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center justify-between">
        <div className="relative w-[305px]">
          <div className="absolute top-1/2 left-3 -translate-y-1/2">
            <Search className="h-4 w-4 text-[#ADADAD]" />
          </div>
          <Input
            placeholder="Search by address"
            className="h-[43px] border border-[rgba(0,0,0,0.2)] bg-white py-1 pl-10 text-base placeholder:text-[#ADADAD]"
          />
        </div>

        <div className="flex items-center gap-[135px]">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#3D3D3D]">Rows per page</span>
            <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
              <SelectTrigger className="h-9 w-16 border-[#B0BAC9] px-3 py-1">
                <SelectValue placeholder="15" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-[#3D3D3D]">1-4 of 4 wallets</span>
            <div className="flex items-center gap-2">
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DEDEDE] text-[#424446]">
                <ChevronLeft className="h-3 w-3" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#DEDEDE] text-[#424446]">
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-[18px] border border-[#DDDDDD]">
        <Table>
          <TableHeader className="bg-[#FDFCFC]">
            <TableRow className="border-b border-[#E5E7EB]">
              <TableHead className="px-8 py-3 font-medium text-[#3D3D3D]">
                Wallet
              </TableHead>
              <TableHead className="px-8 py-3 font-medium text-[#3D3D3D]">
                Tx Type
              </TableHead>
              <TableHead className="px-8 py-3 font-medium text-[#3D3D3D]">
                Amount
              </TableHead>
              <TableHead className="px-8 py-3 font-medium text-[#3D3D3D]">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {poolActivityData.map((tx, index) => (
              <TableRow
                key={index}
                className="h-[79px] border-b border-[#E8E8E8]"
              >
                <TableCell className="px-8 py-4">
                  <div className="flex items-center gap-1">
                    <Image
                      src="/figma-images/transaction.png"
                      alt="transaction"
                      width={20}
                      height={20}
                    />
                    <span className="text-base font-medium text-[#3720E5] underline">
                      {tx.wallet}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-8 py-4 text-base text-[#252525]">
                  {tx.txType}
                </TableCell>
                <TableCell className="px-8 py-4 text-base text-[#252525]">
                  {tx.amount}
                </TableCell>
                <TableCell className="px-8 py-4 text-base text-[#252525]">
                  <div className="flex items-center justify-between">
                    <span>{tx.date}</span>
                    {tx.txHash && (
                      <div className="flex items-center gap-1 rounded-[18px] border border-[rgba(0,0,0,0.11)] bg-[#F0E9FF] px-[11px] py-[10px]">
                        <span className="text-xs font-medium text-[#030712]">
                          Tx
                        </span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

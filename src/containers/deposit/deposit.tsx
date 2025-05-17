"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import React, { useState } from "react"
import DepositDialog from "./deposit-dialog"

function InfoItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-[#767E93]">{title}</p>
      <p className="text-lg text-[#090A0B]">{value}</p>
    </div>
  )
}

function Deposit() {
  const [inputAmount, setInputAmount] = useState("")
  const [isDepositDialogOpen, setIsDepositDialogOpen] = useState(false)
  return (
    <div className="flex flex-col md:pr-6 md:pl-6">
      <div className="flex flex-col gap-6">
        <Card className="p-4">
          <CardContent className="p-0">
            <div className="flex flex-row justify-between">
              <p className="text-[#6C6C6C]">Deposit USDC</p>
              <Image
                src="/figma-images/usdc.svg"
                alt="USDC"
                width={20}
                height={20}
              />
            </div>
            <div>
              <input
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                type="number"
                placeholder="0.00"
                className="caret-accent w-full border-none text-[38px] text-black outline-none placeholder:text-[#AFB4C0]"
              />
            </div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-normal text-[#AFB4C0]">$0</p>
              <div className="flex flex-row gap-2">
                <p className="text-[#6C6C6C]">Max</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="p-4">
          <CardContent className="flex flex-col gap-6 p-0">
            <InfoItem title="Minimum Investments" value="100K" />
            <InfoItem title="Lockup Period" value="28 Days" />
            <InfoItem title="APY" value="7.87%" />
          </CardContent>
        </Card>
        <Button
          disabled={!inputAmount}
          size={"lg"}
          onClick={() => setIsDepositDialogOpen(true)}
          className="rounded-[24px] bg-[#7052E7] text-white hover:bg-[#7052E7]/90"
        >
          {inputAmount ? "Deposit" : "Enter an Amount"}
        </Button>
        <div className="flex flex-col gap-4">
          <h6 className="text-base font-semibold">My Activity</h6>
          <Card className="border">
            <CardContent className="flex flex-col gap-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <Image
                      src="/figma-images/transaction.png"
                      alt="transaction"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-lg font-semibold text-[#44403C]">
                    0x9102...e3e7
                  </p>
                </div>
                <p className="text-xl text-[#090A0B]">-$69.33 USDC</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm font-normal text-[#767E93]">Invested</p>
                <p className="text-sm font-normal text-[#767E93]">
                  Mar 1, 2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <DepositDialog
        open={isDepositDialogOpen}
        onClose={setIsDepositDialogOpen}
        amount={inputAmount || "100.00"}
      />
    </div>
  )
}

export default Deposit

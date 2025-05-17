import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

type Props = {
  open: boolean
  onClose: (open: boolean) => void
  amount?: string
}

type FlowStep = "review" | "confirm1" | "confirm2" | "success"

function DepositDialog({ open, onClose, amount = "100.00" }: Props) {
  const [currentStep, setCurrentStep] = useState<FlowStep>("review")

  // Auto-progress through the flow steps with delay
  useEffect(() => {
    if (!open) {
      // Reset to initial state when dialog closes
      setCurrentStep("review")
      return
    }

    // Skip the auto-progression if we're in the initial review step
    if (currentStep === "review") return

    const timer = setTimeout(() => {
      if (currentStep === "confirm1") {
        setCurrentStep("confirm2")
      } else if (currentStep === "confirm2") {
        setCurrentStep("success")
        toast.success(
          <div className="flex items-center gap-4">
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white">
              <Image
                src="/figma-images/toast-check.svg"
                alt="Success"
                width={46}
                height={46}
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold text-black">
                  Investment Successful!
                </span>
              </div>
              <span className="text-sm text-[#6D648B]">
                Your funds are successfully invested in the selected tranche.
              </span>
            </div>
            <button
              className="ml-auto flex h-8 items-center justify-center rounded-full bg-[#7052E7] px-4"
              onClick={() =>
                window.open("https://explorer.solana.com", "_blank")
              }
            >
              <div className="flex min-w-20 items-center gap-1.5">
                <span className="text-sm font-medium text-white">View Tx</span>
                <Image
                  src="/figma-images/open-new-filled.svg"
                  alt="Open"
                  width={14}
                  height={14}
                  color="white"
                />
              </div>
            </button>
          </div>,
          {
            duration: 5000,
            className: "custom-toast-success",
            icon: null,
          },
        )
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentStep, open])

  // Handle the continue button click
  const handleContinue = () => {
    setCurrentStep("confirm1")
  }

  const ProgressIndicator = ({ step }: { step: "confirm1" | "confirm2" }) => {
    return (
      <div className="flex w-full flex-col gap-5">
        <div className="w-full rounded-lg bg-[#E8DEF8] px-0 py-2.5">
          <p className="px-5 text-base font-medium text-[#090A0B]">
            {step === "confirm1" ? "Approve deposit of 100 USDC" : "Deposit"}
          </p>
        </div>

        <div className="relative h-2 w-full">
          <div className="absolute inset-0 rounded-full bg-[#C5C4E2]"></div>
          <div
            className="absolute top-0 bottom-0 left-0 rounded-full bg-[#732EFE] transition-all duration-500"
            style={{
              width: step === "confirm1" ? "50%" : "100%",
            }}
          ></div>
        </div>

        <div className="w-full rounded-lg bg-[#E8DEF8] px-0 py-2.5">
          <p className="px-5 text-sm font-normal text-[#090A0B]">
            {step === "confirm1"
              ? "Signature 1 / 2 - Proceed in your wallet"
              : "Signature 2 / 2 - Proceed in your wallet"}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="md:min-w-[600px]">
        <DialogTitle>Review Deposit</DialogTitle>

        <div className="flex flex-col gap-7 pt-4">
          {/* Main Content Box */}
          <div className="w-full rounded-[28px] bg-white">
            {/* Agency name section */}
            <div className="border-gradient border-b py-4">
              <div className="flex items-center gap-2.5 px-5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-b from-[#6C56F2] to-[#C28FFF]"></div>
                <span className="text-lg font-medium text-[#090A0B]">
                  Fintech Agency LLC
                </span>
              </div>
            </div>

            {/* Deposit amount section */}
            <div className="px-5 py-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-base font-medium text-[#767E93]">
                  Deposit
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl font-medium text-[#090A0B]">
                      {amount} USDC
                    </span>
                    <span className="rounded-[10px] bg-[#F0EDFA] px-2.5 py-1 text-base font-medium text-[#090A0B]">
                      $100
                    </span>
                  </div>
                  <Image
                    src="/figma-images/usdc.svg"
                    alt="USDC"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            {currentStep === "review" ? (
              <div className="border-t border-[#CACACA]/50 px-5 py-3">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-base font-medium text-[#767E93]">
                    Tranche
                  </span>
                  <span className="text-base font-medium text-[#090A0B]">
                    Senior Tranche
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-base font-medium text-[#767E93]">
                    Rate (USDC)
                  </span>
                  <span className="text-base font-medium text-[#090A0B]">
                    1 USDC = 1.07900 QSR
                  </span>
                </div>
              </div>
            ) : currentStep === "success" ? (
              <div className="border-t border-[#CACACA]/50 px-5 py-3">
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-base font-medium text-[#767E93]">
                    Gas Fees
                  </span>
                  <span className="text-base font-medium text-[#090A0B]">
                    0.1%
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-base font-medium text-[#767E93]">
                    Tx Hash
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-[#090A0B]">
                      0x48Ybuy8c9e04u
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="p-1">
                        <Image
                          src="/figma-images/open-new-filled.svg"
                          alt="Open"
                          width={16}
                          height={16}
                        />
                      </button>
                      <button className="p-1">
                        <Image
                          src="/figma-images/file-copy.svg"
                          alt="Copy"
                          width={16}
                          height={16}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {(currentStep === "confirm1" || currentStep === "confirm2") && (
            <ProgressIndicator step={currentStep} />
          )}

          {currentStep === "review" && (
            <p className="text-base font-medium text-[#767E93]">
              By confirming this transaction, you agree to the{" "}
              <span className="underline">Terms of Use</span> and the services
              provisions relating to the morpho Vault.
            </p>
          )}

          {currentStep === "review" && (
            <Button
              className="w-full rounded-[24px] bg-[#7052E7] py-4 text-base font-semibold text-white hover:bg-[#7052E7]/90"
              size="lg"
              onClick={handleContinue}
            >
              Continue to Confirm
            </Button>
          )}

          {/* Close button for success state */}
          {currentStep === "success" && (
            <Button
              className="w-full rounded-[24px] bg-[#7052E7] py-4 text-base font-semibold text-white hover:bg-[#7052E7]/90"
              size="lg"
              onClick={() => {
                onClose(false)
              }}
            >
              Close
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DepositDialog

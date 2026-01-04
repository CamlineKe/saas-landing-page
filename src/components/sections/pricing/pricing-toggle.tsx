"use client"

import { useState } from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cn } from "@/lib/utils"

interface PricingToggleProps {
  onToggle: (value: "monthly" | "annual") => void
  defaultValue?: "monthly" | "annual"
}

export function PricingToggle({ onToggle, defaultValue = "monthly" }: PricingToggleProps) {
  const [value, setValue] = useState<"monthly" | "annual">(defaultValue)

  const handleChange = (newValue: "monthly" | "annual") => {
    if (newValue) {
      setValue(newValue)
      onToggle(newValue)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={handleChange}
        className="bg-muted p-1 rounded-lg"
      >
        <ToggleGroupItem
          value="monthly"
          className={cn(
            "px-6 py-2 rounded-md",
            value === "monthly" && "bg-background shadow-sm"
          )}
        >
          Monthly
        </ToggleGroupItem>
        <ToggleGroupItem
          value="annual"
          className={cn(
            "px-6 py-2 rounded-md",
            value === "annual" && "bg-background shadow-sm"
          )}
        >
          Annual
          <span className="ml-2 text-xs bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 px-2 py-0.5 rounded-full">
            Save 17%
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

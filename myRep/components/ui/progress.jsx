"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"



const Progress = React.forwardRef(({ className, value, ...props }, ref) => {

    let colorClass;
  if (value >= 75) {
    colorClass = "bg-red-700"; // Hot
  } else if (value >= 50) {
    colorClass = "bg-orange-500"; // Warm
  } else if (value >= 25) {
    colorClass = "bg-sky-300"; // Cool
  } else {
    colorClass = "bg-blue-700"; // Cold
  }

  return (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-indigo-100", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className={cn("h-full  w-full flex-1 bg-primary transition-all", colorClass)}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }

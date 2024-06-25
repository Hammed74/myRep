"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "../../lib/utils"

const Slider = React.forwardRef(({ className, interest, onChange, ...props }, ref) => {
  
  const [sliderValue, setSliderValue] = React.useState(interest  ?? 0);

  // Handle change in slider value
  const handleChange = (newValue) => {
    setSliderValue(newValue);
  };

  return (

  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    interest={sliderValue}
    onChange={handleChange}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-violet-700" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full  bg-violet-700 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

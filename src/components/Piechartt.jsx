"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { browser: "chrome", visitors: 240, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 320, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#FFFFFF",
  },
  safari: {
    label: "Safari",
    color: "#D5797F",
  },
}

export function Piechartt() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square md:ml-12 ml-[8rem] md:h-[220px] h-[52rem]"
    >
      <PieChart>
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="4" dy="4" stdDeviation="3" floodColor="#D5797F" floodOpacity="1" />
          </filter>
        </defs>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          className="custom-pie"
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
          innerRadius="60%"
          outerRadius="90%"
          style={{ stroke: 'black', strokeWidth: '0.2px', filter: 'url(#shadow)' }} // inline styles for border and shadow
        />
      </PieChart>
    </ChartContainer>
  )
}

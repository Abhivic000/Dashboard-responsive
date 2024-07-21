"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Sun", desktop: 0 },
  { month: "Mon", desktop: 40 },
  { month: "Tue", desktop: 20 },
  { month: "Wed", desktop: 55 },
  { month: "Thu", desktop: 30 },
  { month: "Fri", desktop: 50 },
  { month: "Sat", desktop: 15 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#8E94DA",
  },
}

export function Chartt() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="md:text-base text-5xl">Weekly Activity</CardTitle>
        
      </CardHeader>
      <CardContent className="md:h-36 h-[50rem]">
        <ChartContainer config={chartConfig} className="md:h-36 h-[49rem] md:w-[46rem] w-[70rem] md:text-base text-2xl">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 10,
              right: 10,
            }}
        
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
        
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

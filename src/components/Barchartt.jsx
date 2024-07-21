"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#555BB3",
  },
  mobile: {
    label: "Mobile",
    color: "#D5797F",
  },
}

export function Barchartt() {
  return (
    <Card>
      <CardHeader>
        <input type="search" name="search-form" placeholder="Search ..." className="bg-gray-200 md:rounded-xl rounded-3xl md:text-base text-4xl md:p-2 p-7 md:w-32 w-[36rem]" />
        
      </CardHeader>
      <CardContent className="md:h-[6rem] h-[50rem]">
        <ChartContainer config={chartConfig} className="md:h-[6rem] h-[50rem] md:w-[32rem] w-[74rem] md:text-base text-2xl">
          <BarChart accessibilityLayer data={chartData} barSize="5%">
          
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}            
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

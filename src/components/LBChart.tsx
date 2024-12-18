"use client"

import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Bar } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const chartData = [
  { month: "January", incoming: 186, answered: 80, experts: 50 },
  { month: "February", incoming: 305, answered: 200, experts: 60 },
  { month: "March", incoming: 237, answered: 120, experts: 70 },
  { month: "April", incoming: 73,  answered: 190, experts: 55 },
  { month: "May", incoming: 209, answered: 130, experts: 65 },
  { month: "June", incoming: 214, answered: 140, experts: 75 },
]

export default function LBChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consultations vs. Experts Online</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 300 }}>
          <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis 
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.slice(0,3)}
              tickMargin={8}
            />
            <YAxis 
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[0,10,20,30,40,50,60]}
              domain={[0,60]}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[0,10,20,30,40,50,60]}
              domain={[0,60]}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ top: 0, left: 0 }}
              formatter={(value) => {
                if (value === 'incoming') return 'Incoming (linha cinza pontilhada)'
                if (value === 'answered') return 'Answered (linha verde clara)'
                if (value === 'experts') return 'Experts Online (barras amarelas)'
                return value
              }}
            />
            <Bar
              yAxisId="right"
              dataKey="experts"
              fill="#f1c40f"
              radius={4}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="incoming"
              stroke="#999999"
              strokeWidth={2}
              dot={false}
              strokeDasharray="3 3"
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="answered"
              stroke="#2ecc71"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </div>
      </CardContent>
      <CardFooter/>
    </Card>
  )
}

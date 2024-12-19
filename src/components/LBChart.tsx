"use client"

import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Bar, ResponsiveContainer } from "recharts"
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
    <Card className="h-[455px] w-[1000px]">
      <CardHeader>
        <CardTitle className="text-[#667085]">CONSULTATIONS</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={chartData} 
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
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
                ticks={[0,50,100,150,200,250]}
                domain={[0,300]}
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
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: "10px" }}
                formatter={(value) => {
                  if (value === 'incoming') return 'Incoming'
                  if (value === 'answered') return 'Answered'
                  if (value === 'experts') return 'Experts Online'
                  return value
                }}
              />
              <Bar
                yAxisId="right"
                dataKey="experts"
                fill="#FFF3C6"
                radius={4}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="incoming"
                stroke="#8A94A6"
                strokeWidth={2}
                dot={false}
                strokeDasharray="3 3"
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="answered"
                stroke="#15B79F"
                strokeWidth={2}
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter/>
    </Card>
  )
}

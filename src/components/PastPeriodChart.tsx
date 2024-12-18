"use client"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const chartData = [
  { period: "Last Week", consultations: 120, ordersClosed: 80 },
  { period: "This Week", consultations: 140, ordersClosed: 100 },
]

export default function ComparisonChart() {
  return (
    <Card className="h-[400px] w-[300px]">
      <CardHeader>
        <CardTitle className="text-[#667085]">VS PAST PERIOD</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis 
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip />
              <Legend 
                verticalAlign="bottom"
                wrapperStyle={{ paddingTop: "10px" }}
                formatter={(value) => {
                  if (value === 'consultations') return 'Consultations'
                  if (value === 'ordersClosed') return 'Orders Closed'
                  return value
                }}
              />
              <Bar 
                dataKey="consultations" 
                fill="#B7EFC5"  // verde clara
                radius={[4,4,0,0]}
                barSize={30}
              />
              <Bar 
                dataKey="ordersClosed" 
                fill="#15B79F" // verde escura
                radius={[4,4,0,0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter/>
    </Card>
  )
}

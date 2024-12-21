"use client"

import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Bar, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function LBChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleData() {
    setLoading(true);
    api
      .get("/chartData")
      .then((res) => setChartData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Card className="h-[455px] w-full 2xl:w-[800px]">
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

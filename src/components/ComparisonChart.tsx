"use client"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function ComparisonChart() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleData() {
    setLoading(true);
    api
      .get("/comparisonChartData")
      .then((res) => setChartData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Card className="h-[455px] w-full 2xl:w-[350px]">
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
                fill="#CCFBEF"
                radius={[4,4,0,0]}
                barSize={30}
              />
              <Bar 
                dataKey="ordersClosed" 
                fill="#134E48"
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

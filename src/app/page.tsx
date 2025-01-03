'use client';

import {NextUIProvider} from "@nextui-org/react";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Card from "@/components/Card/Card";
import HeaderCardTitle from "@/components/HeaderCardTitle";
import LBChart from "@/components/LBChart";
import ComparisonChart from "@/components/ComparisonChart";
import Notes from "@/components/Notes";
import TableComponent from "@/components/Table";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleData() {
    setLoading(true);
    api
      .get("/cards")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <NextUIProvider>
      <main className="flex overflow-h-hidden lg:overflow-scroll">
        <SideBar />
        
        <section className="w-full">
          <Header />
          <section className="w-full px-2 lg:px-[50px] mt-[30px]">
            <section className="flex flex-col w-full h-full shadow-small rounded-[20px]">
              <HeaderCardTitle title="At a glance" showSelect={true} />
              
              <div className="flex flex-wrap gap-4 justify-between mx-[20px] mb-[50px]">
                {loading ? "Carregando..." : data.map((card: { id: number; name: string; value: number; compValue: number; }) => (
                  <Card key={card.id} cardData={card} />
                ))}
              </div>

              <HeaderCardTitle title="Insights" showSelect={false} />
            
              <div className="flex justify-center mx-[20px] mt-[30px] mb-[50px] gap-4 2xl:flex-nowrap flex-wrap lg:justify-between">
                <LBChart />

                <ComparisonChart />

                <Notes />
              </div>

              <HeaderCardTitle title="Orders" showSelect={false} />

              <TableComponent />

            </section>
          </section>
        </section>
      </main>
    </NextUIProvider>
  );
}

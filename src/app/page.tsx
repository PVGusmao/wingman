'use client';

import {NextUIProvider} from "@nextui-org/react";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Card from "@/components/Card/Card";
import { cardData, ICardData } from "@/utils/card";
import HeaderCardTitle from "@/components/HeaderCardTitle";
import LBChart from "@/components/LBChart";
import ComparisonChart from "@/components/ComparisonChart";
import Notes from "@/components/Notes";
import TableComponent from "@/components/Table";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex">
        <SideBar />
        
        <section className="w-full">
          <Header />
          <section className="w-full px-[50px] mt-[30px]">
            <section className="flex flex-col w-full h-full shadow-small rounded-[20px]">
              <HeaderCardTitle title="At a glance" showSelect={true} />
              
              <div className="flex flex-wrap gap-4 justify-between mx-[20px] mb-[50px]">
                {cardData.map((card: ICardData) => (
                  <Card key={card.id} cardData={card} />
                ))}
              </div>

              <HeaderCardTitle title="Insights" showSelect={false} />
            
              <div className="flex justify-between mx-[20px] mt-[30px] mb-[50px] gap-4">
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

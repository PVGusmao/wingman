'use client';

import { JSX } from "react";
import { PiChatTeardropFill } from "react-icons/pi";
import {NextUIProvider} from "@nextui-org/react";
import ComparisonChart from "@/components/PastPeriodChart";

export interface ICardData {
  id: number;
  name: string;
  value: number;
  compValue: number;
  icon: JSX.Element
}

const cardData: ICardData = {
  id: 1,
  name: "Consultations",
  value: 24,
  compValue: 20,
  icon: <PiChatTeardropFill size={12} />,
}

export default function Home() {
  return (
    <NextUIProvider>
      <ComparisonChart />
    </NextUIProvider>
  );
}

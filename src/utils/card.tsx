import { JSX } from "react";
import { PiChatTeardropFill, PiCheckFatFill, PiCoinFill, PiCoinsFill, PiPiggyBankFill, PiTagFill } from "react-icons/pi";

export interface ICardData {
  id: number;
  name: string;
  value: number;
  compValue: number;
  icon: JSX.Element
}

export const cardData: ICardData[] = [{
  id: 1,
  name: "Consultations",
  value: 24,
  compValue: 20,
  icon: <PiTagFill size={12} />,
},
{
  id: 2,
  name: "Orders Placed",
  value: 12,
  compValue: 8,
  icon: <PiChatTeardropFill size={12} />,
},
{
  id: 3,
  name: "Conversion",
  value: 50,
  compValue: 43.48,
  icon: <PiCheckFatFill size={12} />,
},
{
  id: 4,
  name: "Total Sales Value",
  value: 2400,
  compValue: 2823.5,
  icon: <PiCoinsFill size={12} />,
},
{
  id: 5,
  name: "Avg Order Value",
  value: 240,
  compValue: 282.35,
  icon: <PiCoinFill size={12} />,
},
{
  id: 6,
  name: "Commissionm Paid",
  value: 2240,
  compValue: 2635.2,
  icon: <PiPiggyBankFill size={12} />,
}]
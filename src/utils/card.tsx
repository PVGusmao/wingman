import { JSX } from "react";
import { PiChatTeardropFill, PiCheckFatFill, PiCoinFill, PiCoinsFill, PiPiggyBankFill, PiTagFill } from "react-icons/pi";

export interface ICardData {
  id: number;
  icon: JSX.Element
}

export const cardData: ICardData[] = [{
  id: 1,
  icon: <PiTagFill size={12} />,
},
{
  id: 2,
  icon: <PiChatTeardropFill size={12} />,
},
{
  id: 3,
  icon: <PiCheckFatFill size={12} />,
},
{
  id: 4,
  icon: <PiCoinsFill size={12} />,
},
{
  id: 5,
  icon: <PiCoinFill size={12} />,
},
{
  id: 6,
  icon: <PiPiggyBankFill size={12} />,
}]
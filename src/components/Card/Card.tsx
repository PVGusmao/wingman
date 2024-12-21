import { iconCardData } from "@/utils/card";
import PercentageChange from "./BadgePercentage";

type Props = {
  cardData: {
    id: number;
    name: string;
    value: number;
    compValue: number;
  };
}

export default function Card({ cardData }: Props) {
  return (
    <main className="w-[396px] h-[156px] bg-white rounded-[20px] flex flex-col justify-center px-[30px] shadow-card shadow-small">
      <div className="text-[#667085] font-[600] text-[12px] flex items-center gap-1">
        {iconCardData.find((icon) => icon.id === cardData.id)?.icon}
        <p>{cardData.name.toUpperCase()}</p>
      </div>

      <div className="py-[3px]">
        <p className="text-[32px] text-[#212636] font-500">{cardData.value}</p>
      </div>

      <div>
        <PercentageChange current={cardData.value} last={cardData.compValue} />
      </div>
    </main>
  )
}
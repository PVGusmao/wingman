import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

export interface PercentageChangeProps {
  current: number;
  last: number;
}

const calculatePercentageChange = (current: number, last: number) => {
  if (last === 0) return "N/A";
  const change = ((current - last) / last) * 100;
  return change.toFixed(2) + "%";
};

export default function PercentageChange({
  current,
  last,
}: PercentageChangeProps) {
  const percentageChange = calculatePercentageChange(current, last);
  const isPositive = !percentageChange.startsWith("-");

  return (
    <div
      className={`flex flex-row h-6 rounded-[4px] items-center gap-1 p-1'}`}
    >
      {isPositive ? (
        <FaArrowTrendUp size={18} className="text-[#15B79F]" />
      ) : (
        <FaArrowTrendDown size={18} className="text-[#F04438]" />
      )}
      <p
        className={`text-[14px] leading-4 tracking-tight ${isPositive ? "text-[#15B79F]" : "text-[#F04438]"}`}
      >
        {percentageChange}
      </p>
      <p className="text-[14px] text-[#667085]">{isPositive ? "increased" : "decreased"}</p>
    </div>
  );
}

import { FaArrowTrendUp } from "react-icons/fa6";
import { PiChatTeardropFill } from "react-icons/pi";

export default function Notes() {
  return (
    <main className="flex flex-col justify-evenly h-[455px] 2xl:w-[260px] w-full rounded-[20px] bg-gradient-to-br from-[#15B79F] to-[#0E9382] relative overflow-hidden">
      <section className="flex ml-[25px]">
        <PiChatTeardropFill className="text-[#CCFBEF]" />
        <p className="text-[#CCFBEF] text-[12px] font-[600]">FORECAST</p>
      </section>

      <section className="flex flex-col items-center">
        <div className="flex gap-4">
          <p className="text-[#FFFFFF] text-[56px]">+15%</p>
          <FaArrowTrendUp size={40} className="text-[#FFFFFF]" />
        </div>
        <p className="text-[14px] font-[400] w-[212px] text-[#FFFFFF]">forecasted increase in your sales closed by the end of the current month</p>
      </section>

      <section className="flex flex-col items-center">
        <div className="flex gap-4">
          <p className="text-[#FFFFFF] text-[56px]">+20%</p>
          <FaArrowTrendUp size={40} className="text-[#FFFFFF]" />
        </div>
        <p className="text-[14px] font-[400] w-[212px] text-[#FFFFFF]">forecasted increase in consultations by the end of the current month</p>
      </section>
    </main>
  );
}

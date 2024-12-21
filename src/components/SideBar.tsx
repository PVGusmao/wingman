'use client'

import Image from "next/image";
import logo from "@/assets/images/logo_wingman.png"
import { PiHouseFill } from "react-icons/pi"; 
import { PiUsersFourFill } from "react-icons/pi";
import { PiChatTeardropFill } from "react-icons/pi";
import { useState } from "react";

const sideBarIcons = [{
  id: 1,
  name: 'House',
  icon: <PiHouseFill size={20} />
},
{
  id: 2,
  name: 'Tear Drop',
  icon: <PiChatTeardropFill size={20} />
},
{
  id: 3,
  name: 'UserFour',
  icon: <PiUsersFourFill size={20} />
}]

export default function SideBar() {
  const [selectedSideIcon, setSelectedSideIcon] = useState(1);

  function handleClick(id: number) {
    setSelectedSideIcon(id);
  }
  
  return (
    <main className="bg-[#115E56] w-[60px] flex flex-col items-center p-2">
      <Image className="rounded-[5px] mt-[30px]" src={logo} alt="logo" width={33} height={33} />

      <div className="w-[50%] h-[1px] mt-[30px] bg-[#134E48]" />

      <div className="mt-[20px]">
        {sideBarIcons.map((icon, index) => (
          <button onClick={() => handleClick(icon.id)} key={index} className={`flex items-center gap-1 rounded-[8px] p-[10px] mt-[10px] ${selectedSideIcon === icon.id ? "bg-[#CCFBEF] text-[#115E56]" : "text-[#CCFBEF]"}`}>
            {icon.icon}
          </button>
        ))}
      </div>
    </main>
  )
}
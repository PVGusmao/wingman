'use client'

import { useState } from "react";
import { PiChartPieSliceFill } from "react-icons/pi";
import { PiTagFill } from "react-icons/pi";
import { PiChatTeardropTextFill } from "react-icons/pi";

const links = [{
  id: 1,
  name: 'Summary',
  icon: <PiChartPieSliceFill />
},
{
  id: 2,
  name: 'Sales',
  icon: <PiTagFill />
},
{
  id: 3,
  name: 'Chats',
  icon: <PiChatTeardropTextFill />
}]

export default function Header() {
  const [selectedMenu, setSelectedMenu] = useState(1);

  function handleClick(id: number) {
    setSelectedMenu(id);
  }

  return (
    <main className="bg-white w-full h-[94px] flex p-[15px] gap-4 items-center pl-[30px] border-b-1 shadow-small" >
      {
        links.map((link, index) => (
          <button onClick={() => handleClick(link.id)} className={`flex items-center gap-1 rounded-[1200px] p-[12px] ${selectedMenu === link.id ? "bg-[#CCFBEF] text-[#212636]" : "text-[#8A94A6]"}`} key={index}>
            {link.icon}
            <p>{link.name}</p>
          </button>
        ))
      }
    </main>
  );
}
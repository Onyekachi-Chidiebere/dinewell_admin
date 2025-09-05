
"use client";
"use client";
import React from "react";
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import menuIcon from "../assets/svg/menuicon.svg";
import searchIcon from "../assets/svg/searchicon.svg";
import moreHorizontalIcon from "../assets/svg/morehorizontalicon.svg";
import Image from "next/image";
import MenuPopup from "./MenuPopup";

const Header = () => {
  return (
    <header
      className="max-w-full px-[32px] bg-white flex items-center justify-between"
      style={{ height: 64, boxShadow: '0px 1px 4px rgba(0,0,0,0.04)' }}
    >
      {/* Left: Grid Menu + Logo + Profile */}
      <div className="flex items-center" style={{ gap: 16 }}>
        <Popover className="relative">
          <Popover.Button className="outline-none cursor-pointer border-none bg-transparent">
            <Image src={menuIcon} alt="Menu" width={24} height={24}/>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 top-full mt-2">
              {({ close }) => <MenuPopup onItemClick={close} />}
            </Popover.Panel>
          </Transition>
        </Popover>
        <div className="flex items-center select-none" style={{ gap: 0, marginLeft: 8 }}>
          <span
            style={{
              color: "#9B87F6",
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 32,
              lineHeight: '25.6px',
              letterSpacing: 0,
            }}
          >
            Dine
          </span>
          <span
            style={{
              color: "#EF7013",
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 32,
              lineHeight: '25.6px',
              letterSpacing: 0,
            }}
          >
            Well
          </span>
        </div>
        {/* Avatar and Badge integrated with logo */}
        <div className="flex items-center border-[0.2px] bg-[#EAEEF2] border-[#5D47C1] rounded-full" style={{ gap: 1, marginLeft: 4 }}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              objectFit: 'cover',
              margin   :'2px'
            }}
          />
          <span
            style={{
              padding: '4px 8px',
              borderRadius: 12,
              background: '#5D47C1',
              color: 'white',
              fontFamily: 'Red Hat Display, Inter, sans-serif',
              fontSize: 10,
              fontWeight: 500,
              lineHeight: '12px',
              margin:'2px'
            }}
          >
            Super Admin
          </span>
        </div>
      </div>
      
      <div className="flex items-center" style={{ gap: 16 }}>
      <div className="flex items-center border-[0.2px] bg-[#FAF9FF] border-[#EBEEFF] rounded-full ">
        <span
          style={{
            fontFamily: 'Red Hat Display, Inter, sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#9CA3AF',
            letterSpacing: 0,
            margin:'10px',
            marginRight:'16px',
            marginLeft:'16px'
          }}
        >
          29th, July 2024
        </span>
      </div>
       <button className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border-[0.2px] bg-[#FAF9FF] border-[#EBEEFF] rounded-full"> 
         <Image src={searchIcon} alt="Search" width={20} height={20}/>
       </button>
       <button className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border-[0.2px] bg-[#FAF9FF] border-[#EBEEFF] rounded-full"> 
          <Image src={moreHorizontalIcon} alt="More" width={20} height={20}/>
       </button>
      </div>
    </header>
  );
};

export default Header;
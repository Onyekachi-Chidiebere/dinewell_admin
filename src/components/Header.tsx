
"use client";
import React from "react";
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import menuIcon from "../assets/svg/menuicon.svg";
import searchIcon from "../assets/svg/searchicon.svg";
import moreHorizontalIcon from "../assets/svg/morehorizontalicon.svg";
import Image from "next/image";
import MenuPopup from "./MenuPopup";
import { useAuth } from '@/context/AuthContext';
import { showSuccess } from '@/utils/toast';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    showSuccess('Logged out successfully');
    logout();
  };
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
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: '#5D47C1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 10,
              fontWeight: 'bold',
              margin: '2px'
            }}
          >
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
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
            {user?.name || 'Admin'}
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
       <button 
         onClick={handleLogout}
         className="flex items-center justify-center cursor-pointer w-[40px] h-[40px] border-[0.2px] bg-[#FAF9FF] border-[#EBEEFF] rounded-full hover:bg-red-50 hover:border-red-200 transition-colors"
         title="Logout"
       > 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12L16 7M21 12H9" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
       </button>
      </div>
    </header>
  );
};

export default Header;
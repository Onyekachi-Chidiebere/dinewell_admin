import React, { useState } from 'react';
import Image from 'next/image';

// Import your icons here. For now, we'll use placeholders.
import dashboardIcon from '../assets/svg/homeicon.svg'; 
import dashboardActiveIcon from '../assets/svg/homeactiveicon.svg';
import restaurantsIcon from '../assets/svg/restaurantsicon.svg'; 
import customersIcon from '../assets/svg/customersicon.svg'; 
import customersActiveIcon from '../assets/svg/customersactiveicon.svg';
import pointsConfigIcon from '../assets/svg/pointsconfigicon.svg';
import pointsRecordsIcon from '../assets/svg/pointsrecordsicon.svg';
import restaurantsActiveIcon from '../assets/svg/restaurantsactiveicon.svg';
import pointsConfigActiveIcon from '../assets/svg/pointsconfigactiveicon.svg';
import pointsRecordsActiveIcon from '../assets/svg/pointsrecordsactiveicon.svg';
import supportIcon from '../assets/svg/supporticon.svg'; 
import settingsIcon from '../assets/svg/settingsicon.svg'; 
import settingsActiveIcon from '../assets/svg/settingsactiveicon.svg';  
import supportActiveIcon from '../assets/svg/supportactiveicon.svg';

const menuItems = [
  { name: 'Dashboard', icon: dashboardIcon, count: null ,activeIcon: dashboardActiveIcon},
  { name: 'Restaurants', icon: restaurantsIcon, count: 200 ,activeIcon: restaurantsActiveIcon},
  { name: 'Customers', icon: customersIcon, count: 2003 ,activeIcon: customersActiveIcon},
  { name: 'Points Configuration', icon: pointsConfigIcon, count: null ,activeIcon: pointsConfigActiveIcon},
  { name: 'Points Records', icon: pointsRecordsIcon, count: null ,activeIcon: pointsRecordsActiveIcon},
  { name: 'Support', icon: supportIcon, count: null ,activeIcon: supportActiveIcon},
  { name: 'Settings', icon: settingsIcon, count: null ,activeIcon: settingsActiveIcon},
];

const MenuPopup = () => {
  const [activeItem, setActiveItem] = useState('Restaurants');

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-4 z-50"
      style={{
        width: 300,
        boxShadow: '8px 12px 40px rgba(0, 0, 0, 0.15)',
        borderRadius: '20px',
        padding:'20px',
        background:'white'
      }}
    >
      <div style={{marginTop:'20px'}}>
        {menuItems.map((item, index) => {
          const isActive = item.name === activeItem;
          return (
            <section
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex  items-center justify-between rounded-full cursor-pointer transition-all duration-300 ${isActive ? '' : 'border border-[#EBEEFF]'}`}
              style={{
                // margin:'20px',
                marginTop:'20px',
                padding:'10px',
                background: isActive ? 'linear-gradient(135deg, #F2F0FF 0%, #E9E6FF 100%)' : '#FFFFFF',
              }}
            >
              <div className="flex items-center gap-2">
                <Image src={isActive ? item.activeIcon : item.icon} alt={item.name} width={20} height={20} />
                <span
                  className="font-redhat"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: isActive ? 600 : 500,
                    marginLeft:'10px',
                    color: isActive ? '#2D0F58' : '#49526A',
                  }}
                >
                  {item.name}
                </span>
              </div>
              {item.count !== null && (
                <span
                  className="text-xs font-medium font-redhat rounded-full flex items-center justify-center"
                  style={{
                    minWidth: '16px',
                    padding: '2px 4px',
                    fontFamily: 'Inter, sans-serif',
                    color: '#2B0B4F',
                    border: '1px solid #9B87F6',
                    background: '#D2D3F3',
                    fontSize: '10px',
                    lineHeight: '14px',
                  }}
                >
                  {item.count}
                </span>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPopup;

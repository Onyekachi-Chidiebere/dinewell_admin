"use client";

import { useTitle } from "@/context/TitleContext";
import { useEffect } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import restaurantsIcon from "../../assets/svg/dashboardrestaurants.svg";
import customersIcon from "../../assets/svg/dashboardcustomers.svg";
import Image from "next/image";

const RestaurantsIcon = () => <Image src={restaurantsIcon} alt="Restaurants" width={24} height={24}/>
const CustomersIcon = () => <Image src={customersIcon} alt="Customers" width={24} height={24}/>

export default function Dashboard() {
  const { setTitle, setAction, setActionText } = useTitle();

  useEffect(() => {
    setTitle("Dashboard");
    // setActionText("New Restaurant");
    // setAction(() => () => alert("New Restaurant clicked!"));
  }, [setTitle, setAction, setActionText]);

  const stats = [
    { title: "Total Registered ", data: 300, label: "RESTAURANTS" },
    { title: "May Registered ", data: 19, label: "RESTAURANTS" },
    { title: "Total Active ", data: 296, label: "RESTAURANTS" },
    { title: "Inactive ", data: 4, label: "RESTAURANTS" },
  ];
  const customersStats = [
    { title: "Total Registered ", data: 3010, label: "CUSTOMERS" },
    { title: "May Registered ", data: 199, label: "CUSTOMERS" },
    { title: "Total Active ", data: 296, label: "CUSTOMERS" },
    { title: "Inactive ", data: 40, label: "CUSTOMERS" },
  ];

  return (
    <div className="flex p-8" style={{ gap: '10px', padding: '40px' }}>
      <BreadCrumbs 
        icon={<RestaurantsIcon />} 
        title="RESTAURANTS" 
        stats={stats} 
      />
      <BreadCrumbs 
        icon={<CustomersIcon />} 
        title="CUSTOMERS" 
        stats={customersStats} 
      />
    </div>
  );
}
"use client";

import { useTitle } from "@/context/TitleContext";
import { useEffect } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import restaurantsIcon from "../../assets/svg/dashboardrestaurants.svg";
import customersIcon from "../../assets/svg/dashboardcustomers.svg";
import Image from "next/image";
import Graph from "@/components/Graph";
import LeaderBoard from "@/components/LeaderBoard";

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

  const graphDatasets = [
    {
      name: 'User Activity',
      color: '#5D47C1',
      data: [
        { name: 'Sun 5th', value: 10.5 },
        { name: 'Mon 6th', value: 10.5 },
        { name: 'Tue 7th', value: 9 },
        { name: 'Wed 8th', value: 5 },
        { name: 'Thur 9th', value: 11.8 },
        { name: 'Fri 10th', value: 9.8 },
        { name: 'Sat 11th', value: 9.8 },
        { name: 'Sun 12th', value: 12.2 },
        { name: 'Mon 13th', value: 13 },
        { name: 'Tue 14th', value: 8.5 },
        { name: 'Wed 15th', value: 11 },
        { name: 'Thur 16th', value: 7.2 },
        { name: 'Fri 17th', value: 8 },
      ]
    },
  
  ];

  const graphPointsDatasets = [
    {
      name: 'Points Redeemed ',
      color: '#5D47C1',
      data: [
        { name: 'Sun 5th', value: 10.5 },
        { name: 'Mon 6th', value: 10.5 },
        { name: 'Tue 7th', value: 9 },
        { name: 'Wed 8th', value: 5 },
        { name: 'Thur 9th', value: 11.8 },
        { name: 'Fri 10th', value: 9.8 },
        { name: 'Sat 11th', value: 9.8 },
        { name: 'Sun 12th', value: 12.2 },
        { name: 'Mon 13th', value: 13 },
        { name: 'Tue 14th', value: 8.5 },
        { name: 'Wed 15th', value: 11 },
        { name: 'Thur 16th', value: 7.2 },
        { name: 'Fri 17th', value: 8 },
      ]
    },
    {
      name: 'Points Earned',
      color: '#EF7013',
      data: [
        { name: 'Sun 5th', value: 8.2 },
        { name: 'Mon 6th', value: 8.5 },
        { name: 'Tue 7th', value: 7.8 },
        { name: 'Wed 8th', value: 4.5 },
        { name: 'Thur 9th', value: 10.2 },
        { name: 'Fri 10th', value: 8.9 },
        { name: 'Sat 11th', value: 9.1 },
        { name: 'Sun 12th', value: 11.5 },
        { name: 'Mon 13th', value: 12.1 },
        { name: 'Tue 14th', value: 7.9 },
        { name: 'Wed 15th', value: 10.0 },
        { name: 'Thur 16th', value: 6.5 },
        { name: 'Fri 17th', value: 7.2 },
      ]
    }
  ];
  const customersStats = [
    { title: "Total Registered ", data: 3010, label: "CUSTOMERS" },
    { title: "May Registered ", data: 199, label: "CUSTOMERS" },
    { title: "Total Active ", data: 296, label: "CUSTOMERS" },
    { title: "Inactive ", data: 40, label: "CUSTOMERS" },
  ];

  return (
   <div>
     <div className="flex p-8" style={{ gap: '10px', padding: ' 10px 40px ' }}>
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
    <div className="flex p-8" style={{ gap: '10px', padding: ' 10px 40px ' }}>
        <Graph 
          title="USER ACTIVITY"
          datasets={graphDatasets}
          xAxisKey="name"
          yAxisFormatter={(tick) => `${tick}k`}
          yAxisDomain={[0, 20]}
          yAxisTicks={[0, 5, 10, 15, 20]}
        />
     <div className="w-[40%] flex">
      <LeaderBoard title="CUSTOMER LEADERBOARD">
        <p>1. Chidiebere</p>
      </LeaderBoard>
     </div>
    </div>
    <div className="flex p-8" style={{ gap: '10px', padding: ' 10px 40px ' }}>
      
     <div className="w-[40%] flex">
      <LeaderBoard title="RESTAURANT LEADERBOARD"
      colors = {{ background: '#F9F1EC', border: '#D7DDFF' }}>
        <p>1. KFC</p>
      </LeaderBoard>
     </div>
     <Graph 
        title="POINTS GRAPH"
        datasets={graphPointsDatasets}
        xAxisKey="name"
        yAxisFormatter={(tick) => `${tick} M`}
        yAxisDomain={[0, 20]}
        yAxisTicks={[0, 5, 10, 15, 20]}
      />
    </div>
      
     
   </div>
  );
}
"use client";

import { useTitle } from "@/context/TitleContext";
import { useEffect } from "react";
import BreadCrumbs from "@/components/BreadCrumbs";
import restaurantsIcon from "../../assets/svg/dashboardrestaurants.svg";
import customersIcon from "../../assets/svg/dashboardcustomers.svg";
import Image from "next/image";
import Graph from "@/components/Graph";
import LeaderBoard from "@/components/LeaderBoard";
import { useDashboard } from "@/customHooks/useDashboard";

const RestaurantsIcon = () => <Image src={restaurantsIcon} alt="Restaurants" width={24} height={24}/>
const CustomersIcon = () => <Image src={customersIcon} alt="Customers" width={24} height={24}/>

export default function Dashboard() {
  const { setTitle, setAction, setActionText } = useTitle();
  const { data, loading, error, refreshData } = useDashboard();

  useEffect(() => {
    setTitle("Dashboard");
    // setActionText("New Restaurant");
    // setAction(() => () => alert("New Restaurant clicked!"));
  }, [setTitle, setAction, setActionText]);

  // Restaurant statistics from API
  const restaurantStats = data?.restaurants ? [
    { title: "Total Registered ", data: data.restaurants.totalRegistered, label: "RESTAURANTS" },
    { title: `${data.restaurants.month } Registered`, data: data.restaurants.monthlyRegistered, label: "RESTAURANTS" },
    { title: "Total Active ", data: data.restaurants.totalActive, label: "RESTAURANTS" },
    { title: "Inactive ", data: data.restaurants.totalInactive, label: "RESTAURANTS" },
  ] : [
    { title: "Total Registered ", data: 0, label: "RESTAURANTS" },
    { title: "May Registered ", data: 0, label: "RESTAURANTS" },
    { title: "Total Active ", data: 0, label: "RESTAURANTS" },
    { title: "Inactive ", data: 0, label: "RESTAURANTS" },
  ];

  // User activity graph data from API
  const graphDatasets = data?.userActivity ? [
    {
      name: 'User Activity',
      color: '#5D47C1',
      data: data.userActivity
    }
  ] : [
    {
      name: 'User Activity',
      color: '#5D47C1',
      data: []
    }
  ];

  // Points graph data from API
  const graphPointsDatasets = data?.pointsData ? [
    {
      name: 'Points Redeemed',
      color: '#5D47C1',
      data: data.pointsData.map(item => ({ name: item.name, value: item.pointsRedeemed }))
    },
    {
      name: 'Points Issued',
      color: '#EF7013',
      data: data.pointsData.map(item => ({ name: item.name, value: item.pointsIssued }))
    }
  ] : [
    {
      name: 'Points Redeemed',
      color: '#5D47C1',
      data: []
    },
    {
      name: 'Points Issued',
      color: '#EF7013',
      data: []
    }
  ];
  // Customer statistics from API
  const customerStats = data?.customers ? [
    { title: "Total Registered ", data: data.customers.totalRegistered, label: "CUSTOMERS" },
    { title: `${data.customers.month } Registered`, data: data.customers.monthlyRegistered, label: "CUSTOMERS" },
    { title: "Total Active ", data: data.customers.totalActive, label: "CUSTOMERS" },
    { title: "Inactive ", data: data.customers.totalInactive, label: "CUSTOMERS" },
  ] : [
    { title: "Total Registered ", data: 0, label: "CUSTOMERS" },
    { title: "May Registered ", data: 0, label: "CUSTOMERS" },
    { title: "Total Active ", data: 0, label: "CUSTOMERS" },
    { title: "Inactive ", data: 0, label: "CUSTOMERS" },
  ];

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Dashboard</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={refreshData}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
   <div>
     <div className="flex p-8" style={{ gap: '10px', padding: ' 10px 40px ' }}>
      <BreadCrumbs 
        icon={<RestaurantsIcon />} 
        title="RESTAURANTS" 
        stats={restaurantStats} 
      />
      <BreadCrumbs 
        icon={<CustomersIcon />} 
        title="CUSTOMERS" 
        stats={customerStats} 
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
        {data?.customerLeaderboard && data.customerLeaderboard.length > 0 ? (
          data.customerLeaderboard.map((customer, index) => (
            <div key={customer.id} className="flex items-center justify-between p-2">
              <span className="font-medium">{customer.rank}. {customer.name}</span>
              <span className="text-sm text-gray-600">{customer.totalPoints} pts</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No customer data available</p>
        )}
      </LeaderBoard>
     </div>
    </div>
    <div className="flex p-8" style={{ gap: '10px', padding: ' 10px 40px ' }}>
      
     <div className="w-[40%] flex">
      <LeaderBoard title="RESTAURANT LEADERBOARD"
      colors = {{ background: '#F9F1EC', border: '#D7DDFF' }}>
        {data?.restaurantLeaderboard && data.restaurantLeaderboard.length > 0 ? (
          data.restaurantLeaderboard.map((restaurant, index) => (
            <div key={restaurant.id} className="flex items-center justify-between p-2">
              <span className="font-medium">{restaurant.rank}. {restaurant.name}</span>
              <span className="text-sm text-gray-600">{restaurant.totalPoints} pts</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No restaurant data available</p>
        )}
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
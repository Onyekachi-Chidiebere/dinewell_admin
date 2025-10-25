import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { showError } from '@/utils/toast';

// Types
export interface DashboardStats {
  totalRegistered: number;
  monthlyRegistered: number;
  month:string;
  totalActive: number;
  totalInactive: number;
}

export interface UserActivityData {
  name: string;
  value: number;
}

export interface LeaderboardItem {
  rank: number;
  id: number;
  name: string;
  logo?: string;
  profileImage?: string;
  totalPoints: number;
  transactionCount: number;
}

export interface PointsGraphData {
  name: string;
  pointsIssued: number;
  pointsRedeemed: number;
}

export interface DashboardData {
  restaurants: DashboardStats;
  customers: DashboardStats;
  userActivity: UserActivityData[];
  restaurantLeaderboard: LeaderboardItem[];
  customerLeaderboard: LeaderboardItem[];
  pointsData: PointsGraphData[];
}

interface UseDashboardReturn {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  getRestaurantStats: () => Promise<DashboardStats>;
  getCustomerStats: () => Promise<DashboardStats>;
  getUserActivity: () => Promise<UserActivityData[]>;
  getRestaurantLeaderboard: () => Promise<LeaderboardItem[]>;
  getCustomerLeaderboard: () => Promise<LeaderboardItem[]>;
  getPointsGraph: () => Promise<PointsGraphData[]>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const useDashboard = (): UseDashboardReturn => {
  const { getAccessToken } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper function to make authenticated API calls
  const makeApiCall = async (endpoint: string) => {
    const token = getAccessToken();
    if (!token) {
      throw new Error('No access token available');
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'API call failed');
    }

    return result.data;
  };

  // Get restaurant statistics
  const getRestaurantStats = async (): Promise<DashboardStats> => {
    return await makeApiCall('/admin/statistics/restaurants');
  };

  // Get customer statistics
  const getCustomerStats = async (): Promise<DashboardStats> => {
    return await makeApiCall('/admin/statistics/customers');
  };

  // Get user activity data
  const getUserActivity = async (): Promise<UserActivityData[]> => {
    const result = await makeApiCall('/admin/statistics/user-activity');
    return result.data;
  };

  // Get restaurant leaderboard
  const getRestaurantLeaderboard = async (): Promise<LeaderboardItem[]> => {
    return await makeApiCall('/admin/statistics/restaurant-leaderboard');
  };

  // Get customer leaderboard
  const getCustomerLeaderboard = async (): Promise<LeaderboardItem[]> => {
    return await makeApiCall('/admin/statistics/customer-leaderboard');
  };

  // Get points graph data
  const getPointsGraph = async (): Promise<PointsGraphData[]> => {
    const result = await makeApiCall('/admin/statistics/points-graph');
    // Transform the data to match our interface
    const pointsIssued = result.pointsIssued.data;
    const pointsRedeemed = result.pointsRedeemed.data;
    
    return pointsIssued.map((item: any, index: number) => ({
      name: item.name,
      pointsIssued: item.value,
      pointsRedeemed: pointsRedeemed[index]?.value || 0
    }));
  };

  // Get complete dashboard data
  const getDashboardOverview = async (): Promise<DashboardData> => {
    return await makeApiCall('/admin/statistics/dashboard-overview');
  };

  // Refresh all data
  const refreshData = async () => {
    setLoading(true);
    setError(null);

    try {
      const overview = await getDashboardOverview();
      setData(overview);
    } catch (err: any) {
      console.error('Dashboard data fetch error:', err);
      setError(err.message || 'Failed to fetch dashboard data');
      showError(err.message || 'Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  };

  // Load data on mount
  useEffect(() => {
    refreshData();
  }, []);

  return {
    data,
    loading,
    error,
    refreshData,
    getRestaurantStats,
    getCustomerStats,
    getUserActivity,
    getRestaurantLeaderboard,
    getCustomerLeaderboard,
    getPointsGraph,
  };
};

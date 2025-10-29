import { useState, useEffect } from 'react';
import axios from 'axios';
import { showError } from '@/utils/toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface PointRecord {
  id: number;
  restaurant_name: string;
  customer_name: string;
  points: number;
  type: 'issue' | 'redeem';
  date_used: string;
}

export interface PointStatistics {
  total_points: number;
  total_used: number;
  total_redeemed: number;
}

export interface PointPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface PointResponse {
  statistics: PointStatistics;
  points: PointRecord[];
  pagination: PointPagination;
}

interface UsePointsReturn {
  data: PointResponse | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  fetchPoints: (page?: number, limit?: number, type?: string) => Promise<void>;
}

export const usePoints = (): UsePointsReturn => {
  const [data, setData] = useState<PointResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPoints = async (page: number = 1, limit: number = 10, type: string = 'all'): Promise<void> => {
    if (!API_BASE_URL) {
      setError('API URL not configured');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/points/admin/list`, {
        params: { page, limit, type },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setData(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch points';
      setError(errorMessage);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async (): Promise<void> => {
    if (data) {
      await fetchPoints(data.pagination.currentPage, data.pagination.itemsPerPage, 'all');
    } else {
      await fetchPoints();
    }
  };

  useEffect(() => {
    fetchPoints();
  }, []);

  return {
    data,
    loading,
    error,
    refreshData,
    fetchPoints,
  };
};

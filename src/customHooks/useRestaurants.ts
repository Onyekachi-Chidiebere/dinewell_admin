import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '@/context/AuthContext';
import { showError } from '@/utils/toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  status: 'active' | 'pending' | 'disabled';
  email: string;
  phone: string;
  dateCreated: string;
}

export interface RestaurantStatistics {
  all: number;
  active: number;
  pending: number;
  disabled: number;
}

export interface RestaurantPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface RestaurantResponse {
  statistics: RestaurantStatistics;
  restaurants: Restaurant[];
  pagination: RestaurantPagination;
}

interface UseRestaurantsReturn {
  data: RestaurantResponse | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  fetchRestaurants: (page?: number, limit?: number) => Promise<void>;
}

export const useRestaurants = (): UseRestaurantsReturn => {
  const [data, setData] = useState<RestaurantResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { accessToken } = useAuth();

  const fetchRestaurants = async (page: number = 1, limit: number = 10): Promise<void> => {
    if (!API_BASE_URL) {
      setError('API URL not configured');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/merchant/restaurants`, {
        params: { page, limit },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setData(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch restaurants';
      setError(errorMessage);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async (): Promise<void> => {
    if (data) {
      await fetchRestaurants(data.pagination.currentPage, data.pagination.itemsPerPage);
    } else {
      await fetchRestaurants();
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return {
    data,
    loading,
    error,
    refreshData,
    fetchRestaurants,
  };
};

import { useState, useEffect } from 'react';
import axios from 'axios';
import { showError } from '@/utils/toast';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  total_points_earned: number;
  total_restaurants_visited: number;
  date_created: string;
}

export interface CustomerStatistics {
  total_customers: number;
}

export interface CustomerPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface CustomerResponse {
  statistics: CustomerStatistics;
  customers: Customer[];
  pagination: CustomerPagination;
}

interface UseCustomersReturn {
  data: CustomerResponse | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  fetchCustomers: (page?: number, limit?: number) => Promise<void>;
}

export const useCustomers = (): UseCustomersReturn => {
  const [data, setData] = useState<CustomerResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async (page: number = 1, limit: number = 10): Promise<void> => {
    if (!API_BASE_URL) {
      setError('API URL not configured');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/client/customers`, {
        params: { page, limit },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setData(response.data);
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch customers';
      setError(errorMessage);
      showError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async (): Promise<void> => {
    if (data) {
      await fetchCustomers(data.pagination.currentPage, data.pagination.itemsPerPage);
    } else {
      await fetchCustomers();
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return {
    data,
    loading,
    error,
    refreshData,
    fetchCustomers,
  };
};

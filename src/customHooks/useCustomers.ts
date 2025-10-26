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

export interface CustomerDetailsInfo {
  id: number;
  name: string;
  email: string;
  phone: string;
  profile_image: string;
}

export interface CustomerDetailsStatistics {
  total_restaurant_visits: number;
  points_earned: number;
  points_redeemed: number;
}

export interface PointTransaction {
  id: number;
  restaurant_name: string;
  points: number;
  point_type: 'Earned' | 'Redeemed';
  date_used: string;
}

export interface CustomerDetailsResponse {
  customer: CustomerDetailsInfo;
  statistics: CustomerDetailsStatistics;
  point_transactions: PointTransaction[];
  pagination: CustomerPagination;
}

interface UseCustomersReturn {
  data: CustomerResponse | null;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  fetchCustomers: (page?: number, limit?: number) => Promise<void>;
  getCustomerDetails: (customerId: number, page?: number, limit?: number) => Promise<CustomerDetailsResponse | null>;
  detailsLoading: boolean;
  detailsError: string | null;
}

export const useCustomers = (): UseCustomersReturn => {
  const [data, setData] = useState<CustomerResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

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

  const getCustomerDetails = async (customerId: number, page: number = 1, limit: number = 10): Promise<CustomerDetailsResponse | null> => {
    if (!API_BASE_URL) {
      setDetailsError('API URL not configured');
      return null;
    }

    setDetailsLoading(true);
    setDetailsError(null);

    try {
      const response = await axios.get(`${API_BASE_URL}/client/customers/${customerId}`, {
        params: { page, limit },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (err: any) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to fetch customer details';
      setDetailsError(errorMessage);
      showError(errorMessage);
      return null;
    } finally {
      setDetailsLoading(false);
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
    getCustomerDetails,
    detailsLoading,
    detailsError,
  };
};
